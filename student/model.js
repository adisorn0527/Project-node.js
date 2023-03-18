let data =[
    {id : 1 , title : 'นาย อดิศร รักคล้าย', grade :'3.08'},
    {id : 2 , title : 'นาย ธนดล จงรักษ์', grade :'3.06'},
    {id : 3 , title : 'นาย อดิศักดิ์ อุทัยแจ่ม', grade :'2.98'},
    {id : 4 , title : 'น.ส. วิรัลพัชร สิริรัตนาวัฒน์', grade:'3.56'},
    {id : 5 , title : 'นาย มาณี รักชาติ', grade :'3.12'},
    {id : 6 , title : 'นาย มานะ รักชาติ', grade :'3.60'},
    {id : 7 , title : 'นาย ดิแร็ค มณีโชติ', grade :'3.43'},
    {id : 8 , title : 'นาย กฤษณพงษ์ แต่งเมือง', grade :'3.25'},
    {id : 9 , title : 'นาย ภูวดล วิชัยดิษฐ', grade :'3.20'},
    {id :10 , title : 'นาย ภูวิ วินัยธรรม', grade :'3.14'},
];
function getAll() {
    return Promise.resolve(data);
}
function remove(id){
    data = data.filter((student)=> student.id !==id);
    return Promise.resolve();
}
module.exports = {getAll, remove}
