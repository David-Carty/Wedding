

var effects = document.getElementById("effects");
//effects.addEventListener('touchstart', activateEffectesDropDown, false);
effects.addEventListener('mousedown', activateEffectesDropDown, false);





function applyEffect(effectsEl) {

    var effect = "";
    var effectLabel = "Original"
    var imgListEl = document.getElementById("imageList")
    var imgGall = document.getElementById("image-gallery")
    var imgEl = effectsEl.querySelector("img");
    if (imgEl.classList.contains("sepia")) {
        effect = "sepia";
        effectLabel = "Sepia";
    }
    if (imgEl.classList.contains("mono")) {
        effect = "mono";
        effectLabel = "Svartvitt";
    }
    if (effect === "") {
        imgGall.classList.remove("effect-mono", "effect-sepia");
        imgListEl.classList.remove("effect-mono", "effect-sepia");
    } else {
        imgGall.classList.remove("effect-mono", "effect-sepia");
        imgListEl.classList.remove("effect-mono", "effect-sepia");
        imgGall.classList.add("effect-" + effect);
        imgListEl.classList.add("effect-" + effect);

    }
    var effectsLabel = effects.querySelector(".effects-label");
    effectsLabel.innerHTML = effectLabel;
    activateEffectesDropDown()

}

function applySwatch(swatchEl) {
    var i;
    var swatchOuters = document.querySelectorAll(".swatch-outer");
    for (i = 0; i < swatchOuters.length; ++i) {
        swatchOuters[i].classList.remove("selected");
    }
    swatchEl.classList.add("selected");
    if (swatchEl.classList.contains("swatch-light")) {

    } else {

    }
}

function activateEffectesDropDown(e) {
    var content = effects.parentNode.querySelector('.dropdown-content');
    var arrow = effects.querySelector('.dd-arrow');
    if (effects.classList.contains("open")) {
        content.style.display = "none";
        effects.classList.remove("open")
        arrow.classList.remove("arrow-up")
        arrow.classList.add("arrow-down")
    } else {
        content.style.display = "block";
        effects.classList.add("open")
        arrow.classList.remove("arrow-down")
        arrow.classList.add("arrow-up")

    }
    e.preventDefault();
}