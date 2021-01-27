function OperatorOptions(): string {
        const ops: string[] = ["(search)", "=", "!=", "<", ">", "<=", ">="] ;
        let s: string = '<select id="ops">' ;
        for (let i: number = 0 ; i < ops.length ; ++i) {
                s += `<option value="${ops[i]}">${ops[i]}</option>` ;
        }
        s += "</select>" ;
        return s ;
}

export var initSelectForm: string = '<form id="tbl" action="/processform" method="POST"><label for="tblName"><p>Table:</p><input type="text" id="tblName" name="tblName"><label for="criteria0"><input type="text" id="criteria0" name="criteria0">' + OperatorOptions() + '<label for="condition0"><input type="text" id="condition0" name="condition0"></form>' ;

export var initInsertForm: string = '<form id="container" action="/processform" method="POST"><label for="tableName"><p>Table:</p><input type="text" id="tableName" name="tableName"></br>s<label for="field0"><input type="text" id="field0" name="field0"></br><label for="value0"><input type="text" id="value0" name="value0"></br><label for="numinputs"><input type="number" id="numinputs" name="numinputs" value="1"></form>' ;
