const tagsEl=document.getElementById('tags');
const textarea=document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup',(e)=>{
    createTage(e.target.value);
});

function createTage(input){
const tags=input.split(',').filter(tag=>tag.trim() !=='').map(tag=>tag.trim());

tagsEl.innerHTML='';
tags.forEach(tag=>{
    const tagEl=document.createElement('span')
    tagEl.classList.add('tag');
    tagEl.innerHTML=tag
    tagsEl.appendChild(tagEl);


})
}