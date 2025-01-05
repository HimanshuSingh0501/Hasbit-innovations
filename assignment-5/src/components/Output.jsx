export const Output=({classname,content})=>{
    const str=`${classname} text-center`;
    return(
    <input className={str} type="text" value={content} />
    );
}
