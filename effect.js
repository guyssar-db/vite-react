document.getElementById('effect').addEventListener('input', function () {
    let ability = this.value;

    ability = ability.replace(/\[evil\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Evil Deity.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[cost\]/g, '<span id="spankey" class="image-wrapper-COST"><img src="./assets/keywords/Cost.png" alt="Image" class="Iskill3"></span>');
    ability = ability.replace(/\[buddygift\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/BuddyGift.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[1turn\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/1 per Turn Rag.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[1game\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/1 per Game Rag.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[1set\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/1 per set.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[anturn\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Ablility Name.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[cnturn\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Card Name.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[callcost\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Call Cost.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[castcost\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Cast Cost.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[equipcost\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Equip Cost.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[2attack\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Double Attack.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[3attack\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/TripleAttack.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[4attack\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Quadruple Attack.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[6attack\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Hextuple Attack.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[counter\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Counter.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[cattack\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Counter Attack.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[move\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Move.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[soulguard\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Soulguard.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[penetrate\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Penetrate.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[ambush\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Ambush.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[life1\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Life Link 1.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[life2\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Life Link 2.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[life3\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Life Link 3.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[life4\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Life Link 4.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[life5\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Life Link 5.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[lifelose\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Life Lose.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[\]/g, '<span id="spankey" class="image-wrapperfront"><img src="./assets/keywords/nctext.png" alt="Image" class="nctext"></span>');
    ability = ability.replace(/\[b\]/g, '<span id="spankey" class="image-wrapperfront"><img src="./assets/keywords/bnctext.png" alt="Image" class="nctext"></span>');
    ability = ability.replace(/\[omnilord\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Omni Lord-1.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[darkomni\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Omni Lord-2.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[ovt\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Overturn.png" alt="Image" class="Iskill2"></span>');
    ability = ability.replace(/\[ovk\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Overkill.png" alt="Image" class="Iskill2"></span>');
    ability = ability.replace(/\[ovr\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/OverkillREBØØT.png" alt="Image" class="Iskill2"></span>');
    ability = ability.replace(/\[ovh\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Overthrow.png" alt="Image" class="Iskill2"></span>');
    ability = ability.replace(/\[ovd\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/OverDrive.png" alt="Image" class="Iskill2"></span>');
    ability = ability.replace(/\[weaponlink\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Weaponry Link.png" alt="Image" class="Iskill"></span>');

    ability = ability.replace(/\[reversal\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Reversal.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[shadowdive\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Shadow Dive.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[ride\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Ride.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[transform\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Transform.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[imform\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Impact Transform.png" alt="Image" class="Iskill"></span>');
    ability = ability.replace(/\[purge\]/g, '<span id="spankey" class="image-wrapper"><img src="./assets/keywords/Purge.png" alt="Image" class="Iskill"></span>');

    ability = ability.replace(/<</g, '<span class="skk2">《</span>');
    ability = ability.replace(/>>/g, '<span class="skk">》</span>');
    ability = ability.replace(/{/g, '<span class="skk2">【</span>');
    ability = ability.replace(/}/g, '<span class="skk">】</span>');
    ability = ability.replace('[', '<span class=\'under-line\'>[');
    ability = ability.replace(']', ']</span>');
    ability = ability.replace(/--/g, '<span class="skk-dot">•</span>');

    let lines = ability.split('\n');
    let outputHtml = lines.map(line => `<p id='addline'>${line}</p>`).join('');
    document.getElementById('se').innerHTML = outputHtml;
    
});