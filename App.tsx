import React from 'react';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BaseViews from './src/screens/BaseViews';
import NativeViews from './src/screens/NativeViews';
import {StatsProvider} from './src/context/Stats';
import Stats from './src/screens/Stats';
import BaseTextInput from './src/screens/BaseTextInput';
import NativeTextInput from './src/screens/NativeTextInput';
import BaseText from './src/screens/BaseText';
import NativeText from './src/screens/NativeText';
const Tab = createBottomTabNavigator();
enableScreens();

export const AMOUNT_OF_ITEMS = new Array(100).fill(0);
export const AMOUNT_OF_BLOCKS = new Array(10).fill(0);
const OPTIONS = {
  unmountOnBlur: true,
};
function App(): JSX.Element {
  return (
    <StatsProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={OPTIONS}>
          <Tab.Screen name="BaseViews" component={BaseViews} />
          <Tab.Screen name="NativeViews" component={NativeViews} />
          <Tab.Screen name="BaseTextInput" component={BaseTextInput} />
          <Tab.Screen name="NativeTextInput" component={NativeTextInput} />
          <Tab.Screen name="BaseText" component={BaseText} />
          <Tab.Screen name="NativeText" component={NativeText} />
          <Tab.Screen name="Stats" component={Stats} />
        </Tab.Navigator>
      </NavigationContainer>
    </StatsProvider>
  );
}

