class update {
    public updatetry = (field: String, id: string): String => {
        return `select * from \`Try\` where \`${field}\`='${id}'`;

    }
    public updatefield = (field: String, value: string, id: string) => {
        return `update \`Try\` SET \`${field}\`='${value}' where \`age\`='${id}'`
    }
}

export default update;