let handler = async(m, { conn }) => {
  await conn.sendButtonVid(m.chat, pickRandom(asupan), '*Nih Kak*', '', 'Next', '.asupan', m)
}
handler.help = ['asupan']
handler.tags = ['asupan']
handler.command = /^asupan$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.register = false

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const asupan = [
"https://b.top4top.io/m_1931yxodg0.mp4",
"https://k.top4top.io/m_193161p380.mp4",
"https://l.top4top.io/m_1931i4g3p1.mp4",
"https://a.top4top.io/m_1931tjlio2.mp4",
"https://g.top4top.io/m_1931z2mc40.mp4",
"https://h.top4top.io/m_1931auyof1.mp4",
"https://i.top4top.io/m_19315hrle2.mp4",
"https://j.top4top.io/m_1931xul5a3.mp4",
"https://l.top4top.io/m_1931o92nr0.mp4",
"https://a.top4top.io/m_1931j1rh21.mp4",
"https://b.top4top.io/m_1931iaqpg2.mp4",
"https://c.top4top.io/m_1931s5zlj3.mp4",
"https://d.top4top.io/m_1931x0g5a4.mp4",
"https://i.top4top.io/m_1931oj76n0.mp4",
"https://j.top4top.io/m_19319gl3d1.mp4",
"https://k.top4top.io/m_1931u52cq2.mp4",
"https://l.top4top.io/m_1931mvgj73.mp4",
"https://a.top4top.io/m_1931u07oz4.mp4",
"https://j.top4top.io/m_1931h1fo60.mp4",
"https://k.top4top.io/m_1931mro3u1.mp4",
"https://l.top4top.io/m_1931kx0ac2.mp4",
"https://a.top4top.io/m_1931g9ezq3.mp4",
"https://b.top4top.io/m_1931plin14.mp4",
"https://c.top4top.io/m_1931aaxri5.mp4",
"https://d.top4top.io/m_1931ijzzn6.mp4",
"https://e.top4top.io/m_1931ugycd7.mp4",
"https://f.top4top.io/m_1931l14nk8.mp4",
"https://g.top4top.io/m_1931crgqt9.mp4",
"https://l.top4top.io/m_1931ufrul0.mp4",
"https://a.top4top.io/m_1931jbdpk1.mp4",
"https://c.top4top.io/m_1931aj9nm2.mp4",
"https://d.top4top.io/m_1931cnsal3.mp4",
"https://e.top4top.io/m_1931d4kc74.mp4",
"https://f.top4top.io/m_1931bih8q5.mp4",
"https://g.top4top.io/m_1931xx7aa6.mp4",
"https://h.top4top.io/m_1931g3zsq7.mp4",
"https://a.top4top.io/m_1931m74wd0.mp4",
"https://b.top4top.io/m_1931p8tfm1.mp4",
"https://e.top4top.io/m_1931aj8iv0.mp4",
"https://f.top4top.io/m_1931szguy1.mp4",
"https://g.top4top.io/m_1931l73ry2.mp4",
"https://h.top4top.io/m_1931yhznj3.mp4",
"https://i.top4top.io/m_1931kmtp34.mp4",
"https://j.top4top.io/m_1931snhdg5.mp4",
"https://k.top4top.io/m_1931ay1jz6.mp4",
"https://l.top4top.io/m_1931x70mk7.mp4",
"https://a.top4top.io/m_19319mvvf8.mp4",
"https://b.top4top.io/m_1931icmzd9.mp4",
"https://h.top4top.io/m_19316oo0s0.mp4",
"https://i.top4top.io/m_1931cvvpt1.mp4",
"https://e.top4top.io/m_1930ns2zo0.mp4",
"https://k.top4top.io/m_1930j9i810.mp4",
"https://f.top4top.io/m_1930wtj580.mp4",
"https://d.top4top.io/m_1930a2isv0.mp4",
"https://e.top4top.io/m_1930wbgc41.mp4",
"https://f.top4top.io/m_1930urbj02.mp4",
"https://b.top4top.io/m_1930ceiqv0.mp4",
"https://i.top4top.io/m_1931a0z6o0.mp4",
"https://a.top4top.io/m_193190b500.mp4",
"https://b.top4top.io/m_1931dcixz1.mp4",
"https://g.top4top.io/m_19317gpjp0.mp4",
"https://i.top4top.io/m_1931cc22w1.mp4",
"https://j.top4top.io/m_1931xn6412.mp4",
"https://g.top4top.io/m_1931silxz0.mp4",
"https://h.top4top.io/m_1931as4mg1.mp4",
"https://i.top4top.io/m_1931p9j5v0.mp4",
"https://e.top4top.io/m_1931mgeuy0.mp4",
"https://f.top4top.io/m_1931lw9381.mp4",
"https://g.top4top.io/m_1931vm0dk2.mp4",
"https://h.top4top.io/m_1931fiv8x3.mp4",
"https://b.top4top.io/m_1931jm3dt0.mp4",
"https://e.top4top.io/m_1931i7yag1.mp4",
"https://f.top4top.io/m_1931dr5ya2.mp4",
"https://g.top4top.io/m_193172kpg3.mp4",
"https://h.top4top.io/m_1931j3b224.mp4",
"https://j.top4top.io/m_19317ykt25.mp4",
"https://k.top4top.io/m_1931o0vh16.mp4",
"https://l.top4top.io/m_1931ssfbn7.mp4",
"https://a.top4top.io/m_19318t7458.mp4",
"https://b.top4top.io/m_1931vhu759.mp4",
"https://e.top4top.io/m_1930wespy0.mp4",
"https://e.top4top.io/m_19303zfi20.mp4",
"https://j.top4top.io/m_1930t00kx0.mp4",
"https://e.top4top.io/m_1930kx7hi0.mp4",
"https://c.top4top.io/m_19307g6kd0.mp4",
"https://f.top4top.io/m_19306yk4c0.mp4",
"https://i.top4top.io/m_1930y1u780.mp4",
"https://j.top4top.io/m_1930ilsyy0.mp4",
"https://i.top4top.io/m_19301948b0.mp4",
"https://d.top4top.io/m_1930zg8460.mp4",
"https://i.top4top.io/m_19301yozl0.mp4",
"https://g.top4top.io/m_1930qjr2q0.mp4",
"https://l.top4top.io/m_1930x1wp50.mp4",
"https://a.top4top.io/m_1930zr1041.mp4",
"https://b.top4top.io/m_1930s29hq2.mp4",
"https://a.top4top.io/m_1930kbo0y0.mp4",
"https://j.top4top.io/m_1930xek9z0.mp4",
"https://i.top4top.io/m_1930s7gb80.mp4",
"https://c.top4top.io/m_1930w0dbu0.mp4",
"https://d.top4top.io/m_1930xu4kd1.mp4",
"https://a.top4top.io/m_1930zw2nb0.mp4",
"https://b.top4top.io/m_1930eybjj1.mp4",
"https://g.top4top.io/m_1930fmx330.mp4",
"https://l.top4top.io/m_1930gnlam0.mp4",
"https://g.top4top.io/m_1930twwu50.mp4",
"https://l.top4top.io/m_1930qkeh70.mp4",
"https://l.top4top.io/m_1930wefm20.mp4",
"https://a.top4top.io/m_1930idzd51.mp4",
"https://b.top4top.io/m_1930thxw90.mp4",
"https://d.top4top.io/m_1930pezhp0.mp4",
"https://c.top4top.io/m_1930cjgbx0.mp4",
"https://b.top4top.io/m_1930v6vhg0.mp4",
"https://f.top4top.io/m_1930uh7ud0.mp4",
"https://a.top4top.io/m_1930c9cpb0.mp4",
"https://k.top4top.io/m_19308amkf0.mp4",
"https://d.top4top.io/m_1930wjaq60.mp4",
"https://i.top4top.io/m_1930n2um40.mp4",
"https://i.top4top.io/m_1930e14pi0.mp4",
"https://i.top4top.io/m_1930w6lwf0.mp4",
"https://e.top4top.io/m_19307autl0.mp4",
"https://d.top4top.io/m_1930i6tfc0.mp4",
"https://c.top4top.io/m_1930qmr7u0.mp4",
"https://d.top4top.io/m_1930itbte1.mp4",
"https://i.top4top.io/m_1930ze4oq0.mp4",
"https://j.top4top.io/m_1930kkqyh1.mp4",
"https://f.top4top.io/m_1930zevlz0.mp4",
"https://g.top4top.io/m_1930q0apu1.mp4",
"https://h.top4top.io/m_1930trfsv2.mp4",
"https://l.top4top.io/m_196632pm21.mp4",
"https://k.top4top.io/m_196696fby1.mp4",
"https://i.top4top.io/m_19665qrmn1.mp4",
"https://j.top4top.io/m_19660pebi1.mp4",
"https://d.top4top.io/m_1966zo5kt1.mp4",
"https://h.top4top.io/m_19662lgzi1.mp4",
"https://c.top4top.io/m_1966ukvwr1.mp4",
"https://g.top4top.io/m_1966f042t1.mp4",
"https://f.top4top.io/m_1966rey9j1.mp4",
"https://e.top4top.io/m_1966eqtk21.mp4",
"https://a.top4top.io/m_1966yrtjt1.mp4",
"https://l.top4top.io/m_196664xnz1.mp4",
"https://j.top4top.io/m_19664phob1.mp4",
"https://i.top4top.io/m_1966movai1.mp4",
"https://h.top4top.io/m_1966633ho1.mp4",
"https://f.top4top.io/m_1966o20wm1.mp4",
"https://g.top4top.io/m_1966c5rg21.mp4",
"https://e.top4top.io/m_1966ui8nv1.mp4",
"https://d.top4top.io/m_1966nxtoy1.mp4",
"https://c.top4top.io/m_1966bwd6v1.mp4",
"https://b.top4top.io/m_1966ksnkk1.mp4",
"https://a.top4top.io/m_1966kq4h81.mp4",
"https://k.top4top.io/m_1966d34y01.mp4",
"https://l.top4top.io/m_1966fw13d1.mp4",
"https://j.top4top.io/m_1966xv2121.mp4",
"https://i.top4top.io/m_1966kn6nq1.mp4",
"https://g.top4top.io/m_19663syet1.mp4",
"https://f.top4top.io/m_1966usvco1.mp4",
"https://e.top4top.io/m_196622yeo1.mp4",
"https://d.top4top.io/m_1966skdq31.mp4",
"https://c.top4top.io/m_1966y3ln01.mp4",
"https://b.top4top.io/m_19669nwfm1.mp4",
"https://k.top4top.io/m_19661cuqo1.mp4",
"https://l.top4top.io/m_1966hghj61.mp4",
"https://i.top4top.io/m_1966aoilk1.mp4",
"https://h.top4top.io/m_19661l14p1.mp4",
"https://g.top4top.io/m_1966f8ezr1.mp4",
"https://f.top4top.io/m_19668td551.mp4",
"https://f.top4top.io/m_19668td551.mp4",
"https://e.top4top.io/m_1966pnb5n1.mp4",
"https://c.top4top.io/m_19665y7kq1.mp4",
"https://b.top4top.io/m_19668sbj71.mp4",
"https://a.top4top.io/m_1966z3hc81.mp4",
"https://l.top4top.io/m_1966rdvm71.mp4",
"https://k.top4top.io/m_19665sid21.mp4",
"https://j.top4top.io/m_1966pvisc1.mp4",
"https://i.top4top.io/m_1966q97hd1.mp4",
"https://h.top4top.io/m_1966rhngl1.mp4",
"https://g.top4top.io/m_19667gyf01.mp4",
"https://i.top4top.io/m_1966day6t1.mp4",
"https://g.top4top.io/m_1966svvhh1.mp4",
"https://f.top4top.io/m_19668aept1.mp4",
"https://e.top4top.io/m_1966l3kwr1.mp4",
"https://d.top4top.io/m_1966pizgc1.mp4",
"https://c.top4top.io/m_1966r6dd91.mp4",
"https://b.top4top.io/m_1966gd2y21.mp4",
"https://a.top4top.io/m_1966f28zy1.mp4",
"https://l.top4top.io/m_1966uyrdu1.mp4",
"https://k.top4top.io/m_1966igu2u1.mp4",
"https://j.top4top.io/m_1966h5sv11.mp4",
"https://i.top4top.io/m_1966xgl261.mp4",
"https://h.top4top.io/m_196678ki61.mp4",
"https://f.top4top.io/m_1966eoj2h1.mp4",
"https://g.top4top.io/m_19663sb841.mp4",
"https://e.top4top.io/m_1966nmi0x1.mp4",
"https://d.top4top.io/m_1966jl0qb1.mp4",
"https://b.top4top.io/m_1966knowg1.mp4",
"https://a.top4top.io/m_1966jk07b1.mp4",
"https://j.top4top.io/m_1966jf5ut1.mp4",
"https://k.top4top.io/m_1966dju7g1.mp4",
"https://i.top4top.io/m_1966addcv1.mp4",
"https://h.top4top.io/m_1966j21g31.mp4",
"https://g.top4top.io/m_19662eh9s1.mp4",
"https://f.top4top.io/m_1966vj79r1.mp4",
"https://e.top4top.io/m_1966qlw061.mp4",
"https://d.top4top.io/m_1966lxxwe1.mp4",
"https://a.top4top.io/m_1966dpwax1.mp4",
"https://c.top4top.io/m_1966fewe11.mp4",
"https://l.top4top.io/m_1966yft9o1.mp4",
"https://j.top4top.io/m_19664yeyz1.mp4",
"https://h.top4top.io/m_1966sn0yr1.mp4",
"https://i.top4top.io/m_1966d3dar1.mp4",
"https://g.top4top.io/m_19667cggu1.mp4",
"https://e.top4top.io/m_1966ondhx1.mp4",
"https://c.top4top.io/m_1966bt25g1.mp4",
"https://a.top4top.io/m_1966altcv1.mp4",
"https://b.top4top.io/m_1966w21do1.mp4",
"https://l.top4top.io/m_1966m9dpq1.mp4",
"https://k.top4top.io/m_1966owgko1.mp4",
"https://j.top4top.io/m_1966xsfh81.mp4",
"https://i.top4top.io/m_19669n5k11.mp4",
"https://h.top4top.io/m_19660qdsa1.mp4",
"https://g.top4top.io/m_1966likmn1.mp4",
"https://f.top4top.io/m_1966a9yog1.mp4",
"https://e.top4top.io/m_1966ls2ru1.mp4",
"https://d.top4top.io/m_1966kue2j1.mp4",
"https://c.top4top.io/m_1966p9df21.mp4",
"https://b.top4top.io/m_1966wyuua1.mp4",
"https://b.top4top.io/m_1966z68z61.mp4",
"https://a.top4top.io/m_19660m6mx1.mp4",
"https://k.top4top.io/m_1966q2vx81.mp4",
"https://i.top4top.io/m_1966d50ac1.mp4",
"https://g.top4top.io/m_1966ek2z71.mp4",
"https://h.top4top.io/m_1966nac9z1.mp4",
"https://f.top4top.io/m_1966kfd221.mp4",
"https://e.top4top.io/m_1966uh3i11.mp4",
"https://d.top4top.io/m_19662dvmy1.mp4",
"https://c.top4top.io/m_1966p24i21.mp4",
"https://b.top4top.io/m_1966koom71.mp4",
"https://a.top4top.io/m_19667th9w1.mp4",
"https://l.top4top.io/m_19665ovc21.mp4",
"https://k.top4top.io/m_1966cq5ez1.mp4",
"https://j.top4top.io/m_1966ot1sc1.mp4",
"https://i.top4top.io/m_19664j5pa1.mp4",
"https://h.top4top.io/m_1966qfr1n1.mp4",
"https://g.top4top.io/m_19666vtmi1.mp4",
"https://e.top4top.io/m_1966e1oak1.mp4",
"https://d.top4top.io/m_19660cdkj1.mp4",
"https://c.top4top.io/m_1966udmjr1.mp4",
"https://l.top4top.io/m_19665ncuv1.mp4",
"https://a.top4top.io/m_1966xzuvh1.mp4",
"https://k.top4top.io/m_19668fjzi1.mp4",
"https://j.top4top.io/m_1966a8kng1.mp4",
"https://i.top4top.io/m_1966za3o11.mp4",
"https://h.top4top.io/m_1966s0zyq1.mp4",
"https://g.top4top.io/m_1966zpidw1.mp4",
"https://f.top4top.io/m_1966xayex1.mp4",
"https://e.top4top.io/m_1966jf1kq1.mp4",
"https://d.top4top.io/m_1966lobye1.mp4",
"https://c.top4top.io/m_196672cwt1.mp4",
"https://b.top4top.io/m_1966jmjvo1.mp4",
"https://a.top4top.io/m_19663mpmt1.mp4",
"https://l.top4top.io/m_1966f5gox1.mp4",
"https://k.top4top.io/m_1966o2img1.mp4",
"https://j.top4top.io/m_1966id3xk1.mp4",
"https://i.top4top.io/m_1966v3l621.mp4",
"https://h.top4top.io/m_19664zfvg1.mp4",
"https://g.top4top.io/m_1966qmutz1.mp4",
"https://f.top4top.io/m_1966idhdd1.mp4",
"https://d.top4top.io/m_19667o2n51.mp4",
"https://b.top4top.io/m_196637ev41.mp4",
"https://c.top4top.io/m_1966ca2691.mp4",
"https://a.top4top.io/m_1966wf0cg1.mp4",
"https://l.top4top.io/m_1966bkza51.mp4",
"https://k.top4top.io/m_1966rqdh31.mp4",
"https://j.top4top.io/m_1966za5ju1.mp4",
"https://j.top4top.io/m_1966jbfiw1.mp4",
"https://a.top4top.io/m_1966v6iz11.mp4",
"https://l.top4top.io/m_1966g6ny11.mp4",
"https://k.top4top.io/m_1966lgval1.mp4",
"https://j.top4top.io/m_1966j1lbr1.mp4",
"https://h.top4top.io/m_19663fl981.mp4",
"https://g.top4top.io/m_1966ke92o1.mp4",
"https://f.top4top.io/m_1966thn7c1.mp4",
"https://e.top4top.io/m_1966dtivb1.mp4",
"https://d.top4top.io/m_1966b26rp1.mp4",
"https://c.top4top.io/m_19668lsis1.mp4",
"https://b.top4top.io/m_1966rqqkv1.mp4",
"https://a.top4top.io/m_1966e4e3q1.mp4",
"https://k.top4top.io/m_19668tucd1.mp4",
"https://l.top4top.io/m_19668mle71.mp4",
"https://h.top4top.io/m_1966wxszt1.mp4",
"https://g.top4top.io/m_19660yx0f1.mp4",
"https://f.top4top.io/m_1966m2pk31.mp4",
"https://e.top4top.io/m_19664e93p1.mp4",
"https://d.top4top.io/m_1966jz0jr1.mp4",
"https://c.top4top.io/m_19661r7dt1.mp4",
"https://b.top4top.io/m_1966e3ts01.mp4",
"https://a.top4top.io/m_1966ruanp1.mp4",
"https://l.top4top.io/m_1966j1xcr1.mp4",
"https://k.top4top.io/m_19663jia71.mp4",
"https://j.top4top.io/m_1966reikf1.mp4",
"https://i.top4top.io/m_1966v3rjk1.mp4",
"https://h.top4top.io/m_1966oktgx1.mp4",
"https://g.top4top.io/m_1966x1zbo1.mp4",
"https://f.top4top.io/m_19661otau1.mp4",
"https://i.top4top.io/m_1966bqiim1.mp4",
"https://e.top4top.io/m_1966kwou51.mp4",
"https://d.top4top.io/m_196644tqw1.mp4",
"https://c.top4top.io/m_19664ld4z1.mp4",
"https://b.top4top.io/m_1966f4u101.mp4",
"https://a.top4top.io/m_1966aj6n61.mp4",
"https://l.top4top.io/m_1966ssrfs1.mp4",
"https://k.top4top.io/m_1966lq0uo1.mp4",
"https://j.top4top.io/m_1966hvv5t1.mp4",
"https://i.top4top.io/m_19666dxii1.mp4",
"https://h.top4top.io/m_1966zpl371.mp4",
"https://g.top4top.io/m_19667ld4b1.mp4",
"https://f.top4top.io/m_19663zw2x1.mp4",
"https://e.top4top.io/m_19667hx161.mp4",
"https://d.top4top.io/m_1966xvyhj1.mp4",
"https://c.top4top.io/m_19666vlaq1.mp4",
"https://b.top4top.io/m_1966svejo1.mp4",
"https://a.top4top.io/m_1966ohu0h1.mp4",
"https://l.top4top.io/m_1966rt1qs1.mp4",
"https://k.top4top.io/m_1966fjpnj1.mp4",
"https://j.top4top.io/m_19677oxbd1.mp4",
"https://i.top4top.io/m_19672o6ll1.mp4",
"https://h.top4top.io/m_19676f2ju1.mp4",
"https://f.top4top.io/m_19699qk6w1.mp4",
"https://g.top4top.io/m_1967uvzs61.mp4"
]
