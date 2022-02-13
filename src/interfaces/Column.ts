export default interface Column {
    Field: string;
    Type: string;
    Collation: string | null;
    Null: 'YES' | 'NO';
    Key: string;
    Default: string | null;
    Extra: string;
    Privileges: string;
    Comment: string;
}