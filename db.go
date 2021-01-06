/* abstraction layer to communicate with the PostgreSQL database and process its data
*  routines for the 'store' table
*/
package main
import (
        "fmt"
        "log"
        "database/sql"
//        "strconv"
        "strings"
        _"github.com/lib/pq"
)

const (
        host = "localhost"
        port = 5432
        user = "postgres"
        password = "lfant"
        dbname = "bathmap"
)

type Store struct {
        name string
        storenum string
        address string
        zip string
        haspublic string
}

func CheckError(err error) {
        if err != nil {
                panic(err)
        }
}

func SearchZipcode(zip string) ([]string, string) {
        conn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
        db, err := sql.Open("postgres", conn)
        CheckError(err)
        defer db.Close()

        names := make([]string, 0)
        query := "SELECT name FROM store WHERE zip = " + zip
        rows, err := db.Query(query)
        if err != nil {
                log.Fatal(err)
        }
        defer rows.Close()
        for rows.Next() {
                result := new(Store)
                err := rows.Scan(&result.name)
                CheckError(err)
                names = append(names, result.name)
        }
        CheckError(rows.Err())

        return names, query
}

func SearchStorename(name string) ([]string, []string, string) {
        conn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
        db, err := sql.Open("postgres", conn)
        CheckError(err)
        defer db.Close()

        names := make([]string, 0)
        nums := make([]string, 0)
        query := "SELECT name, storenum FROM store WHERE name SIMILAR TO '%" + name + "%'"
        rows, err := db.Query(query)
        if err != nil {
                log.Fatal(err)
        }
        defer rows.Close()
        for rows.Next() {
                result := new(Store)
                err := rows.Scan(&result.name, &result.storenum)
                CheckError(err)
                names = append(names, result.name)
                nums = append(nums, result.storenum)
        }
        CheckError(rows.Err())

        return names, nums, query
}

func NewEntry(name string, storenum string, address string, zip string, haspublic string) (int64, error) {
        conn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
        db, err := sql.Open("postgres", conn)
        CheckError(err)
        defer db.Close()

        str := []string{name, storenum, address, zip, haspublic}
        query := "INSERT INTO store VALUES (" + strings.Join(str, ", ") + ")"
        result, err := db.Exec(query)
        return result.RowsAffected()
}
