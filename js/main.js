$(document).ready(function(){

    $nav=$(".nav")
    $toggleCollapse=$(".toggle-collapse")


    /**click Event on toggle menu */

    $toggleCollapse.click(function(){
        $nav.toggleClass("collapse");
    })



})