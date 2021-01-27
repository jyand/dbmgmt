function OperatorOptions(): string {
        const ops: string[] = ["(search)", "=", "!=", "<", ">", "<=", ">="] ;
        let s: string = '<select id="ops">' ;
        for (let i: number = 0 ; i < ops.length ; ++i) {
                s += `<option value="${ops[i]}">${ops[i]}</option>` ;
        }
        s += "</select>" ;
        return s ;
}

export var initSelectForm: string = '<form id="tbl"><label for="tblName"><p>Table:</p><input type="text" id="tblName" name="tblName"></form></br><p>Criteria:</p><form id="criteria"><label for="criteria0"><input type="text" id="criteria0" name="criteria0">' + OperatorOptions() + '<label for="condition0"><input type="text" id="condition0" name="condition0"></form>' ;

export var initInsertForm: string = '<form id="table"><label for="tableName"><p>Table:</p><input type="text" id="tableName" name="tableName"></form></br> <p>Fields:</p><form id="field"><label for="field0"><input type="text" id="field0" name="field0"></form></br> <p>Values:</p><form id="value"><label for="value0"><input type="text" id="value0" name="value0"></form></br> <p>Inputs:</p><form id="inputs"><label for="numinputs"><input type="number" id="numinputs" name="numinputs" value="1"></form></br>' ;
