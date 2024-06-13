---
layout: layouts/base.njk
eleventyNavigation:
  key: About Me
  order: 3
---

8. Codepen links added below. 

<div class="container" >
    <div class="item item-1" style="background-color: #fb7185;"> 

        <SELECT WIDTH=20 onChange="JumpToIt(this)">
        <OPTION VALUE="None"> Select a JavaScript resource from this list --->
        <OPTION VALUE="https://codepen.io/Mehzabeen/pen/mdYmaqO/">JavaScript Addition
        <OPTION VALUE="https://codepen.io/Mehzabeen/pen/GRammJQ/">JavaScript OnClick Test
        <OPTION VALUE="https://codepen.io/Mehzabeen/pen/ExzWRBo/">JavaScript Template Literals
        <OPTION VALUE="https://codepen.io/Mehzabeen/pen/dyEveLW/">JavaScript String Concatenation
        <OPTION VALUE="https://codepen.io/Mehzabeen/pen/gOJmzjo/">JavaScript Basic Arithmetic
        <OPTION VALUE="https://codepen.io/Mehzabeen/pen/OJYpZMg/">JavaScript More Scripts</OPTION>
        </SELECT>
        
    Select Codepen Link
    </div> 
    

<SCRIPT LANGUAGE ="JavaScript">

    function JumpToIt(list)
    {
    var selection = list.options[list.selectedIndex].value
    if (selection !="None")
    location.href = selection
    }
    
    </SCRIPT>
https://codepen.io/Mehzabeen/pen/VwOrKmG?editors=1111