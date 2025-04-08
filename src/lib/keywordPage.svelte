<script>
export let keyUI;
</script>

<div class=" justify-center items-center gap-[1rem] flex-wrap w-full h-screen bg-gray-950 w-[90%] p-4">
    <div class="flex w-full mt-5 gap-2 rounded-lg text-white text-center">
        <div class="flex w-full mt-3 gap-2 rounded-lg text-white text-center">
            <p class="w-5/6 px-7 py-6 md:py-4 rounded-lg bg-gray-900 text-white text-center text-xl">Keywords</p>
            <button class="w-1/6 px-7 py-6 md:py-4 rounded-lg bg-gray-900 text-white text-center text-xl" on:click={keyUI} >X</button>
        </div>
    </div>

    <div class="overflow-y-scroll h-[520px] md:h-[530px] lg:h-[600px] mt-10">
        <!-- Attack icon -->
        <div class="text-left font-bold text-xl my-5">
            <p>Attack Icon</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    
            <div class="flex justify-between px-10 py-5 items-center gap-4 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors rounded-lg">
                <img src="/assets/keywords/Double Attack.png" alt="" class="ShowIskill">
                <span class="block">
                    <p class="bg-gray-950 p-2 rounded-md">[2attack]</p>
                </span>
            </div>
    
            <div class="flex justify-between px-10 py-5 items-center gap-4 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors rounded-lg">
                <img src="/assets/keywords/TripleAttack.png" alt="" class="ShowIskill">
                <span class="block">
                    <p class="bg-gray-950 p-2 rounded-md">[3attack]</p>
                </span>
            </div>
    
            <div class="flex justify-between px-10 py-5 items-center gap-4 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors rounded-lg">
                <img src="/assets/keywords/Quadruple Attack.png" alt="" class="ShowIskill">
                <span class="block">
                    <p class="bg-gray-950 p-2 rounded-md">[4attack]</p>
                </span>
            </div>
    
            <div class="flex justify-between px-10 py-5 items-center gap-4 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors rounded-lg">
                <img src="/assets/keywords/Hextuple Attack.png" alt="" class="ShowIskill">
                <span class="block">
                    <p class="bg-gray-950 p-2 rounded-md">[6attack]</p>
                </span>
            </div>
        </div>
        <!-- Attack icon -->
    
        <!-- Omni icon -->
        <div class="text-left font-bold text-xl my-5 mt-10">
            <p>Omni Lord Icon</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    
            <div class="flex justify-between px-10 py-5 items-center gap-4 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors rounded-lg">
                <img src="/assets/keywords/Omni Lord-1.png" alt="" class="ShowIskill">
                <span class="block">
                    <p class="bg-gray-950 p-2 rounded-md">[omnilord]</p>
                </span>
            </div>
    
            <div class="flex justify-between px-10 py-5 items-center gap-4 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors rounded-lg">
                <img src="/assets/keywords/Omni Lord-2.png" alt="" class="ShowIskill">
                <span class="block">
                    <p class="bg-gray-950 p-2 rounded-md">[darkomnilord]</p>
                </span>
            </div>
        </div>
        <!-- Omni icon -->
    
        <!-- Cost icon -->
        <div class="text-left font-bold text-xl my-5 mt-10">
            <p>Cost Icon</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    
            <div class="flex justify-between px-10 py-5 items-center gap-4 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors rounded-lg">
                <img src="/assets/keywords/Call Cost.png" alt="" class="ShowIskill">
                <span class="block">
                    <p class="bg-gray-950 p-2 rounded-md">[callcost]</p>
                </span>
            </div>
    
            <div class="flex justify-between px-10 py-5 items-center gap-4 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors rounded-lg">
                <img src="/assets/keywords/Cast Cost.png" alt="" class="ShowIskill">
                <span class="block">
                    <p class="bg-gray-950 p-2 rounded-md">[castcost]</p>
                </span>
            </div>
    
            <div class="flex justify-between px-10 py-5 items-center gap-4 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors rounded-lg">
                <img src="/assets/keywords/Equip Cost.png" alt="" class="ShowIskill">
                <span class="block">
                    <p class="bg-gray-950 p-2 rounded-md">[equipcost]</p>
                </span>
            </div>
        </div>
        <!-- Cost icon -->
    </div>

</div>

<style>

</style>