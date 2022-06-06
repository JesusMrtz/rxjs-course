import { fromEvent, tap } from 'rxjs';
import { map } from 'rxjs/operators';


const creatingDiv = document.createElement('div');
creatingDiv.innerHTML= `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec sapien tincidunt, congue elit in, suscipit nisl. Nunc quis elit maximus, varius nisi ac, maximus elit. Etiam mattis magna et tristique ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis viverra hendrerit placerat. Aenean lacinia nisi quis nisl hendrerit, sit amet sollicitudin augue consequat. Duis vitae nisl blandit, fringilla tellus quis, consequat sapien. Praesent lorem nibh, vestibulum at velit at, consequat egestas erat.

Morbi dignissim odio id arcu mollis, vitae ornare augue mattis. Proin id tellus sit amet arcu aliquam egestas. Maecenas ultrices varius augue, in efficitur urna ornare nec. Mauris scelerisque eleifend euismod. Nullam lacus est, efficitur vitae bibendum sit amet, egestas nec metus. Vestibulum placerat quis est vel lobortis. Suspendisse sit amet mollis tellus, in semper dolor. Sed et ante id enim laoreet egestas. Curabitur lobortis eros in magna gravida viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras lobortis ex id ante convallis venenatis. Proin semper dui scelerisque, cursus erat non, semper elit. Nulla gravida vehicula dolor, quis accumsan sapien lobortis sed.

Nulla convallis tortor et sem blandit consequat. Praesent et dolor lacus. Suspendisse at blandit est. Nunc tincidunt nunc a egestas congue. Sed gravida tempor nulla at tincidunt. Sed porttitor elementum neque non rhoncus. Sed sit amet malesuada lorem, at cursus urna. Ut fermentum nibh eu interdum lobortis.

Cras quis ante blandit, consequat velit vel, faucibus dolor. Morbi egestas nisl at mauris dapibus, quis eleifend turpis commodo. Mauris in sagittis ligula. Ut aliquam, ex nec fermentum suscipit, nibh ipsum feugiat neque, eget fringilla massa risus eget odio. Quisque at efficitur tellus, sed auctor risus. Duis ac venenatis velit. Morbi porta cursus tortor quis suscipit. Vivamus euismod sodales porta. Nam ac enim a diam pretium eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum feugiat vestibulum molestie.

Mauris consequat nisi quis nulla eleifend egestas. Vivamus malesuada et turpis in bibendum. Sed non viverra turpis. Proin gravida nibh eget accumsan mollis. Aliquam vel placerat dui, vel porttitor lacus. Nulla eros mauris, volutpat nec dolor a, aliquet condimentum nibh. Maecenas commodo volutpat eros. In euismod nibh blandit elit pulvinar, condimentum sodales nulla blandit. Nullam commodo dolor sit amet elementum aliquet. Nam vulputate ligula ut sollicitudin vulputate. Quisque vestibulum erat at erat blandit feugiat ut nec urna. Aenean ornare purus sed ex tincidunt, et pretium ex mollis. Phasellus at risus sed augue sodales facilisis at non purus. Donec vel dui feugiat dui fermentum malesuada a ac risus. Vivamus et commodo odio, a auctor ante.

Pellentesque pellentesque, lorem sed mollis tristique, turpis lacus vestibulum nibh, a mattis nisl felis eget dui. Nullam sodales euismod tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus sodales posuere venenatis. Quisque pulvinar, justo eu facilisis aliquet, eros neque semper metus, ut convallis risus massa et neque. Etiam euismod nibh sed est imperdiet, ut rutrum ante feugiat. Donec dolor ante, ornare eget ullamcorper eget, blandit nec dui. Nulla facilisi. Duis metus felis, dictum vel purus dapibus, maximus consectetur libero.

Pellentesque placerat mollis neque at dignissim. Aliquam auctor neque nec sem maximus, a elementum purus pulvinar. Sed nunc lacus, varius non enim non, accumsan cursus dolor. Cras sed ultrices neque. Mauris in consequat justo. Sed ac ante vehicula, egestas massa dignissim, rhoncus magna. Praesent mattis vitae lacus eget ornare. Aliquam purus ante, pulvinar a pretium nec, aliquam a tortor. Mauris vestibulum, ipsum in eleifend lacinia, diam tortor semper orci, at tempor erat felis eu sapien. Praesent viverra ante nec lobortis blandit. Sed vitae sem congue, consequat nibh et, fringilla erat. Etiam aliquet justo iaculis nisl tempus, et blandit est ornare. Morbi quis libero a urna consequat volutpat.

Etiam sapien lorem, suscipit quis tincidunt et, rhoncus ac urna. Vestibulum metus dui, cursus in leo ac, laoreet volutpat ante. Nullam non ipsum ut purus varius semper sit amet eu ipsum. Curabitur aliquet mauris vel lectus ultrices blandit. Vestibulum eu felis pellentesque, accumsan sapien ut, porta lacus. Maecenas luctus interdum ligula bibendum vulputate. Ut quis felis nec neque lobortis malesuada in ut ligula. Nullam sem velit, convallis at mi id, rutrum finibus turpis. Nullam nec ante vitae ex egestas cursus.

Phasellus feugiat, nisl convallis dapibus mollis, ipsum magna sodales nibh, nec sodales ligula sapien at arcu. Quisque elementum urna eu sem rhoncus, ac iaculis velit bibendum. Maecenas a lorem ipsum. Praesent porttitor diam quis bibendum luctus. Nam urna magna, fringilla nec sodales sit amet, pretium vel odio. Phasellus efficitur enim id lorem efficitur, et lacinia justo congue. Vivamus dignissim, erat euismod condimentum posuere, magna diam tincidunt diam, ut porta diam sapien sit amet lacus. Phasellus in arcu libero. Nam ac imperdiet massa, non ultrices felis. Pellentesque semper sem quis ultrices elementum.

Nam ac nisl tincidunt, porta tellus quis, bibendum arcu. Fusce molestie, neque vel aliquet tempor, est est egestas nisi, in varius massa tortor a mi. Praesent tristique, dolor dapibus condimentum dapibus, tellus tortor mollis diam, sit amet lobortis massa dui sed massa. Maecenas id leo nec elit mattis cursus a non justo. Donec ac ante in diam mattis finibus sed sit amet urna. Donec tempus, turpis ut viverra accumsan, ligula metus vehicula ligula, sed imperdiet ligula nunc vitae nisl. Donec egestas vel libero at mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas at urna purus. Vestibulum non velit neque. Morbi nunc arcu, faucibus facilisis interdum ac, volutpat vel erat. Donec bibendum libero diam, pellentesque viverra nisi semper id. Proin eu semper velit, vitae vehicula ex. Mauris tincidunt eget orci in vestibulum.

Nam sagittis ligula urna, at congue odio condimentum id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sed mollis ex. Nulla sollicitudin libero vel mi euismod fringilla. In a ligula nec lectus egestas sodales. Ut quis nisl id neque tristique mollis. Nulla dolor velit, imperdiet at luctus in, consequat sit amet eros. Nunc ultricies diam et ex imperdiet rhoncus. Curabitur eu consectetur ipsum. Cras ut placerat turpis, ac accumsan libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas accumsan vehicula ipsum id rutrum.

Vestibulum id tellus maximus, pellentesque ex ac, hendrerit nibh. Nam et erat tortor. In sodales posuere tincidunt. Integer vestibulum viverra dui. Morbi maximus et ipsum a ultrices. Mauris volutpat, libero ut vehicula lacinia, velit erat dictum lorem, id pulvinar tellus orci ut nisl. Nulla facilisi.

Curabitur nec ex purus. Nullam porttitor justo est, sed condimentum arcu vehicula nec. Proin posuere odio ipsum, nec ornare neque iaculis at. Aliquam eget lectus eu tortor cursus lacinia eget iaculis ante. Vestibulum volutpat tempor enim vel condimentum. In hac habitasse platea dictumst. Duis in sagittis lectus, id semper dui. Praesent a sapien pretium, dignissim nulla ac, hendrerit lectus. Praesent id fringilla massa, id finibus eros. Etiam justo urna, pellentesque tincidunt tortor ut, gravida imperdiet arcu. Nunc suscipit felis vel purus fermentum, in lacinia sem rutrum.

Vestibulum maximus rhoncus ante, eget facilisis leo elementum ut. Aliquam fermentum viverra erat. Proin vehicula arcu in dolor facilisis, in maximus erat tincidunt. Praesent lorem leo, imperdiet dictum nibh sed, cursus iaculis ligula. Nullam porttitor, massa quis facilisis vehicula, ligula leo varius lacus, et bibendum dolor orci id nisi. Cras malesuada enim at semper placerat. Nam lobortis, quam nec cursus volutpat, elit ex ornare nibh, gravida convallis diam ligula sit amet ex. Duis nec tincidunt lectus, non iaculis turpis. Donec libero lorem, molestie vel mi ut, porta cursus erat. Donec in risus id leo tincidunt pharetra. Fusce ut est nulla. Curabitur faucibus ullamcorper nisl id commodo. Sed sed turpis quam. Maecenas in sem tincidunt, congue felis eu, ultrices turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse vulputate eu sem ut lobortis.

Cras urna velit, semper non justo et, dignissim pulvinar libero. Ut mattis lorem eu neque ornare, ac pharetra mi convallis. Aliquam nulla magna, sagittis non rutrum et, gravida a ipsum. Nam diam quam, aliquet id eros non, laoreet lobortis purus. Vivamus at gravida leo. Praesent feugiat eros vitae vehicula semper. Fusce faucibus vulputate velit. Aenean rhoncus lorem sodales nisi feugiat laoreet. Pellentesque sollicitudin orci eget sem elementum suscipit. Praesent placerat urna vel orci dignissim tristique. Sed ullamcorper maximus varius. Duis faucibus, massa a tristique consectetur, lacus tellus tincidunt sapien, eget euismod justo neque at tortor. Vivamus tempus mi dignissim orci aliquet efficitur. Sed consectetur ante elit, at aliquet dui ullamcorper vel. Nullam sit amet dui bibendum, pellentesque ante id, congue sem.

Integer pharetra aliquet lectus, a maximus arcu aliquet a. Aenean luctus turpis leo, ut lacinia libero consectetur vitae. Fusce accumsan cursus quam, non consectetur velit malesuada vestibulum. Nulla at maximus risus, dapibus convallis sem. Etiam eu lectus vulputate, efficitur orci vitae, tincidunt magna. Phasellus volutpat nisl vitae dui aliquet sodales. Curabitur in urna efficitur, imperdiet arcu quis, pellentesque neque. Curabitur efficitur ut augue sed dignissim. Quisque sollicitudin neque vitae interdum finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam id rhoncus eros. Cras facilisis turpis a purus aliquet, id malesuada purus imperdiet. Integer venenatis venenatis urna a faucibus. Curabitur lobortis erat non sagittis pellentesque.

Donec aliquam sit amet magna sed volutpat. Vestibulum volutpat turpis eu metus imperdiet, quis eleifend lacus interdum. Sed pretium non nisi sed rutrum. Morbi convallis sapien sit amet feugiat scelerisque. Sed ullamcorper ipsum nec eros congue rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam at nibh semper, tempus sapien vel, semper urna. Aenean non venenatis diam. Duis facilisis a felis a suscipit. In vitae risus dolor. Aenean venenatis, magna ac accumsan tempus, quam felis eleifend sem, ut accumsan ligula est vitae lorem. Duis dolor ligula, venenatis eget tempor eu, sollicitudin gravida nulla.

Aenean dolor enim, ultrices non placerat a, pharetra nec purus. Maecenas porta, nulla sed elementum gravida, mauris ipsum lobortis elit, quis faucibus nisi urna vulputate nibh. Vestibulum non metus scelerisque, sollicitudin arcu at, vestibulum eros. Donec interdum rutrum ex, laoreet euismod ipsum congue et. Integer at sodales justo, vitae porta tortor. Vestibulum tincidunt eu enim quis aliquam. Maecenas aliquam rutrum lacus, in porta metus maximus id. Suspendisse vel eros eros. Integer dui leo, varius quis felis quis, imperdiet iaculis eros. Aliquam eget vestibulum urna. Etiam congue ac lorem ut imperdiet. Praesent et efficitur metus. Nam faucibus fringilla nisi, dapibus iaculis augue cursus et. Nulla facilisi.

In nunc est, volutpat sit amet tristique vel, blandit ut sapien. Mauris vel aliquam massa. Duis vitae cursus tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis porta condimentum libero in aliquet. Phasellus posuere mauris vel sapien hendrerit vestibulum. Quisque quis faucibus dolor. Praesent augue lorem, luctus sed ullamcorper et, condimentum et lectus.

Vestibulum cursus justo in risus euismod, a mollis ex commodo. Morbi mattis rutrum diam ac bibendum. In bibendum, quam ut blandit pellentesque, ex mi dignissim nisi, non varius tortor dui ut mauris. Sed finibus, sem at consectetur vulputate, tellus risus aliquet tortor, eu accumsan augue arcu eu nibh. Praesent at massa ut elit lobortis tempus sit amet a dui. Suspendisse vehicula lorem ante, quis pharetra ante convallis nec. Ut non massa accumsan, fermentum sapien a, viverra felis. Nulla non egestas enim, quis auctor turpis.

Nunc efficitur lacus pretium enim blandit pulvinar. Nullam justo risus, ullamcorper eu nisi id, maximus placerat massa. Aliquam in quam ac elit varius efficitur a eget purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur porttitor nisi sed consectetur tristique. Sed ultrices, ipsum in condimentum ultricies, nisl ex sodales quam, at tempor nisl leo nec ipsum. Pellentesque maximus lacus neque, molestie bibendum ex pulvinar quis. Aliquam pharetra faucibus nunc ut dapibus. Aliquam ac purus nibh.

Duis molestie sit amet quam in efficitur. Integer gravida nisi ut leo accumsan mattis. Quisque leo nisi, aliquam vitae ipsum eget, fringilla dapibus dui. Ut sit amet bibendum dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce molestie quam a euismod semper. Donec vulputate, est condimentum maximus porttitor, magna dui mollis magna, non volutpat nibh augue ac dui. Aliquam eu nisl tempor, dictum augue id, commodo dolor. Cras at metus non sem volutpat lacinia tempor ut erat. Maecenas pharetra orci nec volutpat faucibus.

Mauris et dictum nibh, nec tempus diam. Ut non hendrerit leo. Quisque vitae turpis iaculis, congue lorem at, molestie justo. In ut pharetra dolor. Nulla mattis et quam id pharetra. Nulla tincidunt aliquet risus dictum aliquam. Vestibulum eu viverra dolor. Quisque lobortis enim ex, et tincidunt tellus laoreet et. Mauris scelerisque rhoncus turpis, id tincidunt turpis sagittis vitae. Curabitur ut mi vestibulum, ullamcorper eros dictum, commodo orci. Duis tempus rhoncus mollis. Phasellus ac lacus aliquam, sodales leo laoreet, dictum est. Curabitur iaculis dolor sed metus ornare finibus.

Nunc consequat ante pharetra massa cursus, finibus fermentum tellus vestibulum. Duis lobortis commodo interdum. Integer eleifend ipsum non ligula iaculis venenatis et eu ligula. Sed condimentum massa ac dolor semper, eu blandit elit eleifend. Nullam semper rhoncus vulputate. Proin mollis hendrerit molestie. Sed eget ex sollicitudin, gravida eros eu, mattis arcu. Aliquam aliquam pretium ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed neque eu odio bibendum venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur vel arcu nec leo posuere luctus vestibulum ut mauris. Donec nec dignissim dui. Vivamus massa libero, rutrum ut fermentum in, egestas ut risus. Fusce orci risus, condimentum non augue et, finibus sagittis dolor.

Nullam convallis felis nec neque rhoncus interdum. Pellentesque faucibus metus eu vulputate scelerisque. Vivamus odio nunc, scelerisque et lobortis et, aliquam ac sapien. Duis eget diam a est porttitor tincidunt vel at mauris. Aenean feugiat finibus commodo. Ut nec malesuada dui, ac vehicula metus. Mauris ac porttitor mi. Sed ac est nec nisi finibus semper. Phasellus euismod libero ac dictum porta. Phasellus consequat leo vel nunc finibus placerat. Sed id ligula quis orci volutpat interdum. Proin eu elit at augue pellentesque auctor. Morbi tincidunt metus id aliquet porttitor.

Phasellus in iaculis mauris, quis pellentesque leo. Nullam id rutrum massa, eget lobortis urna. Pellentesque tempor risus sed elit maximus efficitur. Nam sit amet gravida ipsum. Curabitur non rhoncus risus, eu mollis magna. Cras tempus, ante quis dictum commodo, mauris velit condimentum sem, non ullamcorper nisi nulla aliquet dolor. Aliquam fermentum placerat mauris, a ultrices quam fringilla id. Nam id fringilla orci. Phasellus finibus, ante sed placerat sodales, tellus felis feugiat enim, eu facilisis erat odio ac felis. Quisque blandit sed elit eget semper. Nunc eget lobortis erat. Maecenas non justo eget quam placerat viverra. In viverra placerat tellus sit amet venenatis. Sed volutpat eros augue, in pellentesque tellus dignissim sed. Ut id odio vitae dolor finibus eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Quisque efficitur felis ac eros pellentesque, nec eleifend lacus sollicitudin. Aenean rhoncus ipsum lorem, et efficitur arcu fermentum id. Maecenas id facilisis justo, in fringilla enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus mollis eget lorem quis fringilla. Pellentesque aliquam laoreet sem, in volutpat eros consequat a. Sed facilisis erat risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean interdum neque ante, tempus placerat elit congue ut. Donec nibh elit, semper ut sagittis id, scelerisque eget odio. Quisque vulputate arcu sit amet urna iaculis finibus. Aenean luctus accumsan finibus. Mauris eget nibh eget justo scelerisque pharetra.

Quisque dignissim, neque dapibus laoreet mattis, ipsum metus elementum dui, non mollis risus orci ut dui. Nulla elementum tellus malesuada nibh molestie, eu sodales risus posuere. Donec justo quam, ultrices eu sollicitudin iaculis, ornare quis enim. Vivamus sit amet venenatis tellus. In id sapien eget arcu egestas varius non ac nisl. Phasellus lorem risus, dapibus in consequat vel, rhoncus ut neque. Fusce imperdiet neque metus, vel dignissim nisl suscipit et. Pellentesque iaculis elit arcu, sed varius risus suscipit non. Ut quis ultricies quam. Nulla vel orci sit amet neque convallis sagittis. Nunc leo lacus, malesuada quis porttitor in, ultrices egestas justo. Vestibulum posuere erat et cursus aliquam. Sed rhoncus, ligula quis consectetur viverra, tortor leo laoreet augue, vel ultrices nisl lacus venenatis nunc. Nunc purus purus, pulvinar a leo ac, tempor fringilla dui.

Vivamus feugiat aliquet auctor. Cras facilisis laoreet libero vitae lacinia. Sed laoreet placerat ipsum quis tempor. Cras tristique dapibus mauris, quis scelerisque orci varius a. Nullam malesuada eu sapien vitae dignissim. Nunc consequat nisl ut condimentum pellentesque. Duis lectus augue, dictum eu justo ac, pellentesque rhoncus nisi. Duis in iaculis libero. Praesent consectetur turpis eget eros volutpat molestie. Morbi vitae blandit felis, sed ultrices neque. Sed vitae dui id ex scelerisque congue. Proin volutpat at arcu vitae commodo. In facilisis, elit at varius finibus, dui nisl ultrices erat, at hendrerit velit ligula eu est. Proin id scelerisque enim, quis rutrum eros. Curabitur tempus porta massa eget mattis. Proin non quam id ex hendrerit elementum.

Sed condimentum, odio in lacinia eleifend, lacus enim sagittis nulla, in lobortis metus ex maximus quam. Proin vitae hendrerit nulla, vel condimentum erat. Nam risus orci, rutrum nec magna nec, sagittis lobortis justo. Ut fermentum facilisis augue, molestie pulvinar lorem scelerisque ac. Phasellus in mi tristique, imperdiet sapien eget, mattis risus. Aenean ut ante mauris. Duis tristique posuere fermentum. Integer egestas orci orci, vel tincidunt diam lobortis vitae. Nunc tincidunt sem at nunc cursus semper. Maecenas vitae bibendum nulla, non tempus ligula. Praesent consectetur tristique nisi, eget venenatis nulla tristique non. Praesent eleifend suscipit pharetra. Morbi enim orci, consequat at lorem sit amet, tempus consectetur magna. Vestibulum pulvinar fringilla pulvinar. Phasellus eget eros ut purus cursus euismod.
`;

const body = document.querySelector('body');
body.append(creatingDiv);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

const scroll$ = fromEvent<Event>(document, 'scroll').pipe(
  map(calculatingScrollPercentage),
  tap(console.log)
);

scroll$.subscribe(percentage => {
  progressBar.style.width = `${percentage}%`;
});


function calculatingScrollPercentage(event: Event) {
  const { scrollTop, scrollHeight, clientHeight  } = event.target['documentElement'];
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}