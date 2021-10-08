import * as PIXI from 'pixi.js'
import { Spine } from 'pixi-spine'

const app = new PIXI.Application({
    width: 500, height: 500, backgroundAlpha: 0
});

function initPixi() {
    app.loader
        .add('dragon', '/json/dragon/Dragon_Clan.json')
        .add('elf', '/json/elf/Elf_Clan.json')
        .add('ghost', '/json/ghost/Ghost_Clan.json')
        .add('water', '/json/water/Water.json')
        .add('wood', '/json/wood/Wood.json')
        .load(onAssetsLoaded);

    function onAssetsLoaded(loader, res) {
        const spineDataDragon = res.dragon.spineData
        const spineDataElf = res.elf.spineData
        const spineDataGhost = res.ghost.spineData
        const spineDataWater = res.water.spineData
        const spineDataWood = res.wood.spineData

        //Dragon
        let artDragon = new Spine(spineDataDragon);
        artDragon.x = app.screen.width / 2;
        artDragon.y = app.screen.height - 150;
        const HeadDragon = spineDataDragon.findSkin('Head/Head_1')
        const BodyDragon = spineDataDragon.findSkin('Body/Body_1')
        const WingDragon = spineDataDragon.findSkin('Wing/Wing_1')
        HeadDragon.addSkin(BodyDragon)
        HeadDragon.addSkin(WingDragon)
        artDragon.skeleton.setSkinByName('Head/Head_1');
        artDragon.scale.set(0.2);
        artDragon.state.setAnimation(0, 'show', true);

        //Elf
        let artElf = new Spine(spineDataElf);
        artElf.x = app.screen.width / 2;
        artElf.y = app.screen.height - 150;
        const HeadElf = spineDataElf.findSkin('Head/Head_1')
        const BodyElf = spineDataElf.findSkin('Body/Body_1')
        const WingElf = spineDataElf.findSkin('Wing/Wing_1')
        HeadElf.addSkin(BodyElf)
        HeadElf.addSkin(WingElf)
        artElf.skeleton.setSkinByName('Head/Head_1');
        artElf.scale.set(0.2);
        artElf.state.setAnimation(0, 'show', true);

        //Ghost
        let artGhost = new Spine(spineDataGhost);
        artGhost.x = app.screen.width - 300;
        artGhost.y = app.screen.height - 100;
        const HeadGhost = spineDataGhost.findSkin('Head/Head_1')
        const BodyGhost = spineDataGhost.findSkin('Body/Body_1')
        const HandGhost = spineDataGhost.findSkin('Hand/Hand_1')
        HeadGhost.addSkin(BodyGhost)
        HeadGhost.addSkin(HandGhost)
        artGhost.skeleton.setSkinByName('Head/Head_1');
        artGhost.scale.set(0.2);
        artGhost.state.setAnimation(0, 'show', true);

        //Water
        let artWater = new Spine(spineDataWater);
        artWater.x = app.screen.width - 200;
        artWater.y = app.screen.height - 150;
        const HeadWater = spineDataWater.findSkin('Head/Head_1')
        const ArmorWater = spineDataWater.findSkin('Armor/Wood')
        const TailWater = spineDataWater.findSkin('Tail/Tail_1')
        const WeaponWater = spineDataWater.findSkin('Weapon/Weapon_3')
        HeadWater.addSkin(ArmorWater)
        HeadWater.addSkin(TailWater)
        HeadWater.addSkin(WeaponWater)
        artWater.skeleton.setSkinByName('Head/Head_1');
        artWater.scale.set(0.2);
        artWater.state.setAnimation(0, 'show', true);

        //Wood
        let artWood = new Spine(spineDataWood);
        artWood.x = app.screen.width - 120;
        artWood.y = app.screen.height - 150;
        const HeadWood = spineDataWood.findSkin('Head/Head_3')
        const LeftHandWood = spineDataWood.findSkin('L_Hand/L_Hand_1')
        const ArmorWood = spineDataWood.findSkin('Armor/Wood')
        const RightHandWood = spineDataWood.findSkin('R_Hand/R_Hand_3')
        HeadWood.addSkin(LeftHandWood)
        HeadWood.addSkin(ArmorWood)
        HeadWood.addSkin(RightHandWood)
        artWood.skeleton.setSkinByName('Head/Head_3');
        artWood.scale.set(0.2);
        artWood.state.setAnimation(0, 'show', true);

        app.stage.addChildAt(artWood, 0)
        app.stage.addChildAt(artWater, 1)
        app.stage.addChildAt(artDragon, 2)
        app.stage.addChildAt(artElf, 3)
        app.stage.addChildAt(artGhost, 4)

        setArt(0)
    }

    return app
}

function setArt (index) {
    app.stage.children.map(child => child.renderable = false)
    app.stage.children[index].renderable = true
}

export {
    initPixi,
    setArt
}