export default App;
export const LONG_TEXT = `
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        efficitur ligula quam, ac pretium nisl fringilla sit amet. Maecenas
        tincidunt erat nulla, eget convallis lectus hendrerit ac. Phasellus
        tempor suscipit feugiat. Ut eu ipsum quis felis ultricies accumsan ut
        faucibus ante. Morbi pellentesque, quam nec maximus semper, augue sem
        iaculis leo, a dignissim lectus justo at lorem. Nam nec nisi non lorem
        sollicitudin feugiat. Aenean gravida aliquam ex id commodo. In ac varius
        magna. Cras non tincidunt dui. Cras volutpat diam sit amet lacus
        eleifend, sed elementum est suscipit. Sed suscipit velit libero,
        malesuada vestibulum tellus pulvinar sed. Duis porta, orci non dapibus
        pellentesque, leo leo pellentesque purus, vitae vulputate libero purus
        non libero. Integer lacinia posuere lobortis. Pellentesque vitae laoreet
        risus, non aliquam eros. Curabitur nec luctus justo. Mauris dui metus,
        laoreet eu commodo non, lacinia eget urna. Mauris consequat ornare
        interdum. Fusce mattis consectetur neque eu bibendum. Maecenas convallis
        lacus lorem, vitae interdum odio imperdiet at. Cras maximus risus in
        suscipit pulvinar. Phasellus sit amet justo eget dui interdum commodo.
        Proin imperdiet viverra sapien ac posuere. Cras purus urna, auctor ut
        tempus eget, sollicitudin non metus. Nunc eget purus sit amet nisl
        facilisis iaculis et ut odio. Morbi facilisis condimentum semper.
        Curabitur sagittis libero elit, ut luctus magna porta mattis. Nam ornare
        metus nulla, ac porta felis bibendum efficitur. Mauris maximus nec massa
        ac vulputate. Aenean a volutpat massa, non faucibus erat. Donec a mauris
        congue, tempus lacus in, volutpat lectus. Fusce placerat tristique
        libero eget malesuada. Phasellus egestas mauris turpis, sed sollicitudin
        erat feugiat id. Aliquam finibus, risus at laoreet vestibulum, quam
        turpis porttitor risus, id laoreet erat augue ac lorem. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Maecenas ac erat felis. Fusce porta lobortis ante a posuere.
        Nam ut turpis sem. Donec elit felis, tincidunt a tincidunt non,
        tincidunt pharetra lectus. Proin ut vulputate lorem, non rhoncus justo.
        Aliquam sit amet mauris vel erat bibendum pretium eget non quam. Ut eu
        sapien a quam ullamcorper porttitor ut nec dolor. Aenean malesuada velit
        et dui facilisis cursus. Maecenas sit amet ex id tellus tincidunt porta.
        Ut blandit tortor et aliquam volutpat. Maecenas ut tortor at libero
        dignissim pretium et vitae lacus. Vivamus a ligula porttitor, varius sem
        at, aliquam odio. Curabitur ante dolor, semper non ex ut, efficitur
        viverra nisi. Donec ultricies arcu libero, sit amet tempor nibh aliquet
        non. Donec velit tellus, dictum non lacus in, pulvinar scelerisque orci.
        Maecenas pellentesque ante sit amet quam commodo ornare. Vivamus luctus
        justo non tellus auctor, nec aliquam justo egestas. Integer dui tortor,
        ultricies finibus diam a, blandit auctor tortor. Cras tempus ante a
        metus dapibus, eu mattis nibh ornare. Pellentesque dui enim, aliquam id
        pulvinar ut, porttitor id libero. Phasellus interdum euismod risus sed
        venenatis. Donec sem neque, bibendum eu lobortis vitae, interdum vel
        erat. Curabitur id nulla suscipit, suscipit tellus eget, mollis sapien.
        Proin et tempor dolor, eget maximus sem. Pellentesque pretium posuere
        ex, eu molestie lectus bibendum quis. In libero felis, hendrerit non
        mauris sed, porttitor gravida metus. Donec laoreet hendrerit est a
        egestas. Vivamus tincidunt sapien libero, aliquet maximus quam facilisis
        sed. Sed id tincidunt odio. Fusce id lorem sed est bibendum accumsan et
        eget lectus. Cras a metus faucibus, dictum mauris eget, finibus diam.
        Pellentesque iaculis, eros nec cursus accumsan, ante urna suscipit
        augue, ac pulvinar tellus risus id sapien. Nunc mollis leo at felis
        consectetur cursus. Mauris dapibus mattis metus, in accumsan eros
        ultricies a. Fusce euismod finibus purus, a mollis nibh feugiat id.
        Proin consequat malesuada magna quis sodales. Curabitur fringilla
        malesuada varius. Aliquam semper dictum ex, vel iaculis lorem imperdiet
        faucibus. Nam a ligula mi. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Fusce vitae tempor turpis.
        Donec molestie felis risus, eget ullamcorper libero ullamcorper in.
        Maecenas sodales varius nulla id vestibulum. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla
        imperdiet consectetur magna, sed interdum enim pretium ut. Cras
        vestibulum lorem nec eros vulputate consequat. Vivamus lectus nisi,
        fringilla eu ultrices et, lobortis vel sem. Curabitur fermentum magna
        vitae eros hendrerit molestie. Maecenas ornare mauris eu eros placerat
        finibus. Cras eu condimentum nisl. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Praesent sed
        enim pulvinar, pulvinar mi non, fringilla purus. Phasellus et felis sit
        amet metus mattis viverra. Sed turpis ipsum, scelerisque vel rhoncus at,
        pretium at dolor. Nam ultrices nibh velit, ac faucibus felis placerat
        sit amet. Donec nunc nulla, dictum non mi non, ultrices semper tellus.
        Mauris porttitor ante vitae ipsum congue blandit. Donec non risus sem.
        Mauris elementum finibus scelerisque. Aliquam gravida interdum orci
        blandit faucibus. Suspendisse est lectus, sagittis vitae fermentum vel,
        feugiat et nisl. Sed suscipit elementum viverra. Sed lobortis fermentum
        sapien, a laoreet dui iaculis id. Donec iaculis elit venenatis nibh
        imperdiet, a tincidunt quam cursus. Aliquam feugiat ullamcorper
        malesuada. Duis nec malesuada lacus. Ut auctor pretium metus. Phasellus
        placerat risus ut tortor ornare, eget dictum nunc euismod. Suspendisse
        quis hendrerit mi. Quisque in faucibus ligula, non ullamcorper risus.
        Mauris ullamcorper commodo luctus. Proin vitae consequat lorem. Vivamus
        erat elit, tempor et arcu ac, viverra dictum nunc. Mauris scelerisque
        erat vitae dui malesuada mollis. Vivamus ornare tempus nibh ut lacinia.
        Aliquam interdum interdum tincidunt. Proin egestas nibh sit amet nunc
        pulvinar suscipit. Curabitur tempor rutrum sollicitudin. Morbi at magna
        sed odio iaculis iaculis id eu lectus. Suspendisse magna purus, maximus
        eget dui et, cursus venenatis lorem. Mauris convallis dignissim sem, id
        porttitor enim maximus vel. Sed at arcu et elit maximus malesuada. Fusce
        id justo dapibus, maximus massa ac, malesuada dui. Sed congue non elit
        ac accumsan. Donec sit amet lacus iaculis, tempor ipsum id, lacinia
        metus. In consequat nibh non risus accumsan egestas. Vivamus placerat
        bibendum arcu eu laoreet. Pellentesque ultricies dapibus turpis eu
        facilisis. Pellentesque fermentum imperdiet mi, non volutpat turpis
        fringilla at. Proin a erat et erat gravida congue. Fusce ornare, risus
        finibus placerat tempus, mauris ante aliquet lorem, sed lacinia tellus
        erat sed metus. Praesent elementum libero justo, in fermentum lectus
        aliquet ut. In at pellentesque urna, eu posuere arcu. In aliquam ut erat
        et pulvinar. Integer varius augue libero, faucibus vulputate nibh
        efficitur sed. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Nunc ullamcorper ac mauris at mattis. Nullam feugiat quis odio
        at vulputate. Quisque aliquam ligula sit amet purus cursus pulvinar.
        Proin vel est quam. Nulla facilisi. Nunc pellentesque auctor imperdiet.
        Vivamus metus lectus, consequat vitae pretium non, euismod ac eros.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Nam viverra convallis leo, non placerat enim
        pellentesque ut. Nunc condimentum, ligula eget viverra convallis, sem
        quam pharetra neque, at bibendum ex odio sed orci. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Morbi feugiat massa eros, a iaculis urna aliquam id. Praesent libero
        turpis, congue eget viverra eu, aliquam sit amet mauris. Morbi maximus
        non quam eget varius. Donec quam mi, auctor a nibh quis, gravida commodo
        quam. Proin tempus ultricies tristique. Ut eu aliquam eros. Fusce ut
        risus ultricies, finibus dolor ac, molestie diam. Morbi tempus
        condimentum orci a bibendum. Donec vel mollis erat. Nulla dictum ligula
        in lorem pharetra, sit amet ullamcorper ante convallis. Vestibulum
        luctus, diam lobortis gravida ullamcorper, massa arcu egestas felis, eu
        rhoncus risus metus id massa. Pellentesque metus urna, pellentesque eget
        porttitor sed, facilisis nec odio. Nulla a augue vestibulum, consequat
        metus in, tincidunt ipsum. Nullam et ante eu neque maximus tempor. Donec
        luctus turpis sit amet placerat suscipit. Quisque commodo rutrum leo,
        nec feugiat ligula lobortis sit amet. Fusce accumsan sit amet purus non
        aliquet. Etiam suscipit euismod iaculis. In egestas tellus ut quam
        elementum, vel finibus tellus tristique. Vivamus turpis eros, venenatis
        at mattis et, sagittis ut justo. Fusce eu tortor imperdiet, varius nibh
        non, pharetra nunc. Suspendisse potenti. Quisque sed euismod dolor.
        Suspendisse potenti. Aliquam ac enim arcu. Aliquam ornare mollis risus,
        vel volutpat nibh placerat at. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Quisque vitae aliquet nibh. Aenean nec vehicula dolor.
        Etiam in risus fringilla, tristique magna nec, lacinia ex. Quisque
        sagittis ipsum justo, in finibus erat volutpat vitae. Aliquam eget risus
        in velit elementum aliquet. Proin quis nunc ante. Nullam suscipit rutrum
        massa in congue. Ut scelerisque vehicula turpis vel mollis. Morbi rutrum
        id eros vehicula porta. Donec vehicula ornare mi, et elementum dui
        dapibus porta. Maecenas id mi placerat, imperdiet elit at, gravida sem.
        Nullam malesuada tellus vel bibendum dictum. Pellentesque vel nibh nec
        lacus elementum tempus. Ut eleifend mauris ac ullamcorper bibendum.
        Pellentesque at ligula in risus pretium efficitur. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Proin tincidunt sodales justo, non
        aliquet justo facilisis in. Etiam vel augue mauris. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Proin suscipit nulla lacus, et rutrum nunc pellentesque sed.
        Curabitur non metus vel nisi congue mattis id at nisi. Vestibulum nisl
        ante, convallis at est et, consequat viverra eros. Mauris pellentesque
        sem vitae dapibus porttitor. Ut sollicitudin elit et maximus consequat.
        In urna diam, lobortis eu elementum ut, scelerisque vel leo. Cras nunc
        purus, pretium ut faucibus et, mollis at nisl. Suspendisse justo risus,
        rhoncus non dolor nec, condimentum tempor orci. Suspendisse tincidunt
        velit in orci tristique auctor. Curabitur sed interdum sapien. Fusce
        tristique turpis condimentum erat accumsan commodo. Nunc pharetra
        accumsan nisi. Aenean vehicula diam vel justo venenatis facilisis id id
        ante. Quisque sit amet elit eu tellus ultricies consectetur. Aenean et
        fringilla velit. Ut ut laoreet elit. Integer consectetur leo et
        ultricies lacinia. Mauris sit amet quam magna. Aenean tempus, velit non
        commodo mollis, justo mi volutpat lacus, nec vulputate neque arcu sed
        nisl. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Pellentesque fermentum condimentum
        euismod. Curabitur tempor turpis felis, eget dignissim eros congue sed.
        Suspendisse potenti. Cras fringilla dolor risus, quis tincidunt orci
        mattis eget. Nam odio urna, volutpat ac neque id, tincidunt dictum nisi.
        Sed libero nibh, aliquam ut est sed, accumsan dignissim augue. Duis
        vulputate lorem id mollis vulputate. Etiam tristique urna sit amet enim
        congue tempor. Etiam id tempor est. Curabitur vel turpis sit amet metus
        accumsan feugiat id sed metus. Cras quis sem magna. Nam pulvinar sit
        amet justo id varius. Vestibulum varius nibh mattis pretium dignissim.
        Vestibulum hendrerit, enim ut lobortis varius, massa ligula dignissim
        dolor, at efficitur ligula est quis eros. Vestibulum consequat maximus
        est, a porttitor libero tempor vel. Pellentesque euismod metus sit amet
        blandit ultricies. Suspendisse luctus nunc dolor, et ultrices odio
        accumsan at. Duis at arcu ut tortor condimentum hendrerit eget at mi.
        Fusce sit amet mi sit amet libero tincidunt egestas. Vestibulum non
        sapien convallis, venenatis justo vel, rutrum orci. Mauris vitae mauris
        sem. Quisque finibus maximus dui nec maximus. Vivamus in velit nibh.
        Morbi condimentum, ligula sit amet commodo tristique, ipsum felis
        imperdiet nulla, a dapibus lorem dui eu turpis. Integer non hendrerit
        felis. Sed placerat et ligula vel volutpat. Praesent vestibulum arcu
        vitae dictum imperdiet. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Proin eu tortor odio.
        Praesent aliquet in eros vulputate lacinia. Mauris a rhoncus lectus.
        Nullam justo neque, pellentesque eu scelerisque nec, placerat id massa.
        Aliquam semper eu felis mattis dapibus. Proin aliquam dapibus ex, ut
        vestibulum sem auctor a. In vel tellus porttitor, sodales ligula ut,
        condimentum risus. Sed at augue in massa porta maximus. Integer vel
        ipsum sit amet felis sodales vehicula id in metus. Aenean posuere justo
        in tristique aliquam. Mauris at varius turpis. Phasellus at ante ac quam
        ornare fermentum ut in nisl. Quisque condimentum imperdiet vehicula.
        Etiam in rhoncus nisi, vitae pulvinar neque. Morbi iaculis lacinia
        luctus. Aenean dictum nec lacus id consequat. Praesent eu lorem ut nisi
        lacinia bibendum ac quis ligula. Orci varius natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Pellentesque quis lectus
        sed nisl aliquet pretium. Pellentesque id maximus lacus, sit amet
        tristique velit. Mauris pretium egestas lacinia. Cras at luctus lorem.
        Etiam sit amet elit velit. Nulla sed fermentum nunc, hendrerit dictum
        arcu. Suspendisse tempus nibh id lorem vestibulum maximus. Duis
        convallis quam vel lorem congue dapibus. Proin fringilla sodales magna,
        eu blandit diam volutpat in. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Duis faucibus faucibus
        erat at venenatis. Pellentesque ac commodo nibh, feugiat facilisis
        justo. Pellentesque id elementum velit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Praesent dignissim interdum venenatis.
        Aenean accumsan, mauris sit amet facilisis eleifend, dui ex gravida
        purus, ut commodo libero magna vel nibh. Donec sapien neque, placerat et
        commodo et, elementum posuere tortor. Maecenas ut egestas ante.
        Phasellus eleifend, mauris ac faucibus scelerisque, nibh purus luctus
        massa, non euismod dolor massa vel nibh. Nullam ut dui convallis,
        vehicula libero ut, euismod risus. Donec tortor turpis, eleifend in
        risus ut, viverra mattis libero. Maecenas sollicitudin felis ac mi
        commodo, non tristique est vestibulum. Nam eu iaculis magna. Donec
        vulputate ullamcorper malesuada. Donec faucibus tortor in pretium
        aliquam. Mauris sit amet sagittis mauris. Curabitur neque tellus,
        fringilla nec ipsum non, vulputate feugiat tellus. Morbi sem mauris,
        fringilla at quam id, luctus fermentum mi. Vestibulum ut odio facilisis,
        viverra massa vel, ultrices libero. Vivamus id laoreet tortor. Nulla
        sodales facilisis dui, eget tincidunt velit dignissim vitae. Praesent
        nec eros eleifend, iaculis metus malesuada, laoreet ex. Nullam odio
        lorem, facilisis eu mauris ac, vehicula aliquet nisl. Sed at molestie
        odio, sed maximus purus. Etiam quis leo ornare, laoreet libero vel,
        tempus dolor. In hac habitasse platea dictumst. Nullam pretium, ligula
        sed pharetra tempor, mauris diam varius lectus, nec eleifend dolor ex
        nec neque. Vivamus lobortis tincidunt dolor, id feugiat mi feugiat ac.
        Nulla facilisi. Ut ex lectus, tempor vitae tortor dignissim, cursus
        molestie enim. Sed tincidunt commodo consectetur. Duis sit amet sem eu
        urna tincidunt suscipit ut vitae eros. Maecenas consequat pulvinar
        sodales. Aliquam euismod pretium molestie. Sed pharetra dui odio, eget
        varius velit tempor non. Nunc quis commodo dui, a finibus lectus. Nulla
        finibus metus mi, vitae elementum ipsum posuere quis. Nulla ipsum
        lectus, mollis eget erat at, maximus ullamcorper erat. Praesent varius
        quis ex vel viverra. Suspendisse in aliquam metus, malesuada porttitor
        nisl. Sed pulvinar efficitur mauris faucibus scelerisque. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Maecenas cursus sit amet dui ac egestas. Phasellus a
        tincidunt odio. Mauris ac felis vel nibh suscipit egestas ac eleifend
        leo. Vivamus ut ligula nec diam ultrices porttitor. Duis molestie leo in
        ligula aliquet, at porttitor purus rhoncus. Curabitur placerat augue sit
        amet neque rhoncus scelerisque. Cras felis nunc, finibus non justo
        consequat, euismod placerat ante. Nullam in tellus imperdiet odio
        vulputate tincidunt. Aliquam bibendum mollis lorem, in maximus metus
        pulvinar a. Nam cursus dapibus orci vel tempor. Etiam augue mauris,
        efficitur in dolor ut, consequat ullamcorper lacus. Aenean neque sapien,
        pharetra quis hendrerit vel, maximus at nibh. Curabitur varius non justo
        et blandit. Phasellus vel lobortis metus. Phasellus aliquam mattis
        mollis. Donec euismod magna ac neque ornare, ut malesuada tortor
        lacinia. Nulla in imperdiet felis. Praesent nibh augue, vulputate ac
        enim id, efficitur commodo libero. Vestibulum eget enim ex. Donec eu
        nisl sit amet sapien maximus sagittis. Praesent elementum vestibulum
        auctor. Cras a libero vitae mi dapibus fermentum. Ut eu orci fringilla,
        pharetra orci eget, euismod nulla. Proin ante magna, rutrum a luctus
        sodales, imperdiet a sem. Vivamus quis odio eu elit ultrices pretium
        cursus id risus. Nulla aliquam facilisis elit, et interdum lorem
        tincidunt quis. Etiam venenatis tincidunt nibh at fermentum. Morbi quam
        lacus, sodales non felis sed, efficitur venenatis metus. Cras
        sollicitudin magna quis lectus maximus hendrerit. Mauris felis sem,
        elementum sit amet ligula id, posuere pulvinar elit. Integer fringilla
        nibh non erat commodo, sed accumsan arcu varius. Pellentesque vehicula
        enim elit, vitae dictum metus imperdiet id. Vivamus condimentum vehicula
        eros, et elementum libero commodo ac. Sed porttitor mauris erat, rhoncus
        commodo turpis commodo eget. Cras erat nisi, egestas vitae nunc sit
        amet, fermentum gravida justo. Aenean accumsan lobortis ante at
        porttitor. Integer iaculis felis dolor, vel condimentum neque tincidunt
        quis. Morbi ac ante nec nibh tincidunt laoreet. Praesent auctor odio et
        laoreet ultricies. Donec id pulvinar eros, consequat congue leo. Cras
        condimentum egestas tincidunt. Aliquam erat volutpat. In efficitur
        sapien ac est porttitor, eget bibendum arcu interdum. Proin id molestie
        mauris, et sollicitudin enim. Fusce maximus porta nunc. Mauris convallis
        et turpis vitae euismod. Sed elit nunc, feugiat sit amet eros vel,
        ullamcorper aliquet mi. Donec vel nisl auctor, tempor augue non,
        eleifend erat. Etiam imperdiet ut neque at vulputate. Sed ultricies ex
        in odio dictum, non tincidunt orci faucibus. Morbi rutrum, massa
        consequat finibus varius, tellus lorem suscipit ex, eget volutpat libero
        dolor vitae metus. Duis efficitur, massa ac aliquam semper, ligula nunc
        interdum sapien, a maximus dolor mi vel mauris. Phasellus porttitor diam
        nec tellus malesuada, vel euismod metus eleifend. Nunc consectetur erat
        et nulla venenatis, nec pulvinar diam porta. Aenean volutpat rhoncus
        scelerisque. Proin cursus blandit nunc vel malesuada. Proin ac volutpat
        nisl, ut dapibus mi. Pellentesque id volutpat lectus, ut facilisis
        massa. Duis sed leo turpis. Sed dignissim urna in vehicula fringilla.
        Morbi ornare lacus augue, vel volutpat orci lacinia a. Integer eleifend
        non purus at facilisis. Curabitur tristique lacus at urna venenatis
        dictum. Vestibulum vestibulum nibh eu viverra mollis. Phasellus eu est
        pulvinar, tempor libero ac, vestibulum ipsum. Aenean ut rhoncus ipsum.
        Etiam rutrum posuere velit sed viverra. Integer eu ligula non ex
        pellentesque ultrices blandit non nulla. Quisque scelerisque odio nulla,
        vel gravida libero porttitor ut. Donec ligula leo, pellentesque eget
        dolor vel, bibendum imperdiet eros. Donec consequat luctus lectus, nec
        tincidunt ipsum placerat at. Quisque ac nisi eget dolor varius congue.
        Integer consequat erat nec ultrices hendrerit. Nam vitae auctor nibh, id
        auctor libero. Proin at sagittis lorem. Suspendisse id bibendum lacus.
        Ut dictum justo non augue feugiat, quis efficitur ante auctor. Praesent
        malesuada sed tortor ac fringilla. Nulla dignissim arcu metus, ac mattis
        velit vulputate vitae. In quis tellus ante. Interdum et malesuada fames
        ac ante ipsum primis in faucibus. Nunc scelerisque felis in nisi
        vestibulum auctor. Fusce eu porta massa, ac euismod neque. Aenean
        faucibus lobortis orci, scelerisque volutpat sem sagittis sed. Nullam
        scelerisque nibh nunc, eu sollicitudin mauris facilisis eget. Etiam et
        tortor mi. Donec finibus tincidunt ex nec ullamcorper. Vestibulum elit
        ligula, imperdiet non tortor a, facilisis vulputate turpis. Suspendisse
        vestibulum accumsan dolor, quis aliquet erat scelerisque quis.
        Suspendisse potenti. Fusce iaculis iaculis arcu eu ullamcorper. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non fringilla
        dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
        per inceptos himenaeos. Nam enim dui, tempus quis lacinia eu, commodo et
        turpis. Maecenas in maximus ligula, ac suscipit dolor. Etiam vulputate
        posuere lorem, eu fermentum quam finibus sit amet. Pellentesque sit amet
        eleifend diam, a vulputate ipsum. Suspendisse condimentum egestas orci
        eu venenatis. Morbi laoreet at mi eget molestie. Sed vitae tristique
        risus, id lacinia lorem. Vestibulum vel diam at urna pharetra sodales.
        Vestibulum tincidunt fermentum sapien et lacinia. Fusce a ex felis. Nam
        dignissim nisi sit amet malesuada porta. Suspendisse sagittis ante sit
        amet mauris fermentum euismod. In sagittis nibh nulla, sit amet
        efficitur arcu bibendum et. Nam aliquam augue vel mattis rhoncus. Ut ex
        ex, varius sit amet lectus vel, pellentesque placerat quam. Aliquam erat
        volutpat. Nullam eleifend risus nec erat bibendum, sit amet pharetra
        nulla sodales. Aliquam erat volutpat. Nam varius quam vel odio aliquam
        ornare. Phasellus elementum posuere turpis sed efficitur. Maecenas at
        mollis metus. Aliquam et mauris malesuada, euismod enim vel, interdum
        quam. Cras malesuada venenatis nibh non rutrum. Suspendisse sed
        fringilla ex. Suspendisse maximus vestibulum urna, ut scelerisque ipsum
        aliquet eget. Pellentesque lacus tellus, ultricies quis odio laoreet,
        rhoncus malesuada nisi. Praesent odio sem, malesuada non convallis quis,
        vulputate in ante. Sed vehicula diam nunc, ut gravida dolor mollis non.
        Vivamus eu ipsum sit amet magna sagittis malesuada id sit amet lacus.
        Cras fringilla odio id tristique aliquam. Donec scelerisque massa at
        ligula semper, ut feugiat justo imperdiet. Proin nec neque faucibus,
        sagittis erat quis, euismod orci. In non accumsan est. Aliquam placerat
        leo et odio auctor pulvinar. Curabitur rhoncus, ante eu vestibulum
        pretium, massa leo lacinia augue, eget dapibus nisi lacus id orci.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Proin rhoncus mi in urna malesuada, a ornare purus
        efficitur. Sed pretium egestas lorem sit amet convallis. Nullam
        tincidunt quam sit amet nisi pretium faucibus. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Donec nec felis dapibus, rhoncus nisl
        id, vestibulum elit. Ut eleifend faucibus nunc. Mauris laoreet, dui eu
        commodo porta, nunc magna posuere elit, eget laoreet urna velit sit amet
        dolor. Nunc id elit ut eros vestibulum vulputate sed mattis velit. In
        hac habitasse platea dictumst. In justo erat, imperdiet in sodales at,
        facilisis ut tortor. Mauris vitae neque efficitur, imperdiet arcu
        faucibus, imperdiet metus. Donec gravida elit non elit molestie, aliquam
        tristique lacus suscipit. Suspendisse ornare ultricies tincidunt. Sed id
        gravida neque. Fusce felis ex, varius sed odio id, egestas malesuada
        eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia curae; Praesent posuere nulla ligula, ut vestibulum
        dolor suscipit et. Nulla faucibus pharetra sapien, ac venenatis neque
        dapibus eget. Nullam eu eros neque. Interdum et malesuada fames ac ante
        ipsum primis in faucibus. Proin vel augue ut sem lobortis bibendum
        convallis eu tellus. Aenean sodales, dolor a laoreet lobortis, dolor
        ligula accumsan orci, vel consequat risus dui in lorem. Suspendisse
        neque neque, imperdiet sit amet orci eget, eleifend aliquet risus. Nam
        tellus quam, tincidunt vitae leo sed, rutrum blandit orci. Curabitur
        tortor mi, condimentum et erat ut, porta bibendum massa. Donec id
        pulvinar orci. Nullam bibendum auctor elementum. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Nulla id eros in nibh eleifend
        pretium posuere ut sem. Nam bibendum fermentum ullamcorper. Integer nec
        sollicitudin lectus, ac mollis est. Suspendisse vel placerat nisl. Nulla
        eu risus lectus. Suspendisse pellentesque vitae arcu tempus ornare.
        Etiam nec fringilla felis, sit amet mattis eros. Vivamus ut sapien sed
        eros tincidunt pharetra in euismod augue. Phasellus quis ornare lacus.
        Curabitur euismod consectetur dui sed pretium. Phasellus condimentum
        purus odio, venenatis congue mauris mattis lacinia. Aliquam placerat
        eros risus, vestibulum malesuada nisi ornare eu. Maecenas nisi ipsum,
        vehicula sed auctor in, tempus porttitor enim. Aliquam mi leo, eleifend
        ut enim eget, porta tempor nisl. Nulla elementum leo purus, ac euismod
        erat interdum sit amet. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Maecenas vitae risus est.
        Nullam ex nunc, porttitor in velit vel, dignissim posuere orci. Duis
        vitae arcu pulvinar, tristique risus eget, scelerisque neque. Donec
        hendrerit ipsum ut nulla interdum pretium. Suspendisse congue feugiat
        iaculis. Etiam sem mi, egestas sed sem id, faucibus scelerisque purus.
        Curabitur mollis ultrices diam ac vulputate. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Mauris congue, dolor at aliquam efficitur, arcu nisl tincidunt sapien,
        sit amet laoreet justo enim sed ex. Nam pharetra ullamcorper tempor.
        Pellentesque volutpat sagittis venenatis. Etiam vel maximus purus. Donec
        ipsum neque, tincidunt vel lorem id, maximus feugiat justo. Duis viverra
        aliquet lorem a imperdiet. Etiam in nisi sodales, ullamcorper velit non,
        sollicitudin mi. Pellentesque finibus egestas nulla, id faucibus purus
        finibus vitae. Vivamus malesuada porta metus. Sed magna est, varius et
        consequat in, vulputate eu lectus. Donec vulputate leo arcu, quis porta
        velit pellentesque eu. Vestibulum molestie eu lacus in euismod. Mauris
        erat metus, vulputate et lacinia in, volutpat et lorem. Suspendisse
        potenti. Suspendisse nec justo consequat ipsum sodales mattis. Nullam
        laoreet nisi id sagittis bibendum. Cras ut pellentesque augue, accumsan
        porta tellus. Aliquam id tincidunt odio, at posuere elit. Pellentesque
        euismod magna at mi volutpat sollicitudin. Donec efficitur dui nec
        mattis semper. Duis in arcu quis dui tincidunt congue at vel nulla.
        Quisque convallis vulputate nulla, in cursus lorem cursus eget. Vivamus
        cursus blandit erat eget pellentesque. Integer sit amet sollicitudin
        ipsum, ac maximus purus. In a diam arcu. Pellentesque interdum sodales
        sapien sit amet pretium. Donec vel rutrum magna, quis ultrices orci.
        Phasellus ultrices velit dignissim tellus molestie suscipit. Etiam non
        diam lobortis, sodales turpis et, maximus turpis. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia curae; In
        tincidunt nisi diam, non porttitor urna porttitor ac. Vivamus ac auctor
        nibh. Duis ultricies lacinia urna elementum elementum. Quisque aliquet
        dolor quis mi finibus fringilla. Morbi ultrices elementum vestibulum.
        Phasellus blandit sem quis nisi tempus, sagittis ultrices ante
        tristique. Pellentesque eget neque non enim gravida hendrerit. Vivamus
        pulvinar ultricies felis nec imperdiet. Nullam eleifend enim vitae ante
        bibendum efficitur. Phasellus et dignissim dui. Donec vitae bibendum
        felis. Integer ac tincidunt enim, at maximus nisl. Aliquam dignissim
        odio vitae sapien laoreet, eu pellentesque felis ornare. Morbi id nulla
        nunc. Vestibulum id lectus non odio pulvinar hendrerit. Proin in varius
        ipsum, nec tristique erat. Donec sed mauris rhoncus, vestibulum lorem
        ac, tincidunt nisi. Fusce dictum mauris sapien. Vestibulum urna est,
        interdum congue neque id, feugiat luctus massa. Etiam ultrices dictum
        lorem. Maecenas vitae metus diam. Curabitur pulvinar tellus lorem, eu
        fringilla ex dignissim ut. Vivamus in mauris pulvinar, sodales metus sit
        amet, pharetra dolor. Maecenas id aliquam justo. Vestibulum vel
        tincidunt arcu, nec mattis ipsum. Mauris ornare nibh nibh, eu vulputate
        eros viverra ac. Proin maximus, purus in lacinia dignissim, neque nibh
        tincidunt augue, a tristique sapien leo eu enim. Aenean dignissim
        viverra justo et porttitor. Nullam euismod ipsum dui, non consequat
        magna volutpat a. Nunc ut ipsum a sem porta convallis at et nisl.
        Quisque sodales sem nec blandit suscipit. Integer porta felis
        condimentum porta ornare. Ut massa velit, dignissim nec luctus eu,
        vestibulum ac lacus. Quisque tincidunt tortor in bibendum auctor. Aenean
        gravida congue augue non rhoncus. Pellentesque lacus lectus, feugiat
        vitae porttitor eu, sodales at erat. Donec condimentum molestie leo, non
        accumsan augue efficitur et. Donec sodales odio eget rhoncus blandit.
        Sed vulputate, nibh non lobortis malesuada, mi ex vehicula elit, in
        volutpat elit turpis a felis. Integer mattis nisi ut libero convallis
        lacinia. Phasellus ornare quam vel odio vestibulum, eu eleifend enim
        sodales. Donec auctor et ipsum eget efficitur. Quisque sit amet
        convallis nisi. Mauris sed eleifend nibh. Phasellus malesuada at felis
        ac mollis. Praesent volutpat neque a risus ultrices consectetur.
        Suspendisse dapibus arcu non nisl volutpat, viverra lacinia mauris
        lobortis. Pellentesque vitae posuere nulla, quis tincidunt urna. Nam
        vulputate leo sed consectetur ullamcorper. Cras convallis massa vitae
        dui commodo, eget feugiat diam blandit. Vivamus pulvinar nulla aliquet
        justo commodo, quis tempor orci euismod.`;
