const timestampRegex = new RegExp(/(CURRENT_TIMESTAMP)(\(?[0-9]?\))?/);

export default (data: any) => {
    let type = '';
    switch (data.Type) {
        case 'int unsigned':
            type += `integer('${data.Field}').unsigned()`;
            break;
        case 'int':
            type += `integer('${data.Field}')`;
            break;
        case 'bigint':
            type += `bigInteger('${data.Field}')`;
            break;
        case 'mediumtext':
        case 'longtext':
        case 'text':
            type += `text('${data.Field}', '${data.Type}')`;
            break;
        case 'json':
            type += `json('${data.Field}')`;
            break;
        case 'blob':
            type += `binary('${data.Field}')`;
            break;
        case 'timestamp':
            type += `timestamp('${data.Field}')`;
            break;
        case 'date':
            type += `date('${data.Field}')`;
            break;
        default:
            type += `specificType('${data.Field}', \`${data.Type}\`)`;
            break;
    }

    if (data.Null === 'YES') {
        type += '.nullable()';
    }

    if (data.Default) {
        const timestamp = data.Default.match(timestampRegex);
        if (timestamp) {
            if (timestamp[2]) {
                type += `.defaultTo(knex.fn.now${timestamp[2]})`;
            } else {
                type += `.defaultTo(knex.fn.now())`;
            }
        } else {
            type += `.defaultTo('${data.Default}')`;
        }
    } else {
        type += '.defaultTo(null)';
    }

    if (data.Comment) {
        type += `.comment('${data.Comment}')`;
    }

    return type;
}