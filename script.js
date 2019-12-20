"use strict";

{

    const sidebarGroup1Paras = document.querySelectorAll(".sidebar__group1__para");
    const sidebarGroup2Para = document.querySelector(".sidebar__group2__para");

    function removeActiveClass(event) {
        for (const para of sidebarGroup1Paras) {
            if (para.matches(".active")) {
                para.classList.remove("active");
                break;
            }
        }
    }

    function selectPara(event) {
        removeActiveClass();

        const currentlySelectedPara = event.currentTarget;
        currentlySelectedPara.classList.add("active");
    }

    function togglePara(event) {
        const sidebarGroup2Para = event.currentTarget;
        sidebarGroup2Para.classList.toggle("active");

        const sidebarGroup2ParaFirstChild = sidebarGroup2Para.firstElementChild;

        if (sidebarGroup2Para.matches(".active")) {
            sidebarGroup2ParaFirstChild.textContent = "Full Self-Driving Added";
        } else {
            sidebarGroup2ParaFirstChild.textContent = "+ Full Self-Driving";
        }
    }

    sidebarGroup1Paras.forEach(para => para.addEventListener("click", selectPara));
    sidebarGroup2Para.addEventListener("click", togglePara);

}