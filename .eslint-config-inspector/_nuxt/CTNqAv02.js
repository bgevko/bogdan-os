const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      './Dh-akTWs.js',
      './BupVbMfq.js',
      './KJnl7Sfk.js',
      './DQKmB4pA.js',
      './Cqmz7tCN.js',
      './DBS2FFHD.js',
      './kw0LVqvE.js',
      './DlAUqK2U.js',
      './error-404.DDLtCJtr.css',
      './DBXtF2pt.js',
      './error-500.B9mR3dQb.css',
    ]),
) => i.map((i) => d[i]);
var Wp = Object.defineProperty;
var Wl = (e) => {
  throw TypeError(e);
};
var zp = (e, t, n) =>
  t in e ? Wp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
var xe = (e, t, n) => zp(e, typeof t != 'symbol' ? t + '' : t, n),
  _i = (e, t, n) => t.has(e) || Wl('Cannot ' + n);
var I = (e, t, n) => (_i(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
  We = (e, t, n) =>
    t.has(e)
      ? Wl('Cannot add the same private member more than once')
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  ke = (e, t, n, r) => (_i(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n),
  fn = (e, t, n) => (_i(e, t, 'access private method'), n);
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Za(e) {
  const t = Object.create(null);
  for (const n of e.split(',')) t[n] = 1;
  return (n) => n in t;
}
const pe = {},
  yr = [],
  Ut = () => {},
  Vp = () => !1,
  Rs = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Qa = (e) => e.startsWith('onUpdate:'),
  Be = Object.assign,
  el = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  qp = Object.prototype.hasOwnProperty,
  ve = (e, t) => qp.call(e, t),
  Z = Array.isArray,
  vr = (e) => Lr(e) === '[object Map]',
  uf = (e) => Lr(e) === '[object Set]',
  zl = (e) => Lr(e) === '[object Date]',
  Kp = (e) => Lr(e) === '[object RegExp]',
  ee = (e) => typeof e == 'function',
  Re = (e) => typeof e == 'string',
  Nt = (e) => typeof e == 'symbol',
  _e = (e) => e !== null && typeof e == 'object',
  ff = (e) => (_e(e) || ee(e)) && ee(e.then) && ee(e.catch),
  df = Object.prototype.toString,
  Lr = (e) => df.call(e),
  Gp = (e) => Lr(e).slice(8, -1),
  hf = (e) => Lr(e) === '[object Object]',
  tl = (e) => Re(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  wr = Za(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  Jo = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Jp = /-(\w)/g,
  yt = Jo((e) => e.replace(Jp, (t, n) => (n ? n.toUpperCase() : ''))),
  Yp = /\B([A-Z])/g,
  ln = Jo((e) => e.replace(Yp, '-$1').toLowerCase()),
  Yo = Jo((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Ci = Jo((e) => (e ? `on${Yo(e)}` : '')),
  ot = (e, t) => !Object.is(e, t),
  br = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  pf = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: r, value: n });
  },
  ia = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  gf = (e) => {
    const t = Re(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let Vl;
const Xo = () =>
  Vl ||
  (Vl =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof globalThis < 'u'
            ? globalThis
            : {});
function Yn(e) {
  if (Z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = Re(r) ? eg(r) : Yn(r);
      if (s) for (const o in s) t[o] = s[o];
    }
    return t;
  } else if (Re(e) || _e(e)) return e;
}
const Xp = /;(?![^(]*\))/g,
  Zp = /:([^]+)/,
  Qp = /\/\*[^]*?\*\//g;
function eg(e) {
  const t = {};
  return (
    e
      .replace(Qp, '')
      .split(Xp)
      .forEach((n) => {
        if (n) {
          const r = n.split(Zp);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function ir(e) {
  let t = '';
  if (Re(e)) t = e;
  else if (Z(e))
    for (let n = 0; n < e.length; n++) {
      const r = ir(e[n]);
      r && (t += r + ' ');
    }
  else if (_e(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
function mf(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Re(t) && (e.class = ir(t)), n && (e.style = Yn(n)), e;
}
const tg = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  ng = Za(tg);
function yf(e) {
  return !!e || e === '';
}
function rg(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++) n = ho(e[r], t[r]);
  return n;
}
function ho(e, t) {
  if (e === t) return !0;
  let n = zl(e),
    r = zl(t);
  if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
  if (((n = Nt(e)), (r = Nt(t)), n || r)) return e === t;
  if (((n = Z(e)), (r = Z(t)), n || r)) return n && r ? rg(e, t) : !1;
  if (((n = _e(e)), (r = _e(t)), n || r)) {
    if (!n || !r) return !1;
    const s = Object.keys(e).length,
      o = Object.keys(t).length;
    if (s !== o) return !1;
    for (const i in e) {
      const a = e.hasOwnProperty(i),
        l = t.hasOwnProperty(i);
      if ((a && !l) || (!a && l) || !ho(e[i], t[i])) return !1;
    }
  }
  return String(e) === String(t);
}
const vf = (e) => !!(e && e.__v_isRef === !0),
  Sn = (e) =>
    Re(e)
      ? e
      : e == null
        ? ''
        : Z(e) || (_e(e) && (e.toString === df || !ee(e.toString)))
          ? vf(e)
            ? Sn(e.value)
            : JSON.stringify(e, wf, 2)
          : String(e),
  wf = (e, t) =>
    vf(t)
      ? wf(e, t.value)
      : vr(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [r, s], o) => ((n[Si(r, o) + ' =>'] = s), n),
              {},
            ),
          }
        : uf(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Si(n)) }
          : Nt(t)
            ? Si(t)
            : _e(t) && !Z(t) && !hf(t)
              ? String(t)
              : t,
  Si = (e, t = '') => {
    var n;
    return Nt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Qe;
class bf {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = Qe),
      !t && Qe && (this.index = (Qe.scopes || (Qe.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Qe;
      try {
        return (Qe = this), t();
      } finally {
        Qe = n;
      }
    }
  }
  on() {
    Qe = this;
  }
  off() {
    Qe = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function sg(e) {
  return new bf(e);
}
function nl() {
  return Qe;
}
function og(e, t = !1) {
  Qe && Qe.cleanups.push(e);
}
let Ae;
const Ei = new WeakSet();
class _f {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Qe && Qe.active && Qe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && ((this.flags &= -65), Ei.has(this) && (Ei.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Sf(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), ql(this), Ef(this);
    const t = Ae,
      n = kt;
    (Ae = this), (kt = !0);
    try {
      return this.fn();
    } finally {
      xf(this), (Ae = t), (kt = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) ol(t);
      (this.deps = this.depsTail = void 0),
        ql(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64 ? Ei.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    aa(this) && this.run();
  }
  get dirty() {
    return aa(this);
  }
}
let Cf = 0,
  Yr,
  Xr;
function Sf(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = Xr), (Xr = e);
    return;
  }
  (e.next = Yr), (Yr = e);
}
function rl() {
  Cf++;
}
function sl() {
  if (--Cf > 0) return;
  if (Xr) {
    let t = Xr;
    for (Xr = void 0; t; ) {
      const n = t.next;
      (t.next = void 0), (t.flags &= -9), (t = n);
    }
  }
  let e;
  for (; Yr; ) {
    let t = Yr;
    for (Yr = void 0; t; ) {
      const n = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Ef(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1), (t.prevActiveLink = t.dep.activeLink), (t.dep.activeLink = t);
}
function xf(e) {
  let t,
    n = e.depsTail,
    r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), ol(r), ig(r)) : (t = r),
      (r.dep.activeLink = r.prevActiveLink),
      (r.prevActiveLink = void 0),
      (r = s);
  }
  (e.deps = t), (e.depsTail = n);
}
function aa(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Af(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function Af(e) {
  if ((e.flags & 4 && !(e.flags & 16)) || ((e.flags &= -17), e.globalVersion === us)) return;
  e.globalVersion = us;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !aa(e))) {
    e.flags &= -3;
    return;
  }
  const n = Ae,
    r = kt;
  (Ae = e), (kt = !0);
  try {
    Ef(e);
    const s = e.fn(e._value);
    (t.version === 0 || ot(s, e._value)) && ((e._value = s), t.version++);
  } catch (s) {
    throw (t.version++, s);
  } finally {
    (Ae = n), (kt = r), xf(e), (e.flags &= -3);
  }
}
function ol(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (
    (r && ((r.nextSub = s), (e.prevSub = void 0)),
    s && ((s.prevSub = r), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = r), !r && n.computed))
  ) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) ol(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ig(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)), n && ((n.prevDep = t), (e.nextDep = void 0));
}
let kt = !0;
const Tf = [];
function kn() {
  Tf.push(kt), (kt = !1);
}
function On() {
  const e = Tf.pop();
  kt = e === void 0 ? !0 : e;
}
function ql(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = Ae;
    Ae = void 0;
    try {
      t();
    } finally {
      Ae = n;
    }
  }
}
let us = 0;
class ag {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0);
  }
}
class Zo {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0);
  }
  track(t) {
    if (!Ae || !kt || Ae === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ae)
      (n = this.activeLink = new ag(Ae, this)),
        Ae.deps
          ? ((n.prevDep = Ae.depsTail), (Ae.depsTail.nextDep = n), (Ae.depsTail = n))
          : (Ae.deps = Ae.depsTail = n),
        $f(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const r = n.nextDep;
      (r.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = r),
        (n.prevDep = Ae.depsTail),
        (n.nextDep = void 0),
        (Ae.depsTail.nextDep = n),
        (Ae.depsTail = n),
        Ae.deps === n && (Ae.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, us++, this.notify(t);
  }
  notify(t) {
    rl();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      sl();
    }
  }
}
function $f(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) $f(r);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const po = new WeakMap(),
  Xn = Symbol(''),
  la = Symbol(''),
  fs = Symbol('');
function Je(e, t, n) {
  if (kt && Ae) {
    let r = po.get(e);
    r || po.set(e, (r = new Map()));
    let s = r.get(n);
    s || (r.set(n, (s = new Zo())), (s.map = r), (s.key = n)), s.track();
  }
}
function rn(e, t, n, r, s, o) {
  const i = po.get(e);
  if (!i) {
    us++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if ((rl(), t === 'clear')) i.forEach(a);
  else {
    const l = Z(e),
      c = l && tl(n);
    if (l && n === 'length') {
      const u = Number(r);
      i.forEach((d, h) => {
        (h === 'length' || h === fs || (!Nt(h) && h >= u)) && a(d);
      });
    } else
      switch (((n !== void 0 || i.has(void 0)) && a(i.get(n)), c && a(i.get(fs)), t)) {
        case 'add':
          l ? c && a(i.get('length')) : (a(i.get(Xn)), vr(e) && a(i.get(la)));
          break;
        case 'delete':
          l || (a(i.get(Xn)), vr(e) && a(i.get(la)));
          break;
        case 'set':
          vr(e) && a(i.get(Xn));
          break;
      }
  }
  sl();
}
function lg(e, t) {
  const n = po.get(e);
  return n && n.get(t);
}
function lr(e) {
  const t = de(e);
  return t === e ? t : (Je(t, 'iterate', fs), Et(e) ? t : t.map(Ye));
}
function Qo(e) {
  return Je((e = de(e)), 'iterate', fs), e;
}
const cg = {
  __proto__: null,
  [Symbol.iterator]() {
    return xi(this, Symbol.iterator, Ye);
  },
  concat(...e) {
    return lr(this).concat(...e.map((t) => (Z(t) ? lr(t) : t)));
  },
  entries() {
    return xi(this, 'entries', (e) => ((e[1] = Ye(e[1])), e));
  },
  every(e, t) {
    return Yt(this, 'every', e, t, void 0, arguments);
  },
  filter(e, t) {
    return Yt(this, 'filter', e, t, (n) => n.map(Ye), arguments);
  },
  find(e, t) {
    return Yt(this, 'find', e, t, Ye, arguments);
  },
  findIndex(e, t) {
    return Yt(this, 'findIndex', e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Yt(this, 'findLast', e, t, Ye, arguments);
  },
  findLastIndex(e, t) {
    return Yt(this, 'findLastIndex', e, t, void 0, arguments);
  },
  forEach(e, t) {
    return Yt(this, 'forEach', e, t, void 0, arguments);
  },
  includes(...e) {
    return Ai(this, 'includes', e);
  },
  indexOf(...e) {
    return Ai(this, 'indexOf', e);
  },
  join(e) {
    return lr(this).join(e);
  },
  lastIndexOf(...e) {
    return Ai(this, 'lastIndexOf', e);
  },
  map(e, t) {
    return Yt(this, 'map', e, t, void 0, arguments);
  },
  pop() {
    return Br(this, 'pop');
  },
  push(...e) {
    return Br(this, 'push', e);
  },
  reduce(e, ...t) {
    return Kl(this, 'reduce', e, t);
  },
  reduceRight(e, ...t) {
    return Kl(this, 'reduceRight', e, t);
  },
  shift() {
    return Br(this, 'shift');
  },
  some(e, t) {
    return Yt(this, 'some', e, t, void 0, arguments);
  },
  splice(...e) {
    return Br(this, 'splice', e);
  },
  toReversed() {
    return lr(this).toReversed();
  },
  toSorted(e) {
    return lr(this).toSorted(e);
  },
  toSpliced(...e) {
    return lr(this).toSpliced(...e);
  },
  unshift(...e) {
    return Br(this, 'unshift', e);
  },
  values() {
    return xi(this, 'values', Ye);
  },
};
function xi(e, t, n) {
  const r = Qo(e),
    s = r[t]();
  return (
    r !== e &&
      !Et(e) &&
      ((s._next = s.next),
      (s.next = () => {
        const o = s._next();
        return o.value && (o.value = n(o.value)), o;
      })),
    s
  );
}
const ug = Array.prototype;
function Yt(e, t, n, r, s, o) {
  const i = Qo(e),
    a = i !== e && !Et(e),
    l = i[t];
  if (l !== ug[t]) {
    const d = l.apply(e, o);
    return a ? Ye(d) : d;
  }
  let c = n;
  i !== e &&
    (a
      ? (c = function (d, h) {
          return n.call(this, Ye(d), h, e);
        })
      : n.length > 2 &&
        (c = function (d, h) {
          return n.call(this, d, h, e);
        }));
  const u = l.call(i, c, r);
  return a && s ? s(u) : u;
}
function Kl(e, t, n, r) {
  const s = Qo(e);
  let o = n;
  return (
    s !== e &&
      (Et(e)
        ? n.length > 3 &&
          (o = function (i, a, l) {
            return n.call(this, i, a, l, e);
          })
        : (o = function (i, a, l) {
            return n.call(this, i, Ye(a), l, e);
          })),
    s[t](o, ...r)
  );
}
function Ai(e, t, n) {
  const r = de(e);
  Je(r, 'iterate', fs);
  const s = r[t](...n);
  return (s === -1 || s === !1) && ll(n[0]) ? ((n[0] = de(n[0])), r[t](...n)) : s;
}
function Br(e, t, n = []) {
  kn(), rl();
  const r = de(e)[t].apply(e, n);
  return sl(), On(), r;
}
const fg = Za('__proto__,__v_isRef,__isVue'),
  Rf = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(Nt),
  );
function dg(e) {
  Nt(e) || (e = String(e));
  const t = de(this);
  return Je(t, 'has', e), t.hasOwnProperty(e);
}
class Pf {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, r) {
    if (n === '__v_skip') return t.__v_skip;
    const s = this._isReadonly,
      o = this._isShallow;
    if (n === '__v_isReactive') return !s;
    if (n === '__v_isReadonly') return s;
    if (n === '__v_isShallow') return o;
    if (n === '__v_raw')
      return r === (s ? (o ? Cg : Nf) : o ? Mf : Of).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0;
    const i = Z(t);
    if (!s) {
      let l;
      if (i && (l = cg[n])) return l;
      if (n === 'hasOwnProperty') return dg;
    }
    const a = Reflect.get(t, n, De(t) ? t : r);
    return (Nt(n) ? Rf.has(n) : fg(n)) || (s || Je(t, 'get', n), o)
      ? a
      : De(a)
        ? i && tl(n)
          ? a
          : a.value
        : _e(a)
          ? s
            ? Ir(a)
            : Jt(a)
          : a;
  }
}
class kf extends Pf {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const l = $n(o);
      if ((!Et(r) && !$n(r) && ((o = de(o)), (r = de(r))), !Z(t) && De(o) && !De(r)))
        return l ? !1 : ((o.value = r), !0);
    }
    const i = Z(t) && tl(n) ? Number(n) < t.length : ve(t, n),
      a = Reflect.set(t, n, r, De(t) ? t : s);
    return t === de(s) && (i ? ot(r, o) && rn(t, 'set', n, r) : rn(t, 'add', n, r)), a;
  }
  deleteProperty(t, n) {
    const r = ve(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && rn(t, 'delete', n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Nt(n) || !Rf.has(n)) && Je(t, 'has', n), r;
  }
  ownKeys(t) {
    return Je(t, 'iterate', Z(t) ? 'length' : Xn), Reflect.ownKeys(t);
  }
}
class hg extends Pf {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const pg = new kf(),
  gg = new hg(),
  mg = new kf(!0);
const ca = (e) => e,
  Ls = (e) => Reflect.getPrototypeOf(e);
function yg(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      o = de(s),
      i = vr(o),
      a = e === 'entries' || (e === Symbol.iterator && i),
      l = e === 'keys' && i,
      c = s[e](...r),
      u = n ? ca : t ? ua : Ye;
    return (
      !t && Je(o, 'iterate', l ? la : Xn),
      {
        next() {
          const { value: d, done: h } = c.next();
          return h ? { value: d, done: h } : { value: a ? [u(d[0]), u(d[1])] : u(d), done: h };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Is(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this;
  };
}
function vg(e, t) {
  const n = {
    get(s) {
      const o = this.__v_raw,
        i = de(o),
        a = de(s);
      e || (ot(s, a) && Je(i, 'get', s), Je(i, 'get', a));
      const { has: l } = Ls(i),
        c = t ? ca : e ? ua : Ye;
      if (l.call(i, s)) return c(o.get(s));
      if (l.call(i, a)) return c(o.get(a));
      o !== i && o.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Je(de(s), 'iterate', Xn), Reflect.get(s, 'size', s);
    },
    has(s) {
      const o = this.__v_raw,
        i = de(o),
        a = de(s);
      return (
        e || (ot(s, a) && Je(i, 'has', s), Je(i, 'has', a)),
        s === a ? o.has(s) : o.has(s) || o.has(a)
      );
    },
    forEach(s, o) {
      const i = this,
        a = i.__v_raw,
        l = de(a),
        c = t ? ca : e ? ua : Ye;
      return !e && Je(l, 'iterate', Xn), a.forEach((u, d) => s.call(o, c(u), c(d), i));
    },
  };
  return (
    Be(
      n,
      e
        ? { add: Is('add'), set: Is('set'), delete: Is('delete'), clear: Is('clear') }
        : {
            add(s) {
              !t && !Et(s) && !$n(s) && (s = de(s));
              const o = de(this);
              return Ls(o).has.call(o, s) || (o.add(s), rn(o, 'add', s, s)), this;
            },
            set(s, o) {
              !t && !Et(o) && !$n(o) && (o = de(o));
              const i = de(this),
                { has: a, get: l } = Ls(i);
              let c = a.call(i, s);
              c || ((s = de(s)), (c = a.call(i, s)));
              const u = l.call(i, s);
              return i.set(s, o), c ? ot(o, u) && rn(i, 'set', s, o) : rn(i, 'add', s, o), this;
            },
            delete(s) {
              const o = de(this),
                { has: i, get: a } = Ls(o);
              let l = i.call(o, s);
              l || ((s = de(s)), (l = i.call(o, s))), a && a.call(o, s);
              const c = o.delete(s);
              return l && rn(o, 'delete', s, void 0), c;
            },
            clear() {
              const s = de(this),
                o = s.size !== 0,
                i = s.clear();
              return o && rn(s, 'clear', void 0, void 0), i;
            },
          },
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((s) => {
      n[s] = yg(s, e, t);
    }),
    n
  );
}
function il(e, t) {
  const n = vg(e, t);
  return (r, s, o) =>
    s === '__v_isReactive'
      ? !e
      : s === '__v_isReadonly'
        ? e
        : s === '__v_raw'
          ? r
          : Reflect.get(ve(n, s) && s in r ? n : r, s, o);
}
const wg = { get: il(!1, !1) },
  bg = { get: il(!1, !0) },
  _g = { get: il(!0, !1) };
const Of = new WeakMap(),
  Mf = new WeakMap(),
  Nf = new WeakMap(),
  Cg = new WeakMap();
function Sg(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2;
    default:
      return 0;
  }
}
function Eg(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Sg(Gp(e));
}
function Jt(e) {
  return $n(e) ? e : al(e, !1, pg, wg, Of);
}
function on(e) {
  return al(e, !1, mg, bg, Mf);
}
function Ir(e) {
  return al(e, !0, gg, _g, Nf);
}
function al(e, t, n, r, s) {
  if (!_e(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = s.get(e);
  if (o) return o;
  const i = Eg(e);
  if (i === 0) return e;
  const a = new Proxy(e, i === 2 ? r : n);
  return s.set(e, a), a;
}
function Zn(e) {
  return $n(e) ? Zn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function $n(e) {
  return !!(e && e.__v_isReadonly);
}
function Et(e) {
  return !!(e && e.__v_isShallow);
}
function ll(e) {
  return e ? !!e.__v_raw : !1;
}
function de(e) {
  const t = e && e.__v_raw;
  return t ? de(t) : e;
}
function xg(e) {
  return !ve(e, '__v_skip') && Object.isExtensible(e) && pf(e, '__v_skip', !0), e;
}
const Ye = (e) => (_e(e) ? Jt(e) : e),
  ua = (e) => (_e(e) ? Ir(e) : e);
function De(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Te(e) {
  return Lf(e, !1);
}
function Ke(e) {
  return Lf(e, !0);
}
function Lf(e, t) {
  return De(e) ? e : new Ag(e, t);
}
class Ag {
  constructor(t, n) {
    (this.dep = new Zo()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : de(t)),
      (this._value = n ? t : Ye(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      r = this.__v_isShallow || Et(t) || $n(t);
    (t = r ? t : de(t)),
      ot(t, n) && ((this._rawValue = t), (this._value = r ? t : Ye(t)), this.dep.trigger());
  }
}
function oe(e) {
  return De(e) ? e.value : e;
}
function Ve(e) {
  return ee(e) ? e() : oe(e);
}
const Tg = {
  get: (e, t, n) => (t === '__v_raw' ? e : oe(Reflect.get(e, t, n))),
  set: (e, t, n, r) => {
    const s = e[t];
    return De(s) && !De(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function If(e) {
  return Zn(e) ? e : new Proxy(e, Tg);
}
class $g {
  constructor(t) {
    (this.__v_isRef = !0), (this._value = void 0);
    const n = (this.dep = new Zo()),
      { get: r, set: s } = t(n.track.bind(n), n.trigger.bind(n));
    (this._get = r), (this._set = s);
  }
  get value() {
    return (this._value = this._get());
  }
  set value(t) {
    this._set(t);
  }
}
function Hf(e) {
  return new $g(e);
}
class Rg {
  constructor(t, n, r) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = r),
      (this.__v_isRef = !0),
      (this._value = void 0);
  }
  get value() {
    const t = this._object[this._key];
    return (this._value = t === void 0 ? this._defaultValue : t);
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return lg(de(this._object), this._key);
  }
}
class Pg {
  constructor(t) {
    (this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0), (this._value = void 0);
  }
  get value() {
    return (this._value = this._getter());
  }
}
function jf(e, t, n) {
  return De(e) ? e : ee(e) ? new Pg(e) : _e(e) && arguments.length > 1 ? kg(e, t, n) : Te(e);
}
function kg(e, t, n) {
  const r = e[t];
  return De(r) ? r : new Rg(e, t, n);
}
class Og {
  constructor(t, n, r) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Zo(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = us - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = r);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && Ae !== this)) return Sf(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Af(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Mg(e, t, n = !1) {
  let r, s;
  return ee(e) ? (r = e) : ((r = e.get), (s = e.set)), new Og(r, s, n);
}
const Hs = {},
  go = new WeakMap();
let Wn;
function Ng(e, t = !1, n = Wn) {
  if (n) {
    let r = go.get(n);
    r || go.set(n, (r = [])), r.push(e);
  }
}
function Lg(e, t, n = pe) {
  const { immediate: r, deep: s, once: o, scheduler: i, augmentJob: a, call: l } = n,
    c = (v) => (s ? v : Et(v) || s === !1 || s === 0 ? sn(v, 1) : sn(v));
  let u,
    d,
    h,
    f,
    p = !1,
    m = !1;
  if (
    (De(e)
      ? ((d = () => e.value), (p = Et(e)))
      : Zn(e)
        ? ((d = () => c(e)), (p = !0))
        : Z(e)
          ? ((m = !0),
            (p = e.some((v) => Zn(v) || Et(v))),
            (d = () =>
              e.map((v) => {
                if (De(v)) return v.value;
                if (Zn(v)) return c(v);
                if (ee(v)) return l ? l(v, 2) : v();
              })))
          : ee(e)
            ? t
              ? (d = l ? () => l(e, 2) : e)
              : (d = () => {
                  if (h) {
                    kn();
                    try {
                      h();
                    } finally {
                      On();
                    }
                  }
                  const v = Wn;
                  Wn = u;
                  try {
                    return l ? l(e, 3, [f]) : e(f);
                  } finally {
                    Wn = v;
                  }
                })
            : (d = Ut),
    t && s)
  ) {
    const v = d,
      x = s === !0 ? 1 / 0 : s;
    d = () => sn(v(), x);
  }
  const b = nl(),
    y = () => {
      u.stop(), b && b.active && el(b.effects, u);
    };
  if (o && t) {
    const v = t;
    t = (...x) => {
      v(...x), y();
    };
  }
  let _ = m ? new Array(e.length).fill(Hs) : Hs;
  const g = (v) => {
    if (!(!(u.flags & 1) || (!u.dirty && !v)))
      if (t) {
        const x = u.run();
        if (s || p || (m ? x.some(($, k) => ot($, _[k])) : ot(x, _))) {
          h && h();
          const $ = Wn;
          Wn = u;
          try {
            const k = [x, _ === Hs ? void 0 : m && _[0] === Hs ? [] : _, f];
            l ? l(t, 3, k) : t(...k), (_ = x);
          } finally {
            Wn = $;
          }
        }
      } else u.run();
  };
  return (
    a && a(g),
    (u = new _f(d)),
    (u.scheduler = i ? () => i(g, !1) : g),
    (f = (v) => Ng(v, !1, u)),
    (h = u.onStop =
      () => {
        const v = go.get(u);
        if (v) {
          if (l) l(v, 4);
          else for (const x of v) x();
          go.delete(u);
        }
      }),
    t ? (r ? g(!0) : (_ = u.run())) : i ? i(g.bind(null, !0), !0) : u.run(),
    (y.pause = u.pause.bind(u)),
    (y.resume = u.resume.bind(u)),
    (y.stop = y),
    y
  );
}
function sn(e, t = 1 / 0, n) {
  if (t <= 0 || !_e(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) return e;
  if ((n.add(e), t--, De(e))) sn(e.value, t, n);
  else if (Z(e)) for (let r = 0; r < e.length; r++) sn(e[r], t, n);
  else if (uf(e) || vr(e))
    e.forEach((r) => {
      sn(r, t, n);
    });
  else if (hf(e)) {
    for (const r in e) sn(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && sn(e[r], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Ps(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Hr(s, t, n);
  }
}
function Lt(e, t, n, r) {
  if (ee(e)) {
    const s = Ps(e, t, n, r);
    return (
      s &&
        ff(s) &&
        s.catch((o) => {
          Hr(o, t, n);
        }),
      s
    );
  }
  if (Z(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++) s.push(Lt(e[o], t, n, r));
    return s;
  }
}
function Hr(e, t, n, r = !0) {
  const s = t ? t.vnode : null,
    { errorHandler: o, throwUnhandledErrorInProduction: i } = (t && t.appContext.config) || pe;
  if (t) {
    let a = t.parent;
    const l = t.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const u = a.ec;
      if (u) {
        for (let d = 0; d < u.length; d++) if (u[d](e, l, c) === !1) return;
      }
      a = a.parent;
    }
    if (o) {
      kn(), Ps(o, null, 10, [e, l, c]), On();
      return;
    }
  }
  Ig(e, n, s, r, i);
}
function Ig(e, t, n, r = !0, s = !1) {
  if (s) throw e;
  console.error(e);
}
const et = [];
let Ft = -1;
const _r = [];
let mn = null,
  fr = 0;
const Ff = Promise.resolve();
let mo = null;
function Mn(e) {
  const t = mo || Ff;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Hg(e) {
  let t = Ft + 1,
    n = et.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = et[r],
      o = ds(s);
    o < e || (o === e && s.flags & 2) ? (t = r + 1) : (n = r);
  }
  return t;
}
function cl(e) {
  if (!(e.flags & 1)) {
    const t = ds(e),
      n = et[et.length - 1];
    !n || (!(e.flags & 2) && t >= ds(n)) ? et.push(e) : et.splice(Hg(t), 0, e),
      (e.flags |= 1),
      Df();
  }
}
function Df() {
  mo || (mo = Ff.then(Bf));
}
function fa(e) {
  Z(e)
    ? _r.push(...e)
    : mn && e.id === -1
      ? mn.splice(fr + 1, 0, e)
      : e.flags & 1 || (_r.push(e), (e.flags |= 1)),
    Df();
}
function Gl(e, t, n = Ft + 1) {
  for (; n < et.length; n++) {
    const r = et[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      et.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function yo(e) {
  if (_r.length) {
    const t = [...new Set(_r)].sort((n, r) => ds(n) - ds(r));
    if (((_r.length = 0), mn)) {
      mn.push(...t);
      return;
    }
    for (mn = t, fr = 0; fr < mn.length; fr++) {
      const n = mn[fr];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (mn = null), (fr = 0);
  }
}
const ds = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function Bf(e) {
  try {
    for (Ft = 0; Ft < et.length; Ft++) {
      const t = et[Ft];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2), Ps(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ft < et.length; Ft++) {
      const t = et[Ft];
      t && (t.flags &= -2);
    }
    (Ft = -1), (et.length = 0), yo(), (mo = null), (et.length || _r.length) && Bf();
  }
}
let Fe = null,
  ei = null;
function vo(e) {
  const t = Fe;
  return (Fe = e), (ei = (e && e.type.__scopeId) || null), t;
}
function jg(e) {
  ei = e;
}
function Fg() {
  ei = null;
}
const Dg = (e) => Wt;
function Wt(e, t = Fe, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && ic(-1);
    const o = vo(t);
    let i;
    try {
      i = e(...s);
    } finally {
      vo(o), r._d && ic(1);
    }
    return i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function zE(e, t) {
  if (Fe === null) return e;
  const n = ii(Fe),
    r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, a, l = pe] = t[s];
    o &&
      (ee(o) && (o = { mounted: o, updated: o }),
      o.deep && sn(i),
      r.push({ dir: o, instance: n, value: i, oldValue: void 0, arg: a, modifiers: l }));
  }
  return e;
}
function Dt(e, t, n, r) {
  const s = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    o && (a.oldValue = o[i].value);
    let l = a.dir[r];
    l && (kn(), Lt(l, n, 8, [e.el, a, e, t]), On());
  }
}
const Bg = Symbol('_vte'),
  Uf = (e) => e.__isTeleport,
  yn = Symbol('_leaveCb'),
  js = Symbol('_enterCb');
function Ug() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() };
  return (
    jr(() => {
      e.isMounted = !0;
    }),
    Os(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const wt = [Function, Array],
  Wf = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: wt,
    onEnter: wt,
    onAfterEnter: wt,
    onEnterCancelled: wt,
    onBeforeLeave: wt,
    onLeave: wt,
    onAfterLeave: wt,
    onLeaveCancelled: wt,
    onBeforeAppear: wt,
    onAppear: wt,
    onAfterAppear: wt,
    onAppearCancelled: wt,
  },
  zf = (e) => {
    const t = e.subTree;
    return t.component ? zf(t.component) : t;
  },
  Wg = {
    name: 'BaseTransition',
    props: Wf,
    setup(e, { slots: t }) {
      const n = Nn(),
        r = Ug();
      return () => {
        const s = t.default && Kf(t.default(), !0);
        if (!s || !s.length) return;
        const o = Vf(s),
          i = de(e),
          { mode: a } = i;
        if (r.isLeaving) return Ti(o);
        const l = Jl(o);
        if (!l) return Ti(o);
        let c = da(l, i, r, n, (d) => (c = d));
        l.type !== He && Rr(l, c);
        let u = n.subTree && Jl(n.subTree);
        if (u && u.type !== He && !Rt(l, u) && zf(n).type !== He) {
          let d = da(u, i, r, n);
          if ((Rr(u, d), a === 'out-in' && l.type !== He))
            return (
              (r.isLeaving = !0),
              (d.afterLeave = () => {
                (r.isLeaving = !1),
                  n.job.flags & 8 || n.update(),
                  delete d.afterLeave,
                  (u = void 0);
              }),
              Ti(o)
            );
          a === 'in-out' && l.type !== He
            ? (d.delayLeave = (h, f, p) => {
                const m = qf(r, u);
                (m[String(u.key)] = u),
                  (h[yn] = () => {
                    f(), (h[yn] = void 0), delete c.delayedLeave, (u = void 0);
                  }),
                  (c.delayedLeave = () => {
                    p(), delete c.delayedLeave, (u = void 0);
                  });
              })
            : (u = void 0);
        } else u && (u = void 0);
        return o;
      };
    },
  };
function Vf(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== He) {
        t = n;
        break;
      }
  }
  return t;
}
const zg = Wg;
function qf(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function da(e, t, n, r, s) {
  const {
      appear: o,
      mode: i,
      persisted: a = !1,
      onBeforeEnter: l,
      onEnter: c,
      onAfterEnter: u,
      onEnterCancelled: d,
      onBeforeLeave: h,
      onLeave: f,
      onAfterLeave: p,
      onLeaveCancelled: m,
      onBeforeAppear: b,
      onAppear: y,
      onAfterAppear: _,
      onAppearCancelled: g,
    } = t,
    v = String(e.key),
    x = qf(n, e),
    $ = (E, A) => {
      E && Lt(E, r, 9, A);
    },
    k = (E, A) => {
      const T = A[1];
      $(E, A), Z(E) ? E.every((C) => C.length <= 1) && T() : E.length <= 1 && T();
    },
    U = {
      mode: i,
      persisted: a,
      beforeEnter(E) {
        let A = l;
        if (!n.isMounted)
          if (o) A = b || l;
          else return;
        E[yn] && E[yn](!0);
        const T = x[v];
        T && Rt(e, T) && T.el[yn] && T.el[yn](), $(A, [E]);
      },
      enter(E) {
        let A = c,
          T = u,
          C = d;
        if (!n.isMounted)
          if (o) (A = y || c), (T = _ || u), (C = g || d);
          else return;
        let R = !1;
        const H = (E[js] = (K) => {
          R ||
            ((R = !0),
            K ? $(C, [E]) : $(T, [E]),
            U.delayedLeave && U.delayedLeave(),
            (E[js] = void 0));
        });
        A ? k(A, [E, H]) : H();
      },
      leave(E, A) {
        const T = String(e.key);
        if ((E[js] && E[js](!0), n.isUnmounting)) return A();
        $(h, [E]);
        let C = !1;
        const R = (E[yn] = (H) => {
          C ||
            ((C = !0), A(), H ? $(m, [E]) : $(p, [E]), (E[yn] = void 0), x[T] === e && delete x[T]);
        });
        (x[T] = e), f ? k(f, [E, R]) : R();
      },
      clone(E) {
        const A = da(E, t, n, r, s);
        return s && s(A), A;
      },
    };
  return U;
}
function Ti(e) {
  if (ks(e)) return (e = an(e)), (e.children = null), e;
}
function Jl(e) {
  if (!ks(e)) return Uf(e.type) && e.children ? Vf(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && ee(n.default)) return n.default();
  }
}
function Rr(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Rr(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function Kf(e, t = !1, n) {
  let r = [],
    s = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === Ie
      ? (i.patchFlag & 128 && s++, (r = r.concat(Kf(i.children, t, a))))
      : (t || i.type !== He) && r.push(a != null ? an(i, { key: a }) : i);
  }
  if (s > 1) for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */ function vt(e, t) {
  return ee(e) ? Be({ name: e.name }, t, { setup: e }) : e;
}
function ul(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0];
}
function hs(e, t, n, r, s = !1) {
  if (Z(e)) {
    e.forEach((p, m) => hs(p, t && (Z(t) ? t[m] : t), n, r, s));
    return;
  }
  if (En(r) && !s) {
    r.shapeFlag & 512 &&
      r.type.__asyncResolved &&
      r.component.subTree.component &&
      hs(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? ii(r.component) : r.el,
    i = s ? null : o,
    { i: a, r: l } = e,
    c = t && t.r,
    u = a.refs === pe ? (a.refs = {}) : a.refs,
    d = a.setupState,
    h = de(d),
    f = d === pe ? () => !1 : (p) => ve(h, p);
  if (
    (c != null &&
      c !== l &&
      (Re(c) ? ((u[c] = null), f(c) && (d[c] = null)) : De(c) && (c.value = null)),
    ee(l))
  )
    Ps(l, a, 12, [i, u]);
  else {
    const p = Re(l),
      m = De(l);
    if (p || m) {
      const b = () => {
        if (e.f) {
          const y = p ? (f(l) ? d[l] : u[l]) : l.value;
          s
            ? Z(y) && el(y, o)
            : Z(y)
              ? y.includes(o) || y.push(o)
              : p
                ? ((u[l] = [o]), f(l) && (d[l] = u[l]))
                : ((l.value = [o]), e.k && (u[e.k] = l.value));
        } else p ? ((u[l] = i), f(l) && (d[l] = i)) : m && ((l.value = i), e.k && (u[e.k] = i));
      };
      i ? ((b.id = -1), qe(b, n)) : b();
    }
  }
}
let Yl = !1;
const cr = () => {
    Yl || (console.error('Hydration completed but contains mismatches.'), (Yl = !0));
  },
  Vg = (e) => e.namespaceURI.includes('svg') && e.tagName !== 'foreignObject',
  qg = (e) => e.namespaceURI.includes('MathML'),
  Fs = (e) => {
    if (e.nodeType === 1) {
      if (Vg(e)) return 'svg';
      if (qg(e)) return 'mathml';
    }
  },
  pr = (e) => e.nodeType === 8;
function Kg(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: r,
        createText: s,
        nextSibling: o,
        parentNode: i,
        remove: a,
        insert: l,
        createComment: c,
      },
    } = e,
    u = (g, v) => {
      if (!v.hasChildNodes()) {
        n(null, g, v), yo(), (v._vnode = g);
        return;
      }
      d(v.firstChild, g, null, null, null), yo(), (v._vnode = g);
    },
    d = (g, v, x, $, k, U = !1) => {
      U = U || !!v.dynamicChildren;
      const E = pr(g) && g.data === '[',
        A = () => m(g, v, x, $, k, E),
        { type: T, ref: C, shapeFlag: R, patchFlag: H } = v;
      let K = g.nodeType;
      (v.el = g), H === -2 && ((U = !1), (v.dynamicChildren = null));
      let D = null;
      switch (T) {
        case er:
          K !== 3
            ? v.children === ''
              ? (l((v.el = s('')), i(g), g), (D = g))
              : (D = A())
            : (g.data !== v.children && (cr(), (g.data = v.children)), (D = o(g)));
          break;
        case He:
          _(g)
            ? ((D = o(g)), y((v.el = g.content.firstChild), g, x))
            : K !== 8 || E
              ? (D = A())
              : (D = o(g));
          break;
        case to:
          if ((E && ((g = o(g)), (K = g.nodeType)), K === 1 || K === 3)) {
            D = g;
            const B = !v.children.length;
            for (let F = 0; F < v.staticCount; F++)
              B && (v.children += D.nodeType === 1 ? D.outerHTML : D.data),
                F === v.staticCount - 1 && (v.anchor = D),
                (D = o(D));
            return E ? o(D) : D;
          } else A();
          break;
        case Ie:
          E ? (D = p(g, v, x, $, k, U)) : (D = A());
          break;
        default:
          if (R & 1)
            (K !== 1 || v.type.toLowerCase() !== g.tagName.toLowerCase()) && !_(g)
              ? (D = A())
              : (D = h(g, v, x, $, k, U));
          else if (R & 6) {
            v.slotScopeIds = k;
            const B = i(g);
            if (
              (E
                ? (D = b(g))
                : pr(g) && g.data === 'teleport start'
                  ? (D = b(g, g.data, 'teleport end'))
                  : (D = o(g)),
              t(v, B, null, x, $, Fs(B), U),
              En(v) && !v.type.__asyncResolved)
            ) {
              let F;
              E
                ? ((F = ge(Ie)), (F.anchor = D ? D.previousSibling : B.lastChild))
                : (F = g.nodeType === 3 ? gt('') : ge('div')),
                (F.el = g),
                (v.component.subTree = F);
            }
          } else
            R & 64
              ? K !== 8
                ? (D = A())
                : (D = v.type.hydrate(g, v, x, $, k, U, e, f))
              : R & 128 && (D = v.type.hydrate(g, v, x, $, Fs(i(g)), k, U, e, d));
      }
      return C != null && hs(C, null, $, v), D;
    },
    h = (g, v, x, $, k, U) => {
      U = U || !!v.dynamicChildren;
      const { type: E, props: A, patchFlag: T, shapeFlag: C, dirs: R, transition: H } = v,
        K = E === 'input' || E === 'option';
      if (K || T !== -1) {
        R && Dt(v, null, x, 'created');
        let D = !1;
        if (_(g)) {
          D = gd(null, H) && x && x.vnode.props && x.vnode.props.appear;
          const F = g.content.firstChild;
          D && H.beforeEnter(F), y(F, g, x), (v.el = g = F);
        }
        if (C & 16 && !(A && (A.innerHTML || A.textContent))) {
          let F = f(g.firstChild, v, g, x, $, k, U);
          for (; F; ) {
            Ds(g, 1) || cr();
            const ne = F;
            (F = F.nextSibling), a(ne);
          }
        } else if (C & 8) {
          let F = v.children;
          F[0] ===
            `
` &&
            (g.tagName === 'PRE' || g.tagName === 'TEXTAREA') &&
            (F = F.slice(1)),
            g.textContent !== F && (Ds(g, 0) || cr(), (g.textContent = v.children));
        }
        if (A) {
          if (K || !U || T & 48) {
            const F = g.tagName.includes('-');
            for (const ne in A)
              ((K && (ne.endsWith('value') || ne === 'indeterminate')) ||
                (Rs(ne) && !wr(ne)) ||
                ne[0] === '.' ||
                F) &&
                r(g, ne, null, A[ne], void 0, x);
          } else if (A.onClick) r(g, 'onClick', null, A.onClick, void 0, x);
          else if (T & 4 && Zn(A.style)) for (const F in A.style) A.style[F];
        }
        let B;
        (B = A && A.onVnodeBeforeMount) && st(B, x, v),
          R && Dt(v, null, x, 'beforeMount'),
          ((B = A && A.onVnodeMounted) || R || D) &&
            Ed(() => {
              B && st(B, x, v), D && H.enter(g), R && Dt(v, null, x, 'mounted');
            }, $);
      }
      return g.nextSibling;
    },
    f = (g, v, x, $, k, U, E) => {
      E = E || !!v.dynamicChildren;
      const A = v.children,
        T = A.length;
      for (let C = 0; C < T; C++) {
        const R = E ? A[C] : (A[C] = pt(A[C])),
          H = R.type === er;
        g
          ? (H &&
              !E &&
              C + 1 < T &&
              pt(A[C + 1]).type === er &&
              (l(s(g.data.slice(R.children.length)), x, o(g)), (g.data = R.children)),
            (g = d(g, R, $, k, U, E)))
          : H && !R.children
            ? l((R.el = s('')), x)
            : (Ds(x, 1) || cr(), n(null, R, x, null, $, k, Fs(x), U));
      }
      return g;
    },
    p = (g, v, x, $, k, U) => {
      const { slotScopeIds: E } = v;
      E && (k = k ? k.concat(E) : E);
      const A = i(g),
        T = f(o(g), v, A, x, $, k, U);
      return T && pr(T) && T.data === ']'
        ? o((v.anchor = T))
        : (cr(), l((v.anchor = c(']')), A, T), T);
    },
    m = (g, v, x, $, k, U) => {
      if ((Ds(g.parentElement, 1) || cr(), (v.el = null), U)) {
        const T = b(g);
        for (;;) {
          const C = o(g);
          if (C && C !== T) a(C);
          else break;
        }
      }
      const E = o(g),
        A = i(g);
      return a(g), n(null, v, A, E, x, $, Fs(A), k), x && ((x.vnode.el = v.el), oi(x, v.el)), E;
    },
    b = (g, v = '[', x = ']') => {
      let $ = 0;
      for (; g; )
        if (((g = o(g)), g && pr(g) && (g.data === v && $++, g.data === x))) {
          if ($ === 0) return o(g);
          $--;
        }
      return g;
    },
    y = (g, v, x) => {
      const $ = v.parentNode;
      $ && $.replaceChild(g, v);
      let k = x;
      for (; k; ) k.vnode.el === v && (k.vnode.el = k.subTree.el = g), (k = k.parent);
    },
    _ = (g) => g.nodeType === 1 && g.tagName === 'TEMPLATE';
  return [u, d];
}
const Xl = 'data-allow-mismatch',
  Gg = { 0: 'text', 1: 'children', 2: 'class', 3: 'style', 4: 'attribute' };
function Ds(e, t) {
  if (t === 0 || t === 1) for (; e && !e.hasAttribute(Xl); ) e = e.parentElement;
  const n = e && e.getAttribute(Xl);
  if (n == null) return !1;
  if (n === '') return !0;
  {
    const r = n.split(',');
    return t === 0 && r.includes('children') ? !0 : n.split(',').includes(Gg[t]);
  }
}
Xo().requestIdleCallback;
Xo().cancelIdleCallback;
function Jg(e, t) {
  if (pr(e) && e.data === '[') {
    let n = 1,
      r = e.nextSibling;
    for (; r; ) {
      if (r.nodeType === 1) {
        if (t(r) === !1) break;
      } else if (pr(r))
        if (r.data === ']') {
          if (--n === 0) break;
        } else r.data === '[' && n++;
      r = r.nextSibling;
    }
  } else t(e);
}
const En = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */ function Zl(e) {
  ee(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: r,
    delay: s = 200,
    hydrate: o,
    timeout: i,
    suspensible: a = !0,
    onError: l,
  } = e;
  let c = null,
    u,
    d = 0;
  const h = () => (d++, (c = null), f()),
    f = () => {
      let p;
      return (
        c ||
        (p = c =
          t()
            .catch((m) => {
              if (((m = m instanceof Error ? m : new Error(String(m))), l))
                return new Promise((b, y) => {
                  l(
                    m,
                    () => b(h()),
                    () => y(m),
                    d + 1,
                  );
                });
              throw m;
            })
            .then((m) =>
              p !== c && c
                ? c
                : (m && (m.__esModule || m[Symbol.toStringTag] === 'Module') && (m = m.default),
                  (u = m),
                  m),
            ))
      );
    };
  return vt({
    name: 'AsyncComponentWrapper',
    __asyncLoader: f,
    __asyncHydrate(p, m, b) {
      const y = o
        ? () => {
            const _ = o(b, (g) => Jg(p, g));
            _ && (m.bum || (m.bum = [])).push(_);
          }
        : b;
      u ? y() : f().then(() => !m.isUnmounted && y());
    },
    get __asyncResolved() {
      return u;
    },
    setup() {
      const p = je;
      if ((ul(p), u)) return () => $i(u, p);
      const m = (g) => {
        (c = null), Hr(g, p, 13, !r);
      };
      if ((a && p.suspense) || kr)
        return f()
          .then((g) => () => $i(g, p))
          .catch((g) => (m(g), () => (r ? ge(r, { error: g }) : null)));
      const b = Te(!1),
        y = Te(),
        _ = Te(!!s);
      return (
        s &&
          setTimeout(() => {
            _.value = !1;
          }, s),
        i != null &&
          setTimeout(() => {
            if (!b.value && !y.value) {
              const g = new Error(`Async component timed out after ${i}ms.`);
              m(g), (y.value = g);
            }
          }, i),
        f()
          .then(() => {
            (b.value = !0), p.parent && ks(p.parent.vnode) && p.parent.update();
          })
          .catch((g) => {
            m(g), (y.value = g);
          }),
        () => {
          if (b.value && u) return $i(u, p);
          if (y.value && r) return ge(r, { error: y.value });
          if (n && !_.value) return ge(n);
        }
      );
    },
  });
}
function $i(e, t) {
  const { ref: n, props: r, children: s, ce: o } = t.vnode,
    i = ge(e, r, s);
  return (i.ref = n), (i.ce = o), delete t.vnode.ce, i;
}
const ks = (e) => e.type.__isKeepAlive,
  Yg = {
    name: 'KeepAlive',
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const n = Nn(),
        r = n.ctx;
      if (!r.renderer)
        return () => {
          const _ = t.default && t.default();
          return _ && _.length === 1 ? _[0] : _;
        };
      const s = new Map(),
        o = new Set();
      let i = null;
      const a = n.suspense,
        {
          renderer: {
            p: l,
            m: c,
            um: u,
            o: { createElement: d },
          },
        } = r,
        h = d('div');
      (r.activate = (_, g, v, x, $) => {
        const k = _.component;
        c(_, g, v, 0, a),
          l(k.vnode, _, g, v, k, a, x, _.slotScopeIds, $),
          qe(() => {
            (k.isDeactivated = !1), k.a && br(k.a);
            const U = _.props && _.props.onVnodeMounted;
            U && st(U, k.parent, _);
          }, a);
      }),
        (r.deactivate = (_) => {
          const g = _.component;
          Co(g.m),
            Co(g.a),
            c(_, h, null, 1, a),
            qe(() => {
              g.da && br(g.da);
              const v = _.props && _.props.onVnodeUnmounted;
              v && st(v, g.parent, _), (g.isDeactivated = !0);
            }, a);
        });
      function f(_) {
        Ri(_), u(_, n, a, !0);
      }
      function p(_) {
        s.forEach((g, v) => {
          const x = ba(g.type);
          x && !_(x) && m(v);
        });
      }
      function m(_) {
        const g = s.get(_);
        g && (!i || !Rt(g, i)) ? f(g) : i && Ri(i), s.delete(_), o.delete(_);
      }
      xt(
        () => [e.include, e.exclude],
        ([_, g]) => {
          _ && p((v) => qr(_, v)), g && p((v) => !qr(g, v));
        },
        { flush: 'post', deep: !0 },
      );
      let b = null;
      const y = () => {
        b != null &&
          (So(n.subTree.type)
            ? qe(() => {
                s.set(b, Bs(n.subTree));
              }, n.subTree.suspense)
            : s.set(b, Bs(n.subTree)));
      };
      return (
        jr(y),
        Xf(y),
        Os(() => {
          s.forEach((_) => {
            const { subTree: g, suspense: v } = n,
              x = Bs(g);
            if (_.type === x.type && _.key === x.key) {
              Ri(x);
              const $ = x.component.da;
              $ && qe($, v);
              return;
            }
            f(_);
          });
        }),
        () => {
          if (((b = null), !t.default)) return (i = null);
          const _ = t.default(),
            g = _[0];
          if (_.length > 1) return (i = null), _;
          if (!nr(g) || (!(g.shapeFlag & 4) && !(g.shapeFlag & 128))) return (i = null), g;
          let v = Bs(g);
          if (v.type === He) return (i = null), v;
          const x = v.type,
            $ = ba(En(v) ? v.type.__asyncResolved || {} : x),
            { include: k, exclude: U, max: E } = e;
          if ((k && (!$ || !qr(k, $))) || (U && $ && qr(U, $)))
            return (v.shapeFlag &= -257), (i = v), g;
          const A = v.key == null ? x : v.key,
            T = s.get(A);
          return (
            v.el && ((v = an(v)), g.shapeFlag & 128 && (g.ssContent = v)),
            (b = A),
            T
              ? ((v.el = T.el),
                (v.component = T.component),
                v.transition && Rr(v, v.transition),
                (v.shapeFlag |= 512),
                o.delete(A),
                o.add(A))
              : (o.add(A), E && o.size > parseInt(E, 10) && m(o.values().next().value)),
            (v.shapeFlag |= 256),
            (i = v),
            So(g.type) ? g : v
          );
        }
      );
    },
  },
  Xg = Yg;
function qr(e, t) {
  return Z(e)
    ? e.some((n) => qr(n, t))
    : Re(e)
      ? e.split(',').includes(t)
      : Kp(e)
        ? ((e.lastIndex = 0), e.test(t))
        : !1;
}
function Gf(e, t) {
  Yf(e, 'a', t);
}
function Jf(e, t) {
  Yf(e, 'da', t);
}
function Yf(e, t, n = je) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((ti(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; ) ks(s.parent.vnode) && Zg(r, t, n, s), (s = s.parent);
  }
}
function Zg(e, t, n, r) {
  const s = ti(t, e, r, !0);
  Zf(() => {
    el(r[t], s);
  }, n);
}
function Ri(e) {
  (e.shapeFlag &= -257), (e.shapeFlag &= -513);
}
function Bs(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function ti(e, t, n = je, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          kn();
          const a = Ms(n),
            l = Lt(t, n, e, i);
          return a(), On(), l;
        });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const cn =
    (e) =>
    (t, n = je) => {
      (!kr || e === 'sp') && ti(e, (...r) => t(...r), n);
    },
  Qg = cn('bm'),
  jr = cn('m'),
  em = cn('bu'),
  Xf = cn('u'),
  Os = cn('bum'),
  Zf = cn('um'),
  tm = cn('sp'),
  nm = cn('rtg'),
  rm = cn('rtc');
function Qf(e, t = je) {
  ti('ec', e, t);
}
const fl = 'components',
  sm = 'directives';
function tr(e, t) {
  return dl(fl, e, !0, t) || e;
}
const ed = Symbol.for('v-ndc');
function om(e) {
  return Re(e) ? dl(fl, e, !1) || e : e || ed;
}
function VE(e) {
  return dl(sm, e);
}
function dl(e, t, n = !0, r = !1) {
  const s = Fe || je;
  if (s) {
    const o = s.type;
    if (e === fl) {
      const a = ba(o, !1);
      if (a && (a === t || a === yt(t) || a === Yo(yt(t)))) return o;
    }
    const i = Ql(s[e] || o[e], t) || Ql(s.appContext[e], t);
    return !i && r ? o : i;
  }
}
function Ql(e, t) {
  return e && (e[t] || e[yt(t)] || e[Yo(yt(t))]);
}
function qE(e, t, n, r) {
  let s;
  const o = n,
    i = Z(e);
  if (i || Re(e)) {
    const a = i && Zn(e);
    let l = !1;
    a && ((l = !Et(e)), (e = Qo(e))), (s = new Array(e.length));
    for (let c = 0, u = e.length; c < u; c++) s[c] = t(l ? Ye(e[c]) : e[c], c, void 0, o);
  } else if (typeof e == 'number') {
    s = new Array(e);
    for (let a = 0; a < e; a++) s[a] = t(a + 1, a, void 0, o);
  } else if (_e(e))
    if (e[Symbol.iterator]) s = Array.from(e, (a, l) => t(a, l, void 0, o));
    else {
      const a = Object.keys(e);
      s = new Array(a.length);
      for (let l = 0, c = a.length; l < c; l++) {
        const u = a[l];
        s[l] = t(e[u], u, l, o);
      }
    }
  else s = [];
  return s;
}
function wo(e, t, n = {}, r, s) {
  if (Fe.ce || (Fe.parent && En(Fe.parent) && Fe.parent.ce))
    return t !== 'default' && (n.name = t), we(), it(Ie, null, [ge('slot', n, r && r())], 64);
  let o = e[t];
  o && o._c && (o._d = !1), we();
  const i = o && td(o(n)),
    a = n.key || (i && i.key),
    l = it(
      Ie,
      { key: (a && !Nt(a) ? a : `_${t}`) + (!i && r ? '_fb' : '') },
      i || (r ? r() : []),
      i && e._ === 1 ? 64 : -2,
    );
  return l.scopeId && (l.slotScopeIds = [l.scopeId + '-s']), o && o._c && (o._d = !0), l;
}
function td(e) {
  return e.some((t) => (nr(t) ? !(t.type === He || (t.type === Ie && !td(t.children))) : !0))
    ? e
    : null;
}
const ha = (e) => (e ? ($d(e) ? ii(e) : ha(e.parent)) : null),
  Zr = Be(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ha(e.parent),
    $root: (e) => ha(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => rd(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        cl(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = Mn.bind(e.proxy)),
    $watch: (e) => Am.bind(e),
  }),
  Pi = (e, t) => e !== pe && !e.__isScriptSetup && ve(e, t),
  im = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0;
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: o,
        accessCache: i,
        type: a,
        appContext: l,
      } = e;
      let c;
      if (t[0] !== '$') {
        const f = i[t];
        if (f !== void 0)
          switch (f) {
            case 1:
              return r[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (Pi(r, t)) return (i[t] = 1), r[t];
          if (s !== pe && ve(s, t)) return (i[t] = 2), s[t];
          if ((c = e.propsOptions[0]) && ve(c, t)) return (i[t] = 3), o[t];
          if (n !== pe && ve(n, t)) return (i[t] = 4), n[t];
          pa && (i[t] = 0);
        }
      }
      const u = Zr[t];
      let d, h;
      if (u) return t === '$attrs' && Je(e.attrs, 'get', ''), u(e);
      if ((d = a.__cssModules) && (d = d[t])) return d;
      if (n !== pe && ve(n, t)) return (i[t] = 4), n[t];
      if (((h = l.config.globalProperties), ve(h, t))) return h[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: o } = e;
      return Pi(s, t)
        ? ((s[t] = n), !0)
        : r !== pe && ve(r, t)
          ? ((r[t] = n), !0)
          : ve(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((o[t] = n), !0);
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o } },
      i,
    ) {
      let a;
      return (
        !!n[i] ||
        (e !== pe && ve(e, i)) ||
        Pi(t, i) ||
        ((a = o[0]) && ve(a, i)) ||
        ve(r, i) ||
        ve(Zr, i) ||
        ve(s.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : ve(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function bo(e) {
  return Z(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
function KE(e, t) {
  return !e || !t ? e || t : Z(e) && Z(t) ? e.concat(t) : Be({}, bo(e), bo(t));
}
let pa = !0;
function am(e) {
  const t = rd(e),
    n = e.proxy,
    r = e.ctx;
  (pa = !1), t.beforeCreate && ec(t.beforeCreate, e, 'bc');
  const {
    data: s,
    computed: o,
    methods: i,
    watch: a,
    provide: l,
    inject: c,
    created: u,
    beforeMount: d,
    mounted: h,
    beforeUpdate: f,
    updated: p,
    activated: m,
    deactivated: b,
    beforeDestroy: y,
    beforeUnmount: _,
    destroyed: g,
    unmounted: v,
    render: x,
    renderTracked: $,
    renderTriggered: k,
    errorCaptured: U,
    serverPrefetch: E,
    expose: A,
    inheritAttrs: T,
    components: C,
    directives: R,
    filters: H,
  } = t;
  if ((c && lm(c, r, null), i))
    for (const B in i) {
      const F = i[B];
      ee(F) && (r[B] = F.bind(n));
    }
  if (s) {
    const B = s.call(n, n);
    _e(B) && (e.data = Jt(B));
  }
  if (((pa = !0), o))
    for (const B in o) {
      const F = o[B],
        ne = ee(F) ? F.bind(n, n) : ee(F.get) ? F.get.bind(n, n) : Ut,
        me = !ee(F) && ee(F.set) ? F.set.bind(n) : Ut,
        le = ae({ get: ne, set: me });
      Object.defineProperty(r, B, {
        enumerable: !0,
        configurable: !0,
        get: () => le.value,
        set: (ie) => (le.value = ie),
      });
    }
  if (a) for (const B in a) nd(a[B], r, n, B);
  if (l) {
    const B = ee(l) ? l.call(n) : l;
    Reflect.ownKeys(B).forEach((F) => {
      Cr(F, B[F]);
    });
  }
  u && ec(u, e, 'c');
  function D(B, F) {
    Z(F) ? F.forEach((ne) => B(ne.bind(n))) : F && B(F.bind(n));
  }
  if (
    (D(Qg, d),
    D(jr, h),
    D(em, f),
    D(Xf, p),
    D(Gf, m),
    D(Jf, b),
    D(Qf, U),
    D(rm, $),
    D(nm, k),
    D(Os, _),
    D(Zf, v),
    D(tm, E),
    Z(A))
  )
    if (A.length) {
      const B = e.exposed || (e.exposed = {});
      A.forEach((F) => {
        Object.defineProperty(B, F, { get: () => n[F], set: (ne) => (n[F] = ne) });
      });
    } else e.exposed || (e.exposed = {});
  x && e.render === Ut && (e.render = x),
    T != null && (e.inheritAttrs = T),
    C && (e.components = C),
    R && (e.directives = R),
    E && ul(e);
}
function lm(e, t, n = Ut) {
  Z(e) && (e = ga(e));
  for (const r in e) {
    const s = e[r];
    let o;
    _e(s)
      ? 'default' in s
        ? (o = lt(s.from || r, s.default, !0))
        : (o = lt(s.from || r))
      : (o = lt(s)),
      De(o)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[r] = o);
  }
}
function ec(e, t, n) {
  Lt(Z(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function nd(e, t, n, r) {
  let s = r.includes('.') ? wd(n, r) : () => n[r];
  if (Re(e)) {
    const o = t[e];
    ee(o) && xt(s, o);
  } else if (ee(e)) xt(s, e.bind(n));
  else if (_e(e))
    if (Z(e)) e.forEach((o) => nd(o, t, n, r));
    else {
      const o = ee(e.handler) ? e.handler.bind(n) : t[e.handler];
      ee(o) && xt(s, o, e);
    }
}
function rd(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    a = o.get(t);
  let l;
  return (
    a
      ? (l = a)
      : !s.length && !n && !r
        ? (l = t)
        : ((l = {}), s.length && s.forEach((c) => _o(l, c, i, !0)), _o(l, t, i)),
    _e(t) && o.set(t, l),
    l
  );
}
function _o(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && _o(e, o, n, !0), s && s.forEach((i) => _o(e, i, n, !0));
  for (const i in t)
    if (!(r && i === 'expose')) {
      const a = cm[i] || (n && n[i]);
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const cm = {
  data: tc,
  props: nc,
  emits: nc,
  methods: Kr,
  computed: Kr,
  beforeCreate: Xe,
  created: Xe,
  beforeMount: Xe,
  mounted: Xe,
  beforeUpdate: Xe,
  updated: Xe,
  beforeDestroy: Xe,
  beforeUnmount: Xe,
  destroyed: Xe,
  unmounted: Xe,
  activated: Xe,
  deactivated: Xe,
  errorCaptured: Xe,
  serverPrefetch: Xe,
  components: Kr,
  directives: Kr,
  watch: fm,
  provide: tc,
  inject: um,
};
function tc(e, t) {
  return t
    ? e
      ? function () {
          return Be(ee(e) ? e.call(this, this) : e, ee(t) ? t.call(this, this) : t);
        }
      : t
    : e;
}
function um(e, t) {
  return Kr(ga(e), ga(t));
}
function ga(e) {
  if (Z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Xe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Kr(e, t) {
  return e ? Be(Object.create(null), e, t) : t;
}
function nc(e, t) {
  return e
    ? Z(e) && Z(t)
      ? [...new Set([...e, ...t])]
      : Be(Object.create(null), bo(e), bo(t ?? {}))
    : t;
}
function fm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Be(Object.create(null), e);
  for (const r in t) n[r] = Xe(e[r], t[r]);
  return n;
}
function sd() {
  return {
    app: null,
    config: {
      isNativeTag: Vp,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let dm = 0;
function hm(e, t) {
  return function (r, s = null) {
    ee(r) || (r = Be({}, r)), s != null && !_e(s) && (s = null);
    const o = sd(),
      i = new WeakSet(),
      a = [];
    let l = !1;
    const c = (o.app = {
      _uid: dm++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: Pd,
      get config() {
        return o.config;
      },
      set config(u) {},
      use(u, ...d) {
        return (
          i.has(u) ||
            (u && ee(u.install) ? (i.add(u), u.install(c, ...d)) : ee(u) && (i.add(u), u(c, ...d))),
          c
        );
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), c;
      },
      component(u, d) {
        return d ? ((o.components[u] = d), c) : o.components[u];
      },
      directive(u, d) {
        return d ? ((o.directives[u] = d), c) : o.directives[u];
      },
      mount(u, d, h) {
        if (!l) {
          const f = c._ceVNode || ge(r, s);
          return (
            (f.appContext = o),
            h === !0 ? (h = 'svg') : h === !1 && (h = void 0),
            d && t ? t(f, u) : e(f, u, h),
            (l = !0),
            (c._container = u),
            (u.__vue_app__ = c),
            ii(f.component)
          );
        }
      },
      onUnmount(u) {
        a.push(u);
      },
      unmount() {
        l && (Lt(a, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, d) {
        return (o.provides[u] = d), c;
      },
      runWithContext(u) {
        const d = Qn;
        Qn = c;
        try {
          return u();
        } finally {
          Qn = d;
        }
      },
    });
    return c;
  };
}
let Qn = null;
function Cr(e, t) {
  if (je) {
    let n = je.provides;
    const r = je.parent && je.parent.provides;
    r === n && (n = je.provides = Object.create(r)), (n[e] = t);
  }
}
function lt(e, t, n = !1) {
  const r = je || Fe;
  if (r || Qn) {
    const s = Qn
      ? Qn._context.provides
      : r
        ? r.parent == null
          ? r.vnode.appContext && r.vnode.appContext.provides
          : r.parent.provides
        : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && ee(t) ? t.call(r && r.proxy) : t;
  }
}
function ni() {
  return !!(je || Fe || Qn);
}
const od = {},
  id = () => Object.create(od),
  ad = (e) => Object.getPrototypeOf(e) === od;
function pm(e, t, n, r = !1) {
  const s = {},
    o = id();
  (e.propsDefaults = Object.create(null)), ld(e, t, s, o);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  n ? (e.props = r ? s : on(s)) : e.type.props ? (e.props = s) : (e.props = o), (e.attrs = o);
}
function gm(e, t, n, r) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    a = de(s),
    [l] = e.propsOptions;
  let c = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let h = u[d];
        if (si(e.emitsOptions, h)) continue;
        const f = t[h];
        if (l)
          if (ve(o, h)) f !== o[h] && ((o[h] = f), (c = !0));
          else {
            const p = yt(h);
            s[p] = ma(l, a, p, f, e, !1);
          }
        else f !== o[h] && ((o[h] = f), (c = !0));
      }
    }
  } else {
    ld(e, t, s, o) && (c = !0);
    let u;
    for (const d in a)
      (!t || (!ve(t, d) && ((u = ln(d)) === d || !ve(t, u)))) &&
        (l
          ? n && (n[d] !== void 0 || n[u] !== void 0) && (s[d] = ma(l, a, d, void 0, e, !0))
          : delete s[d]);
    if (o !== a) for (const d in o) (!t || !ve(t, d)) && (delete o[d], (c = !0));
  }
  c && rn(e.attrs, 'set', '');
}
function ld(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1,
    a;
  if (t)
    for (let l in t) {
      if (wr(l)) continue;
      const c = t[l];
      let u;
      s && ve(s, (u = yt(l)))
        ? !o || !o.includes(u)
          ? (n[u] = c)
          : ((a || (a = {}))[u] = c)
        : si(e.emitsOptions, l) || ((!(l in r) || c !== r[l]) && ((r[l] = c), (i = !0)));
    }
  if (o) {
    const l = de(n),
      c = a || pe;
    for (let u = 0; u < o.length; u++) {
      const d = o[u];
      n[d] = ma(s, l, d, c[d], e, !ve(c, d));
    }
  }
  return i;
}
function ma(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const a = ve(i, 'default');
    if (a && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && ee(l)) {
        const { propsDefaults: c } = s;
        if (n in c) r = c[n];
        else {
          const u = Ms(s);
          (r = c[n] = l.call(null, t)), u();
        }
      } else r = l;
      s.ce && s.ce._setProp(n, r);
    }
    i[0] && (o && !a ? (r = !1) : i[1] && (r === '' || r === ln(n)) && (r = !0));
  }
  return r;
}
const mm = new WeakMap();
function cd(e, t, n = !1) {
  const r = n ? mm : t.propsCache,
    s = r.get(e);
  if (s) return s;
  const o = e.props,
    i = {},
    a = [];
  let l = !1;
  if (!ee(e)) {
    const u = (d) => {
      l = !0;
      const [h, f] = cd(d, t, !0);
      Be(i, h), f && a.push(...f);
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!o && !l) return _e(e) && r.set(e, yr), yr;
  if (Z(o))
    for (let u = 0; u < o.length; u++) {
      const d = yt(o[u]);
      rc(d) && (i[d] = pe);
    }
  else if (o)
    for (const u in o) {
      const d = yt(u);
      if (rc(d)) {
        const h = o[u],
          f = (i[d] = Z(h) || ee(h) ? { type: h } : Be({}, h)),
          p = f.type;
        let m = !1,
          b = !0;
        if (Z(p))
          for (let y = 0; y < p.length; ++y) {
            const _ = p[y],
              g = ee(_) && _.name;
            if (g === 'Boolean') {
              m = !0;
              break;
            } else g === 'String' && (b = !1);
          }
        else m = ee(p) && p.name === 'Boolean';
        (f[0] = m), (f[1] = b), (m || ve(f, 'default')) && a.push(d);
      }
    }
  const c = [i, a];
  return _e(e) && r.set(e, c), c;
}
function rc(e) {
  return e[0] !== '$' && !wr(e);
}
const ud = (e) => e[0] === '_' || e === '$stable',
  hl = (e) => (Z(e) ? e.map(pt) : [pt(e)]),
  ym = (e, t, n) => {
    if (t._n) return t;
    const r = Wt((...s) => hl(t(...s)), n);
    return (r._c = !1), r;
  },
  fd = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (ud(s)) continue;
      const o = e[s];
      if (ee(o)) t[s] = ym(s, o, r);
      else if (o != null) {
        const i = hl(o);
        t[s] = () => i;
      }
    }
  },
  dd = (e, t) => {
    const n = hl(t);
    e.slots.default = () => n;
  },
  hd = (e, t, n) => {
    for (const r in t) (n || r !== '_') && (e[r] = t[r]);
  },
  vm = (e, t, n) => {
    const r = (e.slots = id());
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (hd(r, t, n), n && pf(r, '_', s, !0)) : fd(t, r);
    } else t && dd(e, t);
  },
  wm = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let o = !0,
      i = pe;
    if (r.shapeFlag & 32) {
      const a = t._;
      a ? (n && a === 1 ? (o = !1) : hd(s, t, n)) : ((o = !t.$stable), fd(t, s)), (i = t);
    } else t && (dd(e, t), (i = { default: 1 }));
    if (o) for (const a in s) !ud(a) && i[a] == null && delete s[a];
  },
  qe = Ed;
function bm(e) {
  return pd(e);
}
function _m(e) {
  return pd(e, Kg);
}
function pd(e, t) {
  const n = Xo();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: s,
      patchProp: o,
      createElement: i,
      createText: a,
      createComment: l,
      setText: c,
      setElementText: u,
      parentNode: d,
      nextSibling: h,
      setScopeId: f = Ut,
      insertStaticContent: p,
    } = e,
    m = (w, S, P, N = null, M = null, L = null, q = void 0, z = null, W = !!S.dynamicChildren) => {
      if (w === S) return;
      w && !Rt(w, S) && ((N = O(w)), ie(w, M, L, !0), (w = null)),
        S.patchFlag === -2 && ((W = !1), (S.dynamicChildren = null));
      const { type: j, ref: Q, shapeFlag: J } = S;
      switch (j) {
        case er:
          b(w, S, P, N);
          break;
        case He:
          y(w, S, P, N);
          break;
        case to:
          w == null && _(S, P, N, q);
          break;
        case Ie:
          C(w, S, P, N, M, L, q, z, W);
          break;
        default:
          J & 1
            ? x(w, S, P, N, M, L, q, z, W)
            : J & 6
              ? R(w, S, P, N, M, L, q, z, W)
              : (J & 64 || J & 128) && j.process(w, S, P, N, M, L, q, z, W, Y);
      }
      Q != null && M && hs(Q, w && w.ref, L, S || w, !S);
    },
    b = (w, S, P, N) => {
      if (w == null) r((S.el = a(S.children)), P, N);
      else {
        const M = (S.el = w.el);
        S.children !== w.children && c(M, S.children);
      }
    },
    y = (w, S, P, N) => {
      w == null ? r((S.el = l(S.children || '')), P, N) : (S.el = w.el);
    },
    _ = (w, S, P, N) => {
      [w.el, w.anchor] = p(w.children, S, P, N, w.el, w.anchor);
    },
    g = ({ el: w, anchor: S }, P, N) => {
      let M;
      for (; w && w !== S; ) (M = h(w)), r(w, P, N), (w = M);
      r(S, P, N);
    },
    v = ({ el: w, anchor: S }) => {
      let P;
      for (; w && w !== S; ) (P = h(w)), s(w), (w = P);
      s(S);
    },
    x = (w, S, P, N, M, L, q, z, W) => {
      S.type === 'svg' ? (q = 'svg') : S.type === 'math' && (q = 'mathml'),
        w == null ? $(S, P, N, M, L, q, z, W) : E(w, S, M, L, q, z, W);
    },
    $ = (w, S, P, N, M, L, q, z) => {
      let W, j;
      const { props: Q, shapeFlag: J, transition: X, dirs: te } = w;
      if (
        ((W = w.el = i(w.type, L, Q && Q.is, Q)),
        J & 8 ? u(W, w.children) : J & 16 && U(w.children, W, null, N, M, ki(w, L), q, z),
        te && Dt(w, null, N, 'created'),
        k(W, w, w.scopeId, q, N),
        Q)
      ) {
        for (const Ee in Q) Ee !== 'value' && !wr(Ee) && o(W, Ee, null, Q[Ee], L, N);
        'value' in Q && o(W, 'value', null, Q.value, L), (j = Q.onVnodeBeforeMount) && st(j, N, w);
      }
      te && Dt(w, null, N, 'beforeMount');
      const se = gd(M, X);
      se && X.beforeEnter(W),
        r(W, S, P),
        ((j = Q && Q.onVnodeMounted) || se || te) &&
          qe(() => {
            j && st(j, N, w), se && X.enter(W), te && Dt(w, null, N, 'mounted');
          }, M);
    },
    k = (w, S, P, N, M) => {
      if ((P && f(w, P), N)) for (let L = 0; L < N.length; L++) f(w, N[L]);
      if (M) {
        let L = M.subTree;
        if (S === L || (So(L.type) && (L.ssContent === S || L.ssFallback === S))) {
          const q = M.vnode;
          k(w, q, q.scopeId, q.slotScopeIds, M.parent);
        }
      }
    },
    U = (w, S, P, N, M, L, q, z, W = 0) => {
      for (let j = W; j < w.length; j++) {
        const Q = (w[j] = z ? vn(w[j]) : pt(w[j]));
        m(null, Q, S, P, N, M, L, q, z);
      }
    },
    E = (w, S, P, N, M, L, q) => {
      const z = (S.el = w.el);
      let { patchFlag: W, dynamicChildren: j, dirs: Q } = S;
      W |= w.patchFlag & 16;
      const J = w.props || pe,
        X = S.props || pe;
      let te;
      if (
        (P && jn(P, !1),
        (te = X.onVnodeBeforeUpdate) && st(te, P, S, w),
        Q && Dt(S, w, P, 'beforeUpdate'),
        P && jn(P, !0),
        ((J.innerHTML && X.innerHTML == null) || (J.textContent && X.textContent == null)) &&
          u(z, ''),
        j
          ? A(w.dynamicChildren, j, z, P, N, ki(S, M), L)
          : q || F(w, S, z, null, P, N, ki(S, M), L, !1),
        W > 0)
      ) {
        if (W & 16) T(z, J, X, P, M);
        else if (
          (W & 2 && J.class !== X.class && o(z, 'class', null, X.class, M),
          W & 4 && o(z, 'style', J.style, X.style, M),
          W & 8)
        ) {
          const se = S.dynamicProps;
          for (let Ee = 0; Ee < se.length; Ee++) {
            const be = se[Ee],
              ct = J[be],
              Ge = X[be];
            (Ge !== ct || be === 'value') && o(z, be, ct, Ge, M, P);
          }
        }
        W & 1 && w.children !== S.children && u(z, S.children);
      } else !q && j == null && T(z, J, X, P, M);
      ((te = X.onVnodeUpdated) || Q) &&
        qe(() => {
          te && st(te, P, S, w), Q && Dt(S, w, P, 'updated');
        }, N);
    },
    A = (w, S, P, N, M, L, q) => {
      for (let z = 0; z < S.length; z++) {
        const W = w[z],
          j = S[z],
          Q = W.el && (W.type === Ie || !Rt(W, j) || W.shapeFlag & 70) ? d(W.el) : P;
        m(W, j, Q, null, N, M, L, q, !0);
      }
    },
    T = (w, S, P, N, M) => {
      if (S !== P) {
        if (S !== pe) for (const L in S) !wr(L) && !(L in P) && o(w, L, S[L], null, M, N);
        for (const L in P) {
          if (wr(L)) continue;
          const q = P[L],
            z = S[L];
          q !== z && L !== 'value' && o(w, L, z, q, M, N);
        }
        'value' in P && o(w, 'value', S.value, P.value, M);
      }
    },
    C = (w, S, P, N, M, L, q, z, W) => {
      const j = (S.el = w ? w.el : a('')),
        Q = (S.anchor = w ? w.anchor : a(''));
      let { patchFlag: J, dynamicChildren: X, slotScopeIds: te } = S;
      te && (z = z ? z.concat(te) : te),
        w == null
          ? (r(j, P, N), r(Q, P, N), U(S.children || [], P, Q, M, L, q, z, W))
          : J > 0 && J & 64 && X && w.dynamicChildren
            ? (A(w.dynamicChildren, X, P, M, L, q, z),
              (S.key != null || (M && S === M.subTree)) && md(w, S, !0))
            : F(w, S, P, Q, M, L, q, z, W);
    },
    R = (w, S, P, N, M, L, q, z, W) => {
      (S.slotScopeIds = z),
        w == null
          ? S.shapeFlag & 512
            ? M.ctx.activate(S, P, N, q, W)
            : H(S, P, N, M, L, q, W)
          : K(w, S, W);
    },
    H = (w, S, P, N, M, L, q) => {
      const z = (w.component = Bm(w, N, M));
      if ((ks(w) && (z.ctx.renderer = Y), Um(z, !1, q), z.asyncDep)) {
        if ((M && M.registerDep(z, D, q), !w.el)) {
          const W = (z.subTree = ge(He));
          y(null, W, S, P);
        }
      } else D(z, w, S, P, M, L, q);
    },
    K = (w, S, P) => {
      const N = (S.component = w.component);
      if (km(w, S, P))
        if (N.asyncDep && !N.asyncResolved) {
          B(N, S, P);
          return;
        } else (N.next = S), N.update();
      else (S.el = w.el), (N.vnode = S);
    },
    D = (w, S, P, N, M, L, q) => {
      const z = () => {
        if (w.isMounted) {
          let { next: J, bu: X, u: te, parent: se, vnode: Ee } = w;
          {
            const ut = yd(w);
            if (ut) {
              J && ((J.el = Ee.el), B(w, J, q)),
                ut.asyncDep.then(() => {
                  w.isUnmounted || z();
                });
              return;
            }
          }
          let be = J,
            ct;
          jn(w, !1),
            J ? ((J.el = Ee.el), B(w, J, q)) : (J = Ee),
            X && br(X),
            (ct = J.props && J.props.onVnodeBeforeUpdate) && st(ct, se, J, Ee),
            jn(w, !0);
          const Ge = Oi(w),
            At = w.subTree;
          (w.subTree = Ge),
            m(At, Ge, d(At.el), O(At), w, M, L),
            (J.el = Ge.el),
            be === null && oi(w, Ge.el),
            te && qe(te, M),
            (ct = J.props && J.props.onVnodeUpdated) && qe(() => st(ct, se, J, Ee), M);
        } else {
          let J;
          const { el: X, props: te } = S,
            { bm: se, m: Ee, parent: be, root: ct, type: Ge } = w,
            At = En(S);
          if (
            (jn(w, !1),
            se && br(se),
            !At && (J = te && te.onVnodeBeforeMount) && st(J, be, S),
            jn(w, !0),
            X && Se)
          ) {
            const ut = () => {
              (w.subTree = Oi(w)), Se(X, w.subTree, w, M, null);
            };
            At && Ge.__asyncHydrate ? Ge.__asyncHydrate(X, w, ut) : ut();
          } else {
            ct.ce && ct.ce._injectChildStyle(Ge);
            const ut = (w.subTree = Oi(w));
            m(null, ut, P, N, w, M, L), (S.el = ut.el);
          }
          if ((Ee && qe(Ee, M), !At && (J = te && te.onVnodeMounted))) {
            const ut = S;
            qe(() => st(J, be, ut), M);
          }
          (S.shapeFlag & 256 || (be && En(be.vnode) && be.vnode.shapeFlag & 256)) &&
            w.a &&
            qe(w.a, M),
            (w.isMounted = !0),
            (S = P = N = null);
        }
      };
      w.scope.on();
      const W = (w.effect = new _f(z));
      w.scope.off();
      const j = (w.update = W.run.bind(W)),
        Q = (w.job = W.runIfDirty.bind(W));
      (Q.i = w), (Q.id = w.uid), (W.scheduler = () => cl(Q)), jn(w, !0), j();
    },
    B = (w, S, P) => {
      S.component = w;
      const N = w.vnode.props;
      (w.vnode = S), (w.next = null), gm(w, S.props, N, P), wm(w, S.children, P), kn(), Gl(w), On();
    },
    F = (w, S, P, N, M, L, q, z, W = !1) => {
      const j = w && w.children,
        Q = w ? w.shapeFlag : 0,
        J = S.children,
        { patchFlag: X, shapeFlag: te } = S;
      if (X > 0) {
        if (X & 128) {
          me(j, J, P, N, M, L, q, z, W);
          return;
        } else if (X & 256) {
          ne(j, J, P, N, M, L, q, z, W);
          return;
        }
      }
      te & 8
        ? (Q & 16 && ce(j, M, L), J !== j && u(P, J))
        : Q & 16
          ? te & 16
            ? me(j, J, P, N, M, L, q, z, W)
            : ce(j, M, L, !0)
          : (Q & 8 && u(P, ''), te & 16 && U(J, P, N, M, L, q, z, W));
    },
    ne = (w, S, P, N, M, L, q, z, W) => {
      (w = w || yr), (S = S || yr);
      const j = w.length,
        Q = S.length,
        J = Math.min(j, Q);
      let X;
      for (X = 0; X < J; X++) {
        const te = (S[X] = W ? vn(S[X]) : pt(S[X]));
        m(w[X], te, P, null, M, L, q, z, W);
      }
      j > Q ? ce(w, M, L, !0, !1, J) : U(S, P, N, M, L, q, z, W, J);
    },
    me = (w, S, P, N, M, L, q, z, W) => {
      let j = 0;
      const Q = S.length;
      let J = w.length - 1,
        X = Q - 1;
      for (; j <= J && j <= X; ) {
        const te = w[j],
          se = (S[j] = W ? vn(S[j]) : pt(S[j]));
        if (Rt(te, se)) m(te, se, P, null, M, L, q, z, W);
        else break;
        j++;
      }
      for (; j <= J && j <= X; ) {
        const te = w[J],
          se = (S[X] = W ? vn(S[X]) : pt(S[X]));
        if (Rt(te, se)) m(te, se, P, null, M, L, q, z, W);
        else break;
        J--, X--;
      }
      if (j > J) {
        if (j <= X) {
          const te = X + 1,
            se = te < Q ? S[te].el : N;
          for (; j <= X; ) m(null, (S[j] = W ? vn(S[j]) : pt(S[j])), P, se, M, L, q, z, W), j++;
        }
      } else if (j > X) for (; j <= J; ) ie(w[j], M, L, !0), j++;
      else {
        const te = j,
          se = j,
          Ee = new Map();
        for (j = se; j <= X; j++) {
          const ft = (S[j] = W ? vn(S[j]) : pt(S[j]));
          ft.key != null && Ee.set(ft.key, j);
        }
        let be,
          ct = 0;
        const Ge = X - se + 1;
        let At = !1,
          ut = 0;
        const Dr = new Array(Ge);
        for (j = 0; j < Ge; j++) Dr[j] = 0;
        for (j = te; j <= J; j++) {
          const ft = w[j];
          if (ct >= Ge) {
            ie(ft, M, L, !0);
            continue;
          }
          let jt;
          if (ft.key != null) jt = Ee.get(ft.key);
          else
            for (be = se; be <= X; be++)
              if (Dr[be - se] === 0 && Rt(ft, S[be])) {
                jt = be;
                break;
              }
          jt === void 0
            ? ie(ft, M, L, !0)
            : ((Dr[jt - se] = j + 1),
              jt >= ut ? (ut = jt) : (At = !0),
              m(ft, S[jt], P, null, M, L, q, z, W),
              ct++);
        }
        const Bl = At ? Cm(Dr) : yr;
        for (be = Bl.length - 1, j = Ge - 1; j >= 0; j--) {
          const ft = se + j,
            jt = S[ft],
            Ul = ft + 1 < Q ? S[ft + 1].el : N;
          Dr[j] === 0
            ? m(null, jt, P, Ul, M, L, q, z, W)
            : At && (be < 0 || j !== Bl[be] ? le(jt, P, Ul, 2) : be--);
        }
      }
    },
    le = (w, S, P, N, M = null) => {
      const { el: L, type: q, transition: z, children: W, shapeFlag: j } = w;
      if (j & 6) {
        le(w.component.subTree, S, P, N);
        return;
      }
      if (j & 128) {
        w.suspense.move(S, P, N);
        return;
      }
      if (j & 64) {
        q.move(w, S, P, Y);
        return;
      }
      if (q === Ie) {
        r(L, S, P);
        for (let J = 0; J < W.length; J++) le(W[J], S, P, N);
        r(w.anchor, S, P);
        return;
      }
      if (q === to) {
        g(w, S, P);
        return;
      }
      if (N !== 2 && j & 1 && z)
        if (N === 0) z.beforeEnter(L), r(L, S, P), qe(() => z.enter(L), M);
        else {
          const { leave: J, delayLeave: X, afterLeave: te } = z,
            se = () => r(L, S, P),
            Ee = () => {
              J(L, () => {
                se(), te && te();
              });
            };
          X ? X(L, se, Ee) : Ee();
        }
      else r(L, S, P);
    },
    ie = (w, S, P, N = !1, M = !1) => {
      const {
        type: L,
        props: q,
        ref: z,
        children: W,
        dynamicChildren: j,
        shapeFlag: Q,
        patchFlag: J,
        dirs: X,
        cacheIndex: te,
      } = w;
      if (
        (J === -2 && (M = !1),
        z != null && hs(z, null, P, w, !0),
        te != null && (S.renderCache[te] = void 0),
        Q & 256)
      ) {
        S.ctx.deactivate(w);
        return;
      }
      const se = Q & 1 && X,
        Ee = !En(w);
      let be;
      if ((Ee && (be = q && q.onVnodeBeforeUnmount) && st(be, S, w), Q & 6)) Ue(w.component, P, N);
      else {
        if (Q & 128) {
          w.suspense.unmount(P, N);
          return;
        }
        se && Dt(w, null, S, 'beforeUnmount'),
          Q & 64
            ? w.type.remove(w, S, P, Y, N)
            : j && !j.hasOnce && (L !== Ie || (J > 0 && J & 64))
              ? ce(j, S, P, !1, !0)
              : ((L === Ie && J & 384) || (!M && Q & 16)) && ce(W, S, P),
          N && Me(w);
      }
      ((Ee && (be = q && q.onVnodeUnmounted)) || se) &&
        qe(() => {
          be && st(be, S, w), se && Dt(w, null, S, 'unmounted');
        }, P);
    },
    Me = (w) => {
      const { type: S, el: P, anchor: N, transition: M } = w;
      if (S === Ie) {
        Ce(P, N);
        return;
      }
      if (S === to) {
        v(w);
        return;
      }
      const L = () => {
        s(P), M && !M.persisted && M.afterLeave && M.afterLeave();
      };
      if (w.shapeFlag & 1 && M && !M.persisted) {
        const { leave: q, delayLeave: z } = M,
          W = () => q(P, L);
        z ? z(w.el, L, W) : W();
      } else L();
    },
    Ce = (w, S) => {
      let P;
      for (; w !== S; ) (P = h(w)), s(w), (w = P);
      s(S);
    },
    Ue = (w, S, P) => {
      const { bum: N, scope: M, job: L, subTree: q, um: z, m: W, a: j } = w;
      Co(W),
        Co(j),
        N && br(N),
        M.stop(),
        L && ((L.flags |= 8), ie(q, w, S, P)),
        z && qe(z, S),
        qe(() => {
          w.isUnmounted = !0;
        }, S),
        S &&
          S.pendingBranch &&
          !S.isUnmounted &&
          w.asyncDep &&
          !w.asyncResolved &&
          w.suspenseId === S.pendingId &&
          (S.deps--, S.deps === 0 && S.resolve());
    },
    ce = (w, S, P, N = !1, M = !1, L = 0) => {
      for (let q = L; q < w.length; q++) ie(w[q], S, P, N, M);
    },
    O = (w) => {
      if (w.shapeFlag & 6) return O(w.component.subTree);
      if (w.shapeFlag & 128) return w.suspense.next();
      const S = h(w.anchor || w.el),
        P = S && S[Bg];
      return P ? h(P) : S;
    };
  let G = !1;
  const V = (w, S, P) => {
      w == null
        ? S._vnode && ie(S._vnode, null, null, !0)
        : m(S._vnode || null, w, S, null, null, null, P),
        (S._vnode = w),
        G || ((G = !0), Gl(), yo(), (G = !1));
    },
    Y = { p: m, um: ie, m: le, r: Me, mt: H, mc: U, pc: F, pbc: A, n: O, o: e };
  let he, Se;
  return t && ([he, Se] = t(Y)), { render: V, hydrate: he, createApp: hm(V, he) };
}
function ki({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n;
}
function jn({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function gd(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function md(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (Z(r) && Z(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let a = s[o];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) && ((a = s[o] = vn(s[o])), (a.el = i.el)),
        !n && a.patchFlag !== -2 && md(i, a)),
        a.type === er && (a.el = i.el);
    }
}
function Cm(e) {
  const t = e.slice(),
    n = [0];
  let r, s, o, i, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const c = e[r];
    if (c !== 0) {
      if (((s = n[n.length - 1]), e[s] < c)) {
        (t[r] = s), n.push(r);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        (a = (o + i) >> 1), e[n[a]] < c ? (o = a + 1) : (i = a);
      c < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), (n[o] = r));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
function yd(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : yd(t);
}
function Co(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const Sm = Symbol.for('v-scx'),
  Em = () => lt(Sm);
function vd(e, t) {
  return ri(e, null, t);
}
function xm(e, t) {
  return ri(e, null, { flush: 'sync' });
}
function xt(e, t, n) {
  return ri(e, t, n);
}
function ri(e, t, n = pe) {
  const { immediate: r, deep: s, flush: o, once: i } = n,
    a = Be({}, n),
    l = (t && r) || (!t && o !== 'post');
  let c;
  if (kr) {
    if (o === 'sync') {
      const f = Em();
      c = f.__watcherHandles || (f.__watcherHandles = []);
    } else if (!l) {
      const f = () => {};
      return (f.stop = Ut), (f.resume = Ut), (f.pause = Ut), f;
    }
  }
  const u = je;
  a.call = (f, p, m) => Lt(f, u, p, m);
  let d = !1;
  o === 'post'
    ? (a.scheduler = (f) => {
        qe(f, u && u.suspense);
      })
    : o !== 'sync' &&
      ((d = !0),
      (a.scheduler = (f, p) => {
        p ? f() : cl(f);
      })),
    (a.augmentJob = (f) => {
      t && (f.flags |= 4), d && ((f.flags |= 2), u && ((f.id = u.uid), (f.i = u)));
    });
  const h = Lg(e, t, a);
  return kr && (c ? c.push(h) : l && h()), h;
}
function Am(e, t, n) {
  const r = this.proxy,
    s = Re(e) ? (e.includes('.') ? wd(r, e) : () => r[e]) : e.bind(r, r);
  let o;
  ee(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = Ms(this),
    a = ri(s, o.bind(r), n);
  return i(), a;
}
function wd(e, t) {
  const n = t.split('.');
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
function GE(e, t, n = pe) {
  const r = Nn(),
    s = yt(t),
    o = ln(t),
    i = bd(e, s),
    a = Hf((l, c) => {
      let u,
        d = pe,
        h;
      return (
        xm(() => {
          const f = e[s];
          ot(u, f) && ((u = f), c());
        }),
        {
          get() {
            return l(), n.get ? n.get(u) : u;
          },
          set(f) {
            const p = n.set ? n.set(f) : f;
            if (!ot(p, u) && !(d !== pe && ot(f, d))) return;
            const m = r.vnode.props;
            (m &&
              (t in m || s in m || o in m) &&
              (`onUpdate:${t}` in m || `onUpdate:${s}` in m || `onUpdate:${o}` in m)) ||
              ((u = f), c()),
              r.emit(`update:${t}`, p),
              ot(f, p) && ot(f, d) && !ot(p, h) && c(),
              (d = f),
              (h = p);
          },
        }
      );
    });
  return (
    (a[Symbol.iterator] = () => {
      let l = 0;
      return {
        next() {
          return l < 2 ? { value: l++ ? i || pe : a, done: !1 } : { done: !0 };
        },
      };
    }),
    a
  );
}
const bd = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${yt(t)}Modifiers`] || e[`${ln(t)}Modifiers`];
function Tm(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || pe;
  let s = n;
  const o = t.startsWith('update:'),
    i = o && bd(r, t.slice(7));
  i && (i.trim && (s = n.map((u) => (Re(u) ? u.trim() : u))), i.number && (s = n.map(ia)));
  let a,
    l = r[(a = Ci(t))] || r[(a = Ci(yt(t)))];
  !l && o && (l = r[(a = Ci(ln(t)))]), l && Lt(l, e, 6, s);
  const c = r[a + 'Once'];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), Lt(c, e, 6, s);
  }
}
function _d(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const o = e.emits;
  let i = {},
    a = !1;
  if (!ee(e)) {
    const l = (c) => {
      const u = _d(c, t, !0);
      u && ((a = !0), Be(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !o && !a
    ? (_e(e) && r.set(e, null), null)
    : (Z(o) ? o.forEach((l) => (i[l] = null)) : Be(i, o), _e(e) && r.set(e, i), i);
}
function si(e, t) {
  return !e || !Rs(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      ve(e, t[0].toLowerCase() + t.slice(1)) || ve(e, ln(t)) || ve(e, t));
}
function Oi(e) {
  const {
      type: t,
      vnode: n,
      proxy: r,
      withProxy: s,
      propsOptions: [o],
      slots: i,
      attrs: a,
      emit: l,
      render: c,
      renderCache: u,
      props: d,
      data: h,
      setupState: f,
      ctx: p,
      inheritAttrs: m,
    } = e,
    b = vo(e);
  let y, _;
  try {
    if (n.shapeFlag & 4) {
      const v = s || r,
        x = v;
      (y = pt(c.call(x, v, u, d, f, h, p))), (_ = a);
    } else {
      const v = t;
      (y = pt(v.length > 1 ? v(d, { attrs: a, slots: i, emit: l }) : v(d, null))),
        (_ = t.props ? a : Rm(a));
    }
  } catch (v) {
    (Qr.length = 0), Hr(v, e, 1), (y = ge(He));
  }
  let g = y;
  if (_ && m !== !1) {
    const v = Object.keys(_),
      { shapeFlag: x } = g;
    v.length && x & 7 && (o && v.some(Qa) && (_ = Pm(_, o)), (g = an(g, _, !1, !0)));
  }
  return (
    n.dirs && ((g = an(g, null, !1, !0)), (g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Rr(g, n.transition),
    (y = g),
    vo(b),
    y
  );
}
function $m(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    if (nr(s)) {
      if (s.type !== He || s.children === 'v-if') {
        if (n) return;
        n = s;
      }
    } else return;
  }
  return n;
}
const Rm = (e) => {
    let t;
    for (const n in e) (n === 'class' || n === 'style' || Rs(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Pm = (e, t) => {
    const n = {};
    for (const r in e) (!Qa(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function km(e, t, n) {
  const { props: r, children: s, component: o } = e,
    { props: i, children: a, patchFlag: l } = t,
    c = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? sc(r, i, c) : !!i;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const h = u[d];
        if (i[h] !== r[h] && !si(c, h)) return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? (i ? sc(r, i, c) : !0) : !!i;
  return !1;
}
function sc(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !si(n, o)) return !0;
  }
  return !1;
}
function oi({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const So = (e) => e.__isSuspense;
let ya = 0;
const Om = {
    name: 'Suspense',
    __isSuspense: !0,
    process(e, t, n, r, s, o, i, a, l, c) {
      if (e == null) Mm(t, n, r, s, o, i, a, l, c);
      else {
        if (o && o.deps > 0 && !e.suspense.isInFallback) {
          (t.suspense = e.suspense), (t.suspense.vnode = t), (t.el = e.el);
          return;
        }
        Nm(e, t, n, r, s, i, a, l, c);
      }
    },
    hydrate: Lm,
    normalize: Im,
  },
  Cd = Om;
function ps(e, t) {
  const n = e.props && e.props[t];
  ee(n) && n();
}
function Mm(e, t, n, r, s, o, i, a, l) {
  const {
      p: c,
      o: { createElement: u },
    } = l,
    d = u('div'),
    h = (e.suspense = Sd(e, s, r, t, d, n, o, i, a, l));
  c(null, (h.pendingBranch = e.ssContent), d, null, r, h, o, i),
    h.deps > 0
      ? (ps(e, 'onPending'),
        ps(e, 'onFallback'),
        c(null, e.ssFallback, t, n, r, null, o, i),
        Sr(h, e.ssFallback))
      : h.resolve(!1, !0);
}
function Nm(e, t, n, r, s, o, i, a, { p: l, um: c, o: { createElement: u } }) {
  const d = (t.suspense = e.suspense);
  (d.vnode = t), (t.el = e.el);
  const h = t.ssContent,
    f = t.ssFallback,
    { activeBranch: p, pendingBranch: m, isInFallback: b, isHydrating: y } = d;
  if (m)
    (d.pendingBranch = h),
      Rt(h, m)
        ? (l(m, h, d.hiddenContainer, null, s, d, o, i, a),
          d.deps <= 0 ? d.resolve() : b && (y || (l(p, f, n, r, s, null, o, i, a), Sr(d, f))))
        : ((d.pendingId = ya++),
          y ? ((d.isHydrating = !1), (d.activeBranch = m)) : c(m, s, d),
          (d.deps = 0),
          (d.effects.length = 0),
          (d.hiddenContainer = u('div')),
          b
            ? (l(null, h, d.hiddenContainer, null, s, d, o, i, a),
              d.deps <= 0 ? d.resolve() : (l(p, f, n, r, s, null, o, i, a), Sr(d, f)))
            : p && Rt(h, p)
              ? (l(p, h, n, r, s, d, o, i, a), d.resolve(!0))
              : (l(null, h, d.hiddenContainer, null, s, d, o, i, a), d.deps <= 0 && d.resolve()));
  else if (p && Rt(h, p)) l(p, h, n, r, s, d, o, i, a), Sr(d, h);
  else if (
    (ps(t, 'onPending'),
    (d.pendingBranch = h),
    h.shapeFlag & 512 ? (d.pendingId = h.component.suspenseId) : (d.pendingId = ya++),
    l(null, h, d.hiddenContainer, null, s, d, o, i, a),
    d.deps <= 0)
  )
    d.resolve();
  else {
    const { timeout: _, pendingId: g } = d;
    _ > 0
      ? setTimeout(() => {
          d.pendingId === g && d.fallback(f);
        }, _)
      : _ === 0 && d.fallback(f);
  }
}
function Sd(e, t, n, r, s, o, i, a, l, c, u = !1) {
  const {
    p: d,
    m: h,
    um: f,
    n: p,
    o: { parentNode: m, remove: b },
  } = c;
  let y;
  const _ = Hm(e);
  _ && t && t.pendingBranch && ((y = t.pendingId), t.deps++);
  const g = e.props ? gf(e.props.timeout) : void 0,
    v = o,
    x = {
      vnode: e,
      parent: t,
      parentComponent: n,
      namespace: i,
      container: r,
      hiddenContainer: s,
      deps: 0,
      pendingId: ya++,
      timeout: typeof g == 'number' ? g : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !u,
      isHydrating: u,
      isUnmounted: !1,
      effects: [],
      resolve($ = !1, k = !1) {
        const {
          vnode: U,
          activeBranch: E,
          pendingBranch: A,
          pendingId: T,
          effects: C,
          parentComponent: R,
          container: H,
        } = x;
        let K = !1;
        x.isHydrating
          ? (x.isHydrating = !1)
          : $ ||
            ((K = E && A.transition && A.transition.mode === 'out-in'),
            K &&
              (E.transition.afterLeave = () => {
                T === x.pendingId && (h(A, H, o === v ? p(E) : o, 0), fa(C));
              }),
            E && (m(E.el) === H && (o = p(E)), f(E, R, x, !0)),
            K || h(A, H, o, 0)),
          Sr(x, A),
          (x.pendingBranch = null),
          (x.isInFallback = !1);
        let D = x.parent,
          B = !1;
        for (; D; ) {
          if (D.pendingBranch) {
            D.effects.push(...C), (B = !0);
            break;
          }
          D = D.parent;
        }
        !B && !K && fa(C),
          (x.effects = []),
          _ &&
            t &&
            t.pendingBranch &&
            y === t.pendingId &&
            (t.deps--, t.deps === 0 && !k && t.resolve()),
          ps(U, 'onResolve');
      },
      fallback($) {
        if (!x.pendingBranch) return;
        const { vnode: k, activeBranch: U, parentComponent: E, container: A, namespace: T } = x;
        ps(k, 'onFallback');
        const C = p(U),
          R = () => {
            x.isInFallback && (d(null, $, A, C, E, null, T, a, l), Sr(x, $));
          },
          H = $.transition && $.transition.mode === 'out-in';
        H && (U.transition.afterLeave = R), (x.isInFallback = !0), f(U, E, null, !0), H || R();
      },
      move($, k, U) {
        x.activeBranch && h(x.activeBranch, $, k, U), (x.container = $);
      },
      next() {
        return x.activeBranch && p(x.activeBranch);
      },
      registerDep($, k, U) {
        const E = !!x.pendingBranch;
        E && x.deps++;
        const A = $.vnode.el;
        $.asyncDep
          .catch((T) => {
            Hr(T, $, 0);
          })
          .then((T) => {
            if ($.isUnmounted || x.isUnmounted || x.pendingId !== $.suspenseId) return;
            $.asyncResolved = !0;
            const { vnode: C } = $;
            wa($, T), A && (C.el = A);
            const R = !A && $.subTree.el;
            k($, C, m(A || $.subTree.el), A ? null : p($.subTree), x, i, U),
              R && b(R),
              oi($, C.el),
              E && --x.deps === 0 && x.resolve();
          });
      },
      unmount($, k) {
        (x.isUnmounted = !0),
          x.activeBranch && f(x.activeBranch, n, $, k),
          x.pendingBranch && f(x.pendingBranch, n, $, k);
      },
    };
  return x;
}
function Lm(e, t, n, r, s, o, i, a, l) {
  const c = (t.suspense = Sd(
      t,
      r,
      n,
      e.parentNode,
      document.createElement('div'),
      null,
      s,
      o,
      i,
      a,
      !0,
    )),
    u = l(e, (c.pendingBranch = t.ssContent), n, c, o, i);
  return c.deps === 0 && c.resolve(!1, !0), u;
}
function Im(e) {
  const { shapeFlag: t, children: n } = e,
    r = t & 32;
  (e.ssContent = oc(r ? n.default : n)), (e.ssFallback = r ? oc(n.fallback) : ge(He));
}
function oc(e) {
  let t;
  if (ee(e)) {
    const n = Pr && e._c;
    n && ((e._d = !1), we()), (e = e()), n && ((e._d = !0), (t = at), xd());
  }
  return (
    Z(e) && (e = $m(e)),
    (e = pt(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)),
    e
  );
}
function Ed(e, t) {
  t && t.pendingBranch ? (Z(e) ? t.effects.push(...e) : t.effects.push(e)) : fa(e);
}
function Sr(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: r } = e;
  let s = t.el;
  for (; !s && t.component; ) (t = t.component.subTree), (s = t.el);
  (n.el = s), r && r.subTree === n && ((r.vnode.el = s), oi(r, s));
}
function Hm(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const Ie = Symbol.for('v-fgt'),
  er = Symbol.for('v-txt'),
  He = Symbol.for('v-cmt'),
  to = Symbol.for('v-stc'),
  Qr = [];
let at = null;
function we(e = !1) {
  Qr.push((at = e ? null : []));
}
function xd() {
  Qr.pop(), (at = Qr[Qr.length - 1] || null);
}
let Pr = 1;
function ic(e, t = !1) {
  (Pr += e), e < 0 && at && t && (at.hasOnce = !0);
}
function Ad(e) {
  return (e.dynamicChildren = Pr > 0 ? at || yr : null), xd(), Pr > 0 && at && at.push(e), e;
}
function tt(e, t, n, r, s, o) {
  return Ad(ue(e, t, n, r, s, o, !0));
}
function it(e, t, n, r, s) {
  return Ad(ge(e, t, n, r, s, !0));
}
function nr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Rt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Td = ({ key: e }) => e ?? null,
  no = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (Re(e) || De(e) || ee(e) ? { i: Fe, r: e, k: t, f: !!n } : e) : null
  );
function ue(e, t = null, n = null, r = 0, s = null, o = e === Ie ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Td(t),
    ref: t && no(t),
    scopeId: ei,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Fe,
  };
  return (
    a ? (gl(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= Re(n) ? 8 : 16),
    Pr > 0 && !i && at && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && at.push(l),
    l
  );
}
const ge = jm;
function jm(e, t = null, n = null, r = 0, s = null, o = !1) {
  if (((!e || e === ed) && (e = He), nr(e))) {
    const a = an(e, t, !0);
    return (
      n && gl(a, n),
      Pr > 0 && !o && at && (a.shapeFlag & 6 ? (at[at.indexOf(e)] = a) : at.push(a)),
      (a.patchFlag = -2),
      a
    );
  }
  if ((qm(e) && (e = e.__vccOpts), t)) {
    t = pl(t);
    let { class: a, style: l } = t;
    a && !Re(a) && (t.class = ir(a)),
      _e(l) && (ll(l) && !Z(l) && (l = Be({}, l)), (t.style = Yn(l)));
  }
  const i = Re(e) ? 1 : So(e) ? 128 : Uf(e) ? 64 : _e(e) ? 4 : ee(e) ? 2 : 0;
  return ue(e, t, n, r, s, i, o, !0);
}
function pl(e) {
  return e ? (ll(e) || ad(e) ? Be({}, e) : e) : null;
}
function an(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: a, transition: l } = e,
    c = t ? ml(s || {}, t) : s,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: c,
      key: c && Td(c),
      ref: t && t.ref ? (n && o ? (Z(o) ? o.concat(no(t)) : [o, no(t)]) : no(t)) : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Ie ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && an(e.ssContent),
      ssFallback: e.ssFallback && an(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return l && r && Rr(u, l.clone(u)), u;
}
function gt(e = ' ', t = 0) {
  return ge(er, null, e, t);
}
function qn(e = '', t = !1) {
  return t ? (we(), it(He, null, e)) : ge(He, null, e);
}
function pt(e) {
  return e == null || typeof e == 'boolean'
    ? ge(He)
    : Z(e)
      ? ge(Ie, null, e.slice())
      : nr(e)
        ? vn(e)
        : ge(er, null, String(e));
}
function vn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : an(e);
}
function gl(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (Z(t)) n = 16;
  else if (typeof t == 'object')
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), gl(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !ad(t)
        ? (t._ctx = Fe)
        : s === 3 && Fe && (Fe.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    ee(t)
      ? ((t = { default: t, _ctx: Fe }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [gt(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function ml(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === 'class') t.class !== r.class && (t.class = ir([t.class, r.class]));
      else if (s === 'style') t.style = Yn([t.style, r.style]);
      else if (Rs(s)) {
        const o = t[s],
          i = r[s];
        i && o !== i && !(Z(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else s !== '' && (t[s] = r[s]);
  }
  return t;
}
function st(e, t, n, r = null) {
  Lt(e, t, 7, [n, r]);
}
const Fm = sd();
let Dm = 0;
function Bm(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || Fm,
    o = {
      uid: Dm++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new bf(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: cd(r, s),
      emitsOptions: _d(r, s),
      emit: null,
      emitted: null,
      propsDefaults: pe,
      inheritAttrs: r.inheritAttrs,
      ctx: pe,
      data: pe,
      props: pe,
      attrs: pe,
      slots: pe,
      refs: pe,
      setupState: pe,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }), (o.root = t ? t.root : o), (o.emit = Tm.bind(null, o)), e.ce && e.ce(o), o
  );
}
let je = null;
const Nn = () => je || Fe;
let Eo, va;
{
  const e = Xo(),
    t = (n, r) => {
      let s;
      return (
        (s = e[n]) || (s = e[n] = []),
        s.push(r),
        (o) => {
          s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
        }
      );
    };
  (Eo = t('__VUE_INSTANCE_SETTERS__', (n) => (je = n))),
    (va = t('__VUE_SSR_SETTERS__', (n) => (kr = n)));
}
const Ms = (e) => {
    const t = je;
    return (
      Eo(e),
      e.scope.on(),
      () => {
        e.scope.off(), Eo(t);
      }
    );
  },
  ac = () => {
    je && je.scope.off(), Eo(null);
  };
function $d(e) {
  return e.vnode.shapeFlag & 4;
}
let kr = !1;
function Um(e, t = !1, n = !1) {
  t && va(t);
  const { props: r, children: s } = e.vnode,
    o = $d(e);
  pm(e, r, o, t), vm(e, s, n);
  const i = o ? Wm(e, t) : void 0;
  return t && va(!1), i;
}
function Wm(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, im));
  const { setup: r } = n;
  if (r) {
    kn();
    const s = (e.setupContext = r.length > 1 ? Vm(e) : null),
      o = Ms(e),
      i = Ps(r, e, 0, [e.props, s]),
      a = ff(i);
    if ((On(), o(), (a || e.sp) && !En(e) && ul(e), a)) {
      if ((i.then(ac, ac), t))
        return i
          .then((l) => {
            wa(e, l);
          })
          .catch((l) => {
            Hr(l, e, 0);
          });
      e.asyncDep = i;
    } else wa(e, i);
  } else Rd(e);
}
function wa(e, t, n) {
  ee(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : _e(t) && (e.setupState = If(t)),
    Rd(e);
}
function Rd(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Ut);
  {
    const s = Ms(e);
    kn();
    try {
      am(e);
    } finally {
      On(), s();
    }
  }
}
const zm = {
  get(e, t) {
    return Je(e, 'get', ''), e[t];
  },
};
function Vm(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, zm), slots: e.slots, emit: e.emit, expose: t };
}
function ii(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(If(xg(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in Zr) return Zr[n](e);
          },
          has(t, n) {
            return n in t || n in Zr;
          },
        }))
    : e.proxy;
}
function ba(e, t = !0) {
  return ee(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function qm(e) {
  return ee(e) && '__vccOpts' in e;
}
const ae = (e, t) => Mg(e, t, kr);
function mt(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? _e(t) && !Z(t)
      ? nr(t)
        ? ge(e, null, [t])
        : ge(e, t)
      : ge(e, null, t)
    : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : r === 3 && nr(n) && (n = [n]),
      ge(e, t, n));
}
const Pd = '3.5.13';
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let _a;
const lc = typeof window < 'u' && window.trustedTypes;
if (lc)
  try {
    _a = lc.createPolicy('vue', { createHTML: (e) => e });
  } catch {}
const kd = _a ? (e) => _a.createHTML(e) : (e) => e,
  Km = 'http://www.w3.org/2000/svg',
  Gm = 'http://www.w3.org/1998/Math/MathML',
  Qt = typeof document < 'u' ? document : null,
  cc = Qt && Qt.createElement('template'),
  Jm = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s =
        t === 'svg'
          ? Qt.createElementNS(Km, e)
          : t === 'mathml'
            ? Qt.createElementNS(Gm, e)
            : n
              ? Qt.createElement(e, { is: n })
              : Qt.createElement(e);
      return e === 'select' && r && r.multiple != null && s.setAttribute('multiple', r.multiple), s;
    },
    createText: (e) => Qt.createTextNode(e),
    createComment: (e) => Qt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Qt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    insertStaticContent(e, t, n, r, s, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling))
        for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)); );
      else {
        cc.innerHTML = kd(
          r === 'svg' ? `<svg>${e}</svg>` : r === 'mathml' ? `<math>${e}</math>` : e,
        );
        const a = cc.content;
        if (r === 'svg' || r === 'mathml') {
          const l = a.firstChild;
          for (; l.firstChild; ) a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        t.insertBefore(a, n);
      }
      return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
    },
  },
  dn = 'transition',
  Ur = 'animation',
  gs = Symbol('_vtc'),
  Od = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  Ym = Be({}, Wf, Od),
  Xm = (e) => ((e.displayName = 'Transition'), (e.props = Ym), e),
  Zm = Xm((e, { slots: t }) => mt(zg, Qm(e), t)),
  Fn = (e, t = []) => {
    Z(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  uc = (e) => (e ? (Z(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function Qm(e) {
  const t = {};
  for (const C in e) C in Od || (t[C] = e[C]);
  if (e.css === !1) return t;
  const {
      name: n = 'v',
      type: r,
      duration: s,
      enterFromClass: o = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: a = `${n}-enter-to`,
      appearFromClass: l = o,
      appearActiveClass: c = i,
      appearToClass: u = a,
      leaveFromClass: d = `${n}-leave-from`,
      leaveActiveClass: h = `${n}-leave-active`,
      leaveToClass: f = `${n}-leave-to`,
    } = e,
    p = ey(s),
    m = p && p[0],
    b = p && p[1],
    {
      onBeforeEnter: y,
      onEnter: _,
      onEnterCancelled: g,
      onLeave: v,
      onLeaveCancelled: x,
      onBeforeAppear: $ = y,
      onAppear: k = _,
      onAppearCancelled: U = g,
    } = t,
    E = (C, R, H, K) => {
      (C._enterCancelled = K), Dn(C, R ? u : a), Dn(C, R ? c : i), H && H();
    },
    A = (C, R) => {
      (C._isLeaving = !1), Dn(C, d), Dn(C, f), Dn(C, h), R && R();
    },
    T = (C) => (R, H) => {
      const K = C ? k : _,
        D = () => E(R, C, H);
      Fn(K, [R, D]),
        fc(() => {
          Dn(R, C ? l : o), Xt(R, C ? u : a), uc(K) || dc(R, r, m, D);
        });
    };
  return Be(t, {
    onBeforeEnter(C) {
      Fn(y, [C]), Xt(C, o), Xt(C, i);
    },
    onBeforeAppear(C) {
      Fn($, [C]), Xt(C, l), Xt(C, c);
    },
    onEnter: T(!1),
    onAppear: T(!0),
    onLeave(C, R) {
      C._isLeaving = !0;
      const H = () => A(C, R);
      Xt(C, d),
        C._enterCancelled ? (Xt(C, h), gc()) : (gc(), Xt(C, h)),
        fc(() => {
          C._isLeaving && (Dn(C, d), Xt(C, f), uc(v) || dc(C, r, b, H));
        }),
        Fn(v, [C, H]);
    },
    onEnterCancelled(C) {
      E(C, !1, void 0, !0), Fn(g, [C]);
    },
    onAppearCancelled(C) {
      E(C, !0, void 0, !0), Fn(U, [C]);
    },
    onLeaveCancelled(C) {
      A(C), Fn(x, [C]);
    },
  });
}
function ey(e) {
  if (e == null) return null;
  if (_e(e)) return [Mi(e.enter), Mi(e.leave)];
  {
    const t = Mi(e);
    return [t, t];
  }
}
function Mi(e) {
  return gf(e);
}
function Xt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[gs] || (e[gs] = new Set())).add(t);
}
function Dn(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[gs];
  n && (n.delete(t), n.size || (e[gs] = void 0));
}
function fc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ty = 0;
function dc(e, t, n, r) {
  const s = (e._endId = ++ty),
    o = () => {
      s === e._endId && r();
    };
  if (n != null) return setTimeout(o, n);
  const { type: i, timeout: a, propCount: l } = ny(e, t);
  if (!i) return r();
  const c = i + 'end';
  let u = 0;
  const d = () => {
      e.removeEventListener(c, h), o();
    },
    h = (f) => {
      f.target === e && ++u >= l && d();
    };
  setTimeout(() => {
    u < l && d();
  }, a + 1),
    e.addEventListener(c, h);
}
function ny(e, t) {
  const n = window.getComputedStyle(e),
    r = (p) => (n[p] || '').split(', '),
    s = r(`${dn}Delay`),
    o = r(`${dn}Duration`),
    i = hc(s, o),
    a = r(`${Ur}Delay`),
    l = r(`${Ur}Duration`),
    c = hc(a, l);
  let u = null,
    d = 0,
    h = 0;
  t === dn
    ? i > 0 && ((u = dn), (d = i), (h = o.length))
    : t === Ur
      ? c > 0 && ((u = Ur), (d = c), (h = l.length))
      : ((d = Math.max(i, c)),
        (u = d > 0 ? (i > c ? dn : Ur) : null),
        (h = u ? (u === dn ? o.length : l.length) : 0));
  const f = u === dn && /\b(transform|all)(,|$)/.test(r(`${dn}Property`).toString());
  return { type: u, timeout: d, propCount: h, hasTransform: f };
}
function hc(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => pc(n) + pc(e[r])));
}
function pc(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3;
}
function gc() {
  return document.body.offsetHeight;
}
function ry(e, t, n) {
  const r = e[gs];
  r && (t = (t ? [t, ...r] : [...r]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t);
}
const xo = Symbol('_vod'),
  Md = Symbol('_vsh'),
  JE = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e[xo] = e.style.display === 'none' ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : Wr(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), Wr(e, !0), r.enter(e))
            : r.leave(e, () => {
                Wr(e, !1);
              })
          : Wr(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Wr(e, t);
    },
  };
function Wr(e, t) {
  (e.style.display = t ? e[xo] : 'none'), (e[Md] = !t);
}
const sy = Symbol(''),
  oy = /(^|;)\s*display\s*:/;
function iy(e, t, n) {
  const r = e.style,
    s = Re(n);
  let o = !1;
  if (n && !s) {
    if (t)
      if (Re(t))
        for (const i of t.split(';')) {
          const a = i.slice(0, i.indexOf(':')).trim();
          n[a] == null && ro(r, a, '');
        }
      else for (const i in t) n[i] == null && ro(r, i, '');
    for (const i in n) i === 'display' && (o = !0), ro(r, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = r[sy];
      i && (n += ';' + i), (r.cssText = n), (o = oy.test(n));
    }
  } else t && e.removeAttribute('style');
  xo in e && ((e[xo] = o ? r.display : ''), e[Md] && (r.display = 'none'));
}
const mc = /\s*!important$/;
function ro(e, t, n) {
  if (Z(n)) n.forEach((r) => ro(e, t, r));
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
  else {
    const r = ay(e, t);
    mc.test(n) ? e.setProperty(ln(r), n.replace(mc, ''), 'important') : (e[r] = n);
  }
}
const yc = ['Webkit', 'Moz', 'ms'],
  Ni = {};
function ay(e, t) {
  const n = Ni[t];
  if (n) return n;
  let r = yt(t);
  if (r !== 'filter' && r in e) return (Ni[t] = r);
  r = Yo(r);
  for (let s = 0; s < yc.length; s++) {
    const o = yc[s] + r;
    if (o in e) return (Ni[t] = o);
  }
  return t;
}
const vc = 'http://www.w3.org/1999/xlink';
function wc(e, t, n, r, s, o = ng(t)) {
  r && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(vc, t.slice(6, t.length))
      : e.setAttributeNS(vc, t, n)
    : n == null || (o && !yf(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? '' : Nt(n) ? String(n) : n);
}
function bc(e, t, n, r, s) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? kd(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === 'value' && o !== 'PROGRESS' && !o.includes('-')) {
    const a = o === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      l = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n);
    (a !== l || !('_value' in e)) && (e.value = l),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let i = !1;
  if (n === '' || n == null) {
    const a = typeof e[t];
    a === 'boolean'
      ? (n = yf(n))
      : n == null && a === 'string'
        ? ((n = ''), (i = !0))
        : a === 'number' && ((n = 0), (i = !0));
  }
  try {
    e[t] = n;
  } catch {}
  i && e.removeAttribute(s || t);
}
function Vn(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function ly(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const _c = Symbol('_vei');
function cy(e, t, n, r, s = null) {
  const o = e[_c] || (e[_c] = {}),
    i = o[t];
  if (r && i) i.value = r;
  else {
    const [a, l] = uy(t);
    if (r) {
      const c = (o[t] = hy(r, s));
      Vn(e, a, c, l);
    } else i && (ly(e, a, i, l), (o[t] = void 0));
  }
}
const Cc = /(?:Once|Passive|Capture)$/;
function uy(e) {
  let t;
  if (Cc.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(Cc)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ':' ? e.slice(3) : ln(e.slice(2)), t];
}
let Li = 0;
const fy = Promise.resolve(),
  dy = () => Li || (fy.then(() => (Li = 0)), (Li = Date.now()));
function hy(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Lt(py(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = dy()), n;
}
function py(e, t) {
  if (Z(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return t;
}
const Sc = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  gy = (e, t, n, r, s, o) => {
    const i = s === 'svg';
    t === 'class'
      ? ry(e, r, i)
      : t === 'style'
        ? iy(e, n, r)
        : Rs(t)
          ? Qa(t) || cy(e, t, n, r, o)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : my(e, t, r, i)
              )
            ? (bc(e, t, r),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                wc(e, t, r, i, o, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !Re(r))
              ? bc(e, yt(t), r, o, t)
              : (t === 'true-value'
                  ? (e._trueValue = r)
                  : t === 'false-value' && (e._falseValue = r),
                wc(e, t, r, i));
  };
function my(e, t, n, r) {
  if (r) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && Sc(t) && ee(n)));
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1;
  if (t === 'width' || t === 'height') {
    const s = e.tagName;
    if (s === 'IMG' || s === 'VIDEO' || s === 'CANVAS' || s === 'SOURCE') return !1;
  }
  return Sc(t) && Re(n) ? !1 : t in e;
}
const Ao = (e) => {
  const t = e.props['onUpdate:modelValue'] || !1;
  return Z(t) ? (n) => br(t, n) : t;
};
function yy(e) {
  e.target.composing = !0;
}
function Ec(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')));
}
const Er = Symbol('_assign'),
  YE = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e[Er] = Ao(s);
      const o = r || (s.props && s.props.type === 'number');
      Vn(e, t ? 'change' : 'input', (i) => {
        if (i.target.composing) return;
        let a = e.value;
        n && (a = a.trim()), o && (a = ia(a)), e[Er](a);
      }),
        n &&
          Vn(e, 'change', () => {
            e.value = e.value.trim();
          }),
        t || (Vn(e, 'compositionstart', yy), Vn(e, 'compositionend', Ec), Vn(e, 'change', Ec));
    },
    mounted(e, { value: t }) {
      e.value = t ?? '';
    },
    beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: o } }, i) {
      if (((e[Er] = Ao(i)), e.composing)) return;
      const a = (o || e.type === 'number') && !/^0\d/.test(e.value) ? ia(e.value) : e.value,
        l = t ?? '';
      a !== l &&
        ((document.activeElement === e &&
          e.type !== 'range' &&
          ((r && t === n) || (s && e.value.trim() === l))) ||
          (e.value = l));
    },
  },
  XE = {
    created(e, { value: t }, n) {
      (e.checked = ho(t, n.props.value)),
        (e[Er] = Ao(n)),
        Vn(e, 'change', () => {
          e[Er](vy(e));
        });
    },
    beforeUpdate(e, { value: t, oldValue: n }, r) {
      (e[Er] = Ao(r)), t !== n && (e.checked = ho(t, r.props.value));
    },
  };
function vy(e) {
  return '_value' in e ? e._value : e.value;
}
const wy = ['ctrl', 'shift', 'alt', 'meta'],
  by = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => wy.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  ZE = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      r = t.join('.');
    return (
      n[r] ||
      (n[r] = (s, ...o) => {
        for (let i = 0; i < t.length; i++) {
          const a = by[t[i]];
          if (a && a(s, t)) return;
        }
        return e(s, ...o);
      })
    );
  },
  _y = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace',
  },
  Cy = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      r = t.join('.');
    return (
      n[r] ||
      (n[r] = (s) => {
        if (!('key' in s)) return;
        const o = ln(s.key);
        if (t.some((i) => i === o || _y[i] === o)) return e(s);
      })
    );
  },
  Nd = Be({ patchProp: gy }, Jm);
let es,
  xc = !1;
function Sy() {
  return es || (es = bm(Nd));
}
function Ey() {
  return (es = xc ? es : _m(Nd)), (xc = !0), es;
}
const Ld = (...e) => {
    const t = Sy().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (r) => {
        const s = Hd(r);
        if (!s) return;
        const o = t._component;
        !ee(o) && !o.render && !o.template && (o.template = s.innerHTML),
          s.nodeType === 1 && (s.textContent = '');
        const i = n(s, !1, Id(s));
        return (
          s instanceof Element && (s.removeAttribute('v-cloak'), s.setAttribute('data-v-app', '')),
          i
        );
      }),
      t
    );
  },
  xy = (...e) => {
    const t = Ey().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (r) => {
        const s = Hd(r);
        if (s) return n(s, !0, Id(s));
      }),
      t
    );
  };
function Id(e) {
  if (e instanceof SVGElement) return 'svg';
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml';
}
function Hd(e) {
  return Re(e) ? document.querySelector(e) : e;
}
const Ay =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  Ty =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  $y = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Ry(e, t) {
  if (e === '__proto__' || (e === 'constructor' && t && typeof t == 'object' && 'prototype' in t)) {
    Py(e);
    return;
  }
  return t;
}
function Py(e) {
  console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
}
function To(e, t = {}) {
  if (typeof e != 'string') return e;
  const n = e.trim();
  if (e[0] === '"' && e.endsWith('"') && !e.includes('\\')) return n.slice(1, -1);
  if (n.length <= 9) {
    const r = n.toLowerCase();
    if (r === 'true') return !0;
    if (r === 'false') return !1;
    if (r === 'undefined') return;
    if (r === 'null') return null;
    if (r === 'nan') return Number.NaN;
    if (r === 'infinity') return Number.POSITIVE_INFINITY;
    if (r === '-infinity') return Number.NEGATIVE_INFINITY;
  }
  if (!$y.test(e)) {
    if (t.strict) throw new SyntaxError('[destr] Invalid JSON');
    return e;
  }
  try {
    if (Ay.test(e) || Ty.test(e)) {
      if (t.strict) throw new Error('[destr] Possible prototype pollution');
      return JSON.parse(e, Ry);
    }
    return JSON.parse(e);
  } catch (r) {
    if (t.strict) throw r;
    return e;
  }
}
const ky = /#/g,
  Oy = /&/g,
  My = /\//g,
  Ny = /=/g,
  yl = /\+/g,
  Ly = /%5e/gi,
  Iy = /%60/gi,
  Hy = /%7c/gi,
  jy = /%20/gi;
function Fy(e) {
  return encodeURI('' + e).replace(Hy, '|');
}
function Ca(e) {
  return Fy(typeof e == 'string' ? e : JSON.stringify(e))
    .replace(yl, '%2B')
    .replace(jy, '+')
    .replace(ky, '%23')
    .replace(Oy, '%26')
    .replace(Iy, '`')
    .replace(Ly, '^')
    .replace(My, '%2F');
}
function Ii(e) {
  return Ca(e).replace(Ny, '%3D');
}
function $o(e = '') {
  try {
    return decodeURIComponent('' + e);
  } catch {
    return '' + e;
  }
}
function Dy(e) {
  return $o(e.replace(yl, ' '));
}
function By(e) {
  return $o(e.replace(yl, ' '));
}
function jd(e = '') {
  const t = {};
  e[0] === '?' && (e = e.slice(1));
  for (const n of e.split('&')) {
    const r = n.match(/([^=]+)=?(.*)/) || [];
    if (r.length < 2) continue;
    const s = Dy(r[1]);
    if (s === '__proto__' || s === 'constructor') continue;
    const o = By(r[2] || '');
    t[s] === void 0 ? (t[s] = o) : Array.isArray(t[s]) ? t[s].push(o) : (t[s] = [t[s], o]);
  }
  return t;
}
function Uy(e, t) {
  return (
    (typeof t == 'number' || typeof t == 'boolean') && (t = String(t)),
    t
      ? Array.isArray(t)
        ? t.map((n) => `${Ii(e)}=${Ca(n)}`).join('&')
        : `${Ii(e)}=${Ca(t)}`
      : Ii(e)
  );
}
function Wy(e) {
  return Object.keys(e)
    .filter((t) => e[t] !== void 0)
    .map((t) => Uy(t, e[t]))
    .filter(Boolean)
    .join('&');
}
const zy = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
  Vy = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
  qy = /^([/\\]\s*){2,}[^/\\]/,
  Ky = /^[\s\0]*(blob|data|javascript|vbscript):$/i,
  Gy = /\/$|\/\?|\/#/,
  Jy = /^\.?\//;
function un(e, t = {}) {
  return (
    typeof t == 'boolean' && (t = { acceptRelative: t }),
    t.strict ? zy.test(e) : Vy.test(e) || (t.acceptRelative ? qy.test(e) : !1)
  );
}
function Yy(e) {
  return !!e && Ky.test(e);
}
function Sa(e = '', t) {
  return t ? Gy.test(e) : e.endsWith('/');
}
function ai(e = '', t) {
  if (!t) return (Sa(e) ? e.slice(0, -1) : e) || '/';
  if (!Sa(e, !0)) return e || '/';
  let n = e,
    r = '';
  const s = e.indexOf('#');
  s >= 0 && ((n = e.slice(0, s)), (r = e.slice(s)));
  const [o, ...i] = n.split('?');
  return (
    ((o.endsWith('/') ? o.slice(0, -1) : o) || '/') + (i.length > 0 ? `?${i.join('?')}` : '') + r
  );
}
function Ro(e = '', t) {
  if (!t) return e.endsWith('/') ? e : e + '/';
  if (Sa(e, !0)) return e || '/';
  let n = e,
    r = '';
  const s = e.indexOf('#');
  if (s >= 0 && ((n = e.slice(0, s)), (r = e.slice(s)), !n)) return r;
  const [o, ...i] = n.split('?');
  return o + '/' + (i.length > 0 ? `?${i.join('?')}` : '') + r;
}
function Xy(e = '') {
  return e.startsWith('/');
}
function Ac(e = '') {
  return Xy(e) ? e : '/' + e;
}
function Zy(e, t) {
  if (Dd(t) || un(e)) return e;
  const n = ai(t);
  return e.startsWith(n) ? e : li(n, e);
}
function Tc(e, t) {
  if (Dd(t)) return e;
  const n = ai(t);
  if (!e.startsWith(n)) return e;
  const r = e.slice(n.length);
  return r[0] === '/' ? r : '/' + r;
}
function Fd(e, t) {
  const n = tv(e),
    r = { ...jd(n.search), ...t };
  return (n.search = Wy(r)), nv(n);
}
function Dd(e) {
  return !e || e === '/';
}
function Qy(e) {
  return e && e !== '/';
}
function li(e, ...t) {
  let n = e || '';
  for (const r of t.filter((s) => Qy(s)))
    if (n) {
      const s = r.replace(Jy, '');
      n = Ro(n) + s;
    } else n = r;
  return n;
}
function Bd(...e) {
  var i, a, l, c;
  const t = /\/(?!\/)/,
    n = e.filter(Boolean),
    r = [];
  let s = 0;
  for (const u of n)
    if (!(!u || u === '/')) {
      for (const [d, h] of u.split(t).entries())
        if (!(!h || h === '.')) {
          if (h === '..') {
            if (r.length === 1 && un(r[0])) continue;
            r.pop(), s--;
            continue;
          }
          if (d === 1 && (i = r[r.length - 1]) != null && i.endsWith(':/')) {
            r[r.length - 1] += '/' + h;
            continue;
          }
          r.push(h), s++;
        }
    }
  let o = r.join('/');
  return (
    s >= 0
      ? (a = n[0]) != null && a.startsWith('/') && !o.startsWith('/')
        ? (o = '/' + o)
        : (l = n[0]) != null && l.startsWith('./') && !o.startsWith('./') && (o = './' + o)
      : (o = '../'.repeat(-1 * s) + o),
    (c = n[n.length - 1]) != null && c.endsWith('/') && !o.endsWith('/') && (o += '/'),
    o
  );
}
function ev(e, t, n = {}) {
  return (
    n.trailingSlash || ((e = Ro(e)), (t = Ro(t))),
    n.leadingSlash || ((e = Ac(e)), (t = Ac(t))),
    n.encoding || ((e = $o(e)), (t = $o(t))),
    e === t
  );
}
const Ud = Symbol.for('ufo:protocolRelative');
function tv(e = '', t) {
  const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (n) {
    const [, d, h = ''] = n;
    return {
      protocol: d.toLowerCase(),
      pathname: h,
      href: d + h,
      auth: '',
      host: '',
      search: '',
      hash: '',
    };
  }
  if (!un(e, { acceptRelative: !0 })) return $c(e);
  const [, r = '', s, o = ''] =
    e.replace(/\\/g, '/').match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, i = '', a = ''] = o.match(/([^#/?]*)(.*)?/) || [];
  r === 'file:' && (a = a.replace(/\/(?=[A-Za-z]:)/, ''));
  const { pathname: l, search: c, hash: u } = $c(a);
  return {
    protocol: r.toLowerCase(),
    auth: s ? s.slice(0, Math.max(0, s.length - 1)) : '',
    host: i,
    pathname: l,
    search: c,
    hash: u,
    [Ud]: !r,
  };
}
function $c(e = '') {
  const [t = '', n = '', r = ''] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return { pathname: t, search: n, hash: r };
}
function nv(e) {
  const t = e.pathname || '',
    n = e.search ? (e.search.startsWith('?') ? '' : '?') + e.search : '',
    r = e.hash || '',
    s = e.auth ? e.auth + '@' : '',
    o = e.host || '';
  return (e.protocol || e[Ud] ? (e.protocol || '') + '//' : '') + s + o + t + n + r;
}
class rv extends Error {
  constructor(t, n) {
    super(t, n),
      (this.name = 'FetchError'),
      n != null && n.cause && !this.cause && (this.cause = n.cause);
  }
}
function sv(e) {
  var l, c, u, d, h;
  const t =
      ((l = e.error) == null ? void 0 : l.message) ||
      ((c = e.error) == null ? void 0 : c.toString()) ||
      '',
    n =
      ((u = e.request) == null ? void 0 : u.method) ||
      ((d = e.options) == null ? void 0 : d.method) ||
      'GET',
    r = ((h = e.request) == null ? void 0 : h.url) || String(e.request) || '/',
    s = `[${n}] ${JSON.stringify(r)}`,
    o = e.response ? `${e.response.status} ${e.response.statusText}` : '<no response>',
    i = `${s}: ${o}${t ? ` ${t}` : ''}`,
    a = new rv(i, e.error ? { cause: e.error } : void 0);
  for (const f of ['request', 'options', 'response'])
    Object.defineProperty(a, f, {
      get() {
        return e[f];
      },
    });
  for (const [f, p] of [
    ['data', '_data'],
    ['status', 'status'],
    ['statusCode', 'status'],
    ['statusText', 'statusText'],
    ['statusMessage', 'statusText'],
  ])
    Object.defineProperty(a, f, {
      get() {
        return e.response && e.response[p];
      },
    });
  return a;
}
const ov = new Set(Object.freeze(['PATCH', 'POST', 'PUT', 'DELETE']));
function Rc(e = 'GET') {
  return ov.has(e.toUpperCase());
}
function iv(e) {
  if (e === void 0) return !1;
  const t = typeof e;
  return t === 'string' || t === 'number' || t === 'boolean' || t === null
    ? !0
    : t !== 'object'
      ? !1
      : Array.isArray(e)
        ? !0
        : e.buffer
          ? !1
          : (e.constructor && e.constructor.name === 'Object') || typeof e.toJSON == 'function';
}
const av = new Set(['image/svg', 'application/xml', 'application/xhtml', 'application/html']),
  lv = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function cv(e = '') {
  if (!e) return 'json';
  const t = e.split(';').shift() || '';
  return lv.test(t) ? 'json' : av.has(t) || t.startsWith('text/') ? 'text' : 'blob';
}
function uv(e, t, n, r) {
  const s = fv(
    (t == null ? void 0 : t.headers) ?? (e == null ? void 0 : e.headers),
    n == null ? void 0 : n.headers,
    r,
  );
  let o;
  return (
    ((n != null && n.query) ||
      (n != null && n.params) ||
      (t != null && t.params) ||
      (t != null && t.query)) &&
      (o = {
        ...(n == null ? void 0 : n.params),
        ...(n == null ? void 0 : n.query),
        ...(t == null ? void 0 : t.params),
        ...(t == null ? void 0 : t.query),
      }),
    { ...n, ...t, query: o, params: o, headers: s }
  );
}
function fv(e, t, n) {
  if (!t) return new n(e);
  const r = new n(t);
  if (e) for (const [s, o] of Symbol.iterator in e || Array.isArray(e) ? e : new n(e)) r.set(s, o);
  return r;
}
async function Us(e, t) {
  if (t)
    if (Array.isArray(t)) for (const n of t) await n(e);
    else await t(e);
}
const dv = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
  hv = new Set([101, 204, 205, 304]);
function Wd(e = {}) {
  const {
    fetch: t = globalThis.fetch,
    Headers: n = globalThis.Headers,
    AbortController: r = globalThis.AbortController,
  } = e;
  async function s(a) {
    const l = (a.error && a.error.name === 'AbortError' && !a.options.timeout) || !1;
    if (a.options.retry !== !1 && !l) {
      let u;
      typeof a.options.retry == 'number'
        ? (u = a.options.retry)
        : (u = Rc(a.options.method) ? 0 : 1);
      const d = (a.response && a.response.status) || 500;
      if (
        u > 0 &&
        (Array.isArray(a.options.retryStatusCodes)
          ? a.options.retryStatusCodes.includes(d)
          : dv.has(d))
      ) {
        const h =
          typeof a.options.retryDelay == 'function'
            ? a.options.retryDelay(a)
            : a.options.retryDelay || 0;
        return (
          h > 0 && (await new Promise((f) => setTimeout(f, h))),
          o(a.request, { ...a.options, retry: u - 1 })
        );
      }
    }
    const c = sv(a);
    throw (Error.captureStackTrace && Error.captureStackTrace(c, o), c);
  }
  const o = async function (l, c = {}) {
      const u = { request: l, options: uv(l, c, e.defaults, n), response: void 0, error: void 0 };
      u.options.method && (u.options.method = u.options.method.toUpperCase()),
        u.options.onRequest && (await Us(u, u.options.onRequest)),
        typeof u.request == 'string' &&
          (u.options.baseURL && (u.request = Zy(u.request, u.options.baseURL)),
          u.options.query && ((u.request = Fd(u.request, u.options.query)), delete u.options.query),
          'query' in u.options && delete u.options.query,
          'params' in u.options && delete u.options.params),
        u.options.body &&
          Rc(u.options.method) &&
          (iv(u.options.body)
            ? ((u.options.body =
                typeof u.options.body == 'string'
                  ? u.options.body
                  : JSON.stringify(u.options.body)),
              (u.options.headers = new n(u.options.headers || {})),
              u.options.headers.has('content-type') ||
                u.options.headers.set('content-type', 'application/json'),
              u.options.headers.has('accept') ||
                u.options.headers.set('accept', 'application/json'))
            : (('pipeTo' in u.options.body && typeof u.options.body.pipeTo == 'function') ||
                typeof u.options.body.pipe == 'function') &&
              ('duplex' in u.options || (u.options.duplex = 'half')));
      let d;
      if (!u.options.signal && u.options.timeout) {
        const f = new r();
        (d = setTimeout(() => {
          const p = new Error('[TimeoutError]: The operation was aborted due to timeout');
          (p.name = 'TimeoutError'), (p.code = 23), f.abort(p);
        }, u.options.timeout)),
          (u.options.signal = f.signal);
      }
      try {
        u.response = await t(u.request, u.options);
      } catch (f) {
        return (
          (u.error = f),
          u.options.onRequestError && (await Us(u, u.options.onRequestError)),
          await s(u)
        );
      } finally {
        d && clearTimeout(d);
      }
      if (
        (u.response.body || u.response._bodyInit) &&
        !hv.has(u.response.status) &&
        u.options.method !== 'HEAD'
      ) {
        const f =
          (u.options.parseResponse ? 'json' : u.options.responseType) ||
          cv(u.response.headers.get('content-type') || '');
        switch (f) {
          case 'json': {
            const p = await u.response.text(),
              m = u.options.parseResponse || To;
            u.response._data = m(p);
            break;
          }
          case 'stream': {
            u.response._data = u.response.body || u.response._bodyInit;
            break;
          }
          default:
            u.response._data = await u.response[f]();
        }
      }
      return (
        u.options.onResponse && (await Us(u, u.options.onResponse)),
        !u.options.ignoreResponseError && u.response.status >= 400 && u.response.status < 600
          ? (u.options.onResponseError && (await Us(u, u.options.onResponseError)), await s(u))
          : u.response
      );
    },
    i = async function (l, c) {
      return (await o(l, c))._data;
    };
  return (
    (i.raw = o),
    (i.native = (...a) => t(...a)),
    (i.create = (a = {}, l = {}) =>
      Wd({ ...e, ...l, defaults: { ...e.defaults, ...l.defaults, ...a } })),
    i
  );
}
const Po = (function () {
    if (typeof globalThis < 'u') return globalThis;
    if (typeof self < 'u') return self;
    if (typeof window < 'u') return window;
    if (typeof globalThis < 'u') return globalThis;
    throw new Error('unable to locate global object');
  })(),
  pv = Po.fetch
    ? (...e) => Po.fetch(...e)
    : () => Promise.reject(new Error('[ofetch] global.fetch is not supported!')),
  gv = Po.Headers,
  mv = Po.AbortController,
  yv = Wd({ fetch: pv, Headers: gv, AbortController: mv }),
  zd = yv,
  vv = () => {
    var e;
    return ((e = window == null ? void 0 : window.__NUXT__) == null ? void 0 : e.config) || {};
  },
  ko = vv().app,
  wv = () => ko.baseURL,
  bv = () => ko.buildAssetsDir,
  vl = (...e) => Bd(wl(), bv(), ...e),
  wl = (...e) => {
    const t = ko.cdnURL || ko.baseURL;
    return e.length ? Bd(t, ...e) : t;
  };
(globalThis.__buildAssetsURL = vl), (globalThis.__publicAssetsURL = wl);
globalThis.$fetch || (globalThis.$fetch = zd.create({ baseURL: wv() }));
function Ea(e, t = {}, n) {
  for (const r in e) {
    const s = e[r],
      o = n ? `${n}:${r}` : r;
    typeof s == 'object' && s !== null ? Ea(s, t, o) : typeof s == 'function' && (t[o] = s);
  }
  return t;
}
const _v = { run: (e) => e() },
  Cv = () => _v,
  Vd = typeof console.createTask < 'u' ? console.createTask : Cv;
function Sv(e, t) {
  const n = t.shift(),
    r = Vd(n);
  return e.reduce((s, o) => s.then(() => r.run(() => o(...t))), Promise.resolve());
}
function Ev(e, t) {
  const n = t.shift(),
    r = Vd(n);
  return Promise.all(e.map((s) => r.run(() => s(...t))));
}
function Hi(e, t) {
  for (const n of [...e]) n(t);
}
class xv {
  constructor() {
    (this._hooks = {}),
      (this._before = void 0),
      (this._after = void 0),
      (this._deprecatedMessages = void 0),
      (this._deprecatedHooks = {}),
      (this.hook = this.hook.bind(this)),
      (this.callHook = this.callHook.bind(this)),
      (this.callHookWith = this.callHookWith.bind(this));
  }
  hook(t, n, r = {}) {
    if (!t || typeof n != 'function') return () => {};
    const s = t;
    let o;
    for (; this._deprecatedHooks[t]; ) (o = this._deprecatedHooks[t]), (t = o.to);
    if (o && !r.allowDeprecated) {
      let i = o.message;
      i || (i = `${s} hook has been deprecated` + (o.to ? `, please use ${o.to}` : '')),
        this._deprecatedMessages || (this._deprecatedMessages = new Set()),
        this._deprecatedMessages.has(i) || (console.warn(i), this._deprecatedMessages.add(i));
    }
    if (!n.name)
      try {
        Object.defineProperty(n, 'name', {
          get: () => '_' + t.replace(/\W+/g, '_') + '_hook_cb',
          configurable: !0,
        });
      } catch {}
    return (
      (this._hooks[t] = this._hooks[t] || []),
      this._hooks[t].push(n),
      () => {
        n && (this.removeHook(t, n), (n = void 0));
      }
    );
  }
  hookOnce(t, n) {
    let r,
      s = (...o) => (typeof r == 'function' && r(), (r = void 0), (s = void 0), n(...o));
    return (r = this.hook(t, s)), r;
  }
  removeHook(t, n) {
    if (this._hooks[t]) {
      const r = this._hooks[t].indexOf(n);
      r !== -1 && this._hooks[t].splice(r, 1), this._hooks[t].length === 0 && delete this._hooks[t];
    }
  }
  deprecateHook(t, n) {
    this._deprecatedHooks[t] = typeof n == 'string' ? { to: n } : n;
    const r = this._hooks[t] || [];
    delete this._hooks[t];
    for (const s of r) this.hook(t, s);
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t);
    for (const n in t) this.deprecateHook(n, t[n]);
  }
  addHooks(t) {
    const n = Ea(t),
      r = Object.keys(n).map((s) => this.hook(s, n[s]));
    return () => {
      for (const s of r.splice(0, r.length)) s();
    };
  }
  removeHooks(t) {
    const n = Ea(t);
    for (const r in n) this.removeHook(r, n[r]);
  }
  removeAllHooks() {
    for (const t in this._hooks) delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(Sv, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(Ev, t, ...n);
  }
  callHookWith(t, n, ...r) {
    const s = this._before || this._after ? { name: n, args: r, context: {} } : void 0;
    this._before && Hi(this._before, s);
    const o = t(n in this._hooks ? [...this._hooks[n]] : [], r);
    return o instanceof Promise
      ? o.finally(() => {
          this._after && s && Hi(this._after, s);
        })
      : (this._after && s && Hi(this._after, s), o);
  }
  beforeEach(t) {
    return (
      (this._before = this._before || []),
      this._before.push(t),
      () => {
        if (this._before !== void 0) {
          const n = this._before.indexOf(t);
          n !== -1 && this._before.splice(n, 1);
        }
      }
    );
  }
  afterEach(t) {
    return (
      (this._after = this._after || []),
      this._after.push(t),
      () => {
        if (this._after !== void 0) {
          const n = this._after.indexOf(t);
          n !== -1 && this._after.splice(n, 1);
        }
      }
    );
  }
}
function qd() {
  return new xv();
}
function Av(e = {}) {
  let t,
    n = !1;
  const r = (i) => {
    if (t && t !== i) throw new Error('Context conflict');
  };
  let s;
  if (e.asyncContext) {
    const i = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    i ? (s = new i()) : console.warn('[unctx] `AsyncLocalStorage` is not provided.');
  }
  const o = () => {
    if (s) {
      const i = s.getStore();
      if (i !== void 0) return i;
    }
    return t;
  };
  return {
    use: () => {
      const i = o();
      if (i === void 0) throw new Error('Context is not available');
      return i;
    },
    tryUse: () => o(),
    set: (i, a) => {
      a || r(i), (t = i), (n = !0);
    },
    unset: () => {
      (t = void 0), (n = !1);
    },
    call: (i, a) => {
      r(i), (t = i);
      try {
        return s ? s.run(i, a) : a();
      } finally {
        n || (t = void 0);
      }
    },
    async callAsync(i, a) {
      t = i;
      const l = () => {
          t = i;
        },
        c = () => (t === i ? l : void 0);
      xa.add(c);
      try {
        const u = s ? s.run(i, a) : a();
        return n || (t = void 0), await u;
      } finally {
        xa.delete(c);
      }
    },
  };
}
function Tv(e = {}) {
  const t = {};
  return {
    get(n, r = {}) {
      return t[n] || (t[n] = Av({ ...e, ...r })), t[n];
    },
  };
}
const Oo =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof globalThis < 'u'
          ? globalThis
          : typeof window < 'u'
            ? window
            : {},
  Pc = '__unctx__',
  $v = Oo[Pc] || (Oo[Pc] = Tv()),
  Rv = (e, t = {}) => $v.get(e, t),
  kc = '__unctx_async_handlers__',
  xa = Oo[kc] || (Oo[kc] = new Set());
function xr(e) {
  const t = [];
  for (const s of xa) {
    const o = s();
    o && t.push(o);
  }
  const n = () => {
    for (const s of t) s();
  };
  let r = e();
  return (
    r &&
      typeof r == 'object' &&
      'catch' in r &&
      (r = r.catch((s) => {
        throw (n(), s);
      })),
    [r, n]
  );
}
const Aa = !1,
  Pv = !1,
  kv = { componentName: 'NuxtLink', prefetch: !0, prefetchOn: { visibility: !0 } },
  Ov = null,
  Mv = '#__nuxt',
  Kd = 'nuxt-app',
  Oc = 36e5,
  Nv = 'vite:preloadError';
function Gd(e = Kd) {
  return Rv(e, { asyncContext: !1 });
}
const Lv = '__nuxt_plugin';
function Iv(e) {
  var s;
  let t = 0;
  const n = {
    _id: e.id || Kd || 'nuxt-app',
    _scope: sg(),
    provide: void 0,
    globalName: 'nuxt',
    versions: {
      get nuxt() {
        return '3.15.4';
      },
      get vue() {
        return n.vueApp.version;
      },
    },
    payload: on({
      ...(((s = e.ssrContext) == null ? void 0 : s.payload) || {}),
      data: on({}),
      state: Jt({}),
      once: new Set(),
      _errors: on({}),
    }),
    static: { data: {} },
    runWithContext(o) {
      return n._scope.active && !nl() ? n._scope.run(() => Mc(n, o)) : Mc(n, o);
    },
    isHydrating: !0,
    deferHydration() {
      if (!n.isHydrating) return () => {};
      t++;
      let o = !1;
      return () => {
        if (!o && ((o = !0), t--, t === 0))
          return (n.isHydrating = !1), n.callHook('app:suspense:resolve');
      };
    },
    _asyncDataPromises: {},
    _asyncData: on({}),
    _payloadRevivers: {},
    ...e,
  };
  {
    const o = window.__NUXT__;
    if (o)
      for (const i in o)
        switch (i) {
          case 'data':
          case 'state':
          case '_errors':
            Object.assign(n.payload[i], o[i]);
            break;
          default:
            n.payload[i] = o[i];
        }
  }
  (n.hooks = qd()),
    (n.hook = n.hooks.hook),
    (n.callHook = n.hooks.callHook),
    (n.provide = (o, i) => {
      const a = '$' + o;
      Ws(n, a, i), Ws(n.vueApp.config.globalProperties, a, i);
    }),
    Ws(n.vueApp, '$nuxt', n),
    Ws(n.vueApp.config.globalProperties, '$nuxt', n);
  {
    window.addEventListener(Nv, (i) => {
      n.callHook('app:chunkError', { error: i.payload }),
        (n.isHydrating || i.payload.message.includes('Unable to preload CSS')) &&
          i.preventDefault();
    }),
      (window.useNuxtApp = window.useNuxtApp || Pe);
    const o = n.hook('app:error', (...i) => {
      console.error('[nuxt] error caught during app initialization', ...i);
    });
    n.hook('app:mounted', o);
  }
  const r = n.payload.config;
  return n.provide('config', r), n;
}
function Hv(e, t) {
  t.hooks && e.hooks.addHooks(t.hooks);
}
async function jv(e, t) {
  if (typeof t == 'function') {
    const { provide: n } = (await e.runWithContext(() => t(e))) || {};
    if (n && typeof n == 'object') for (const r in n) e.provide(r, n[r]);
  }
}
async function Fv(e, t) {
  const n = [],
    r = [],
    s = [],
    o = [];
  let i = 0;
  async function a(l) {
    var u;
    const c =
      ((u = l.dependsOn) == null
        ? void 0
        : u.filter((d) => t.some((h) => h._name === d) && !n.includes(d))) ?? [];
    if (c.length > 0) r.push([new Set(c), l]);
    else {
      const d = jv(e, l).then(async () => {
        l._name &&
          (n.push(l._name),
          await Promise.all(
            r.map(async ([h, f]) => {
              h.has(l._name) && (h.delete(l._name), h.size === 0 && (i++, await a(f)));
            }),
          ));
      });
      l.parallel ? s.push(d.catch((h) => o.push(h))) : await d;
    }
  }
  for (const l of t) Hv(e, l);
  for (const l of t) await a(l);
  if ((await Promise.all(s), i)) for (let l = 0; l < i; l++) await Promise.all(s);
  if (o.length) throw o[0];
}
function Ht(e) {
  if (typeof e == 'function') return e;
  const t = e._name || e.name;
  return delete e.name, Object.assign(e.setup || (() => {}), e, { [Lv]: !0, _name: t });
}
function Mc(e, t, n) {
  const r = () => t();
  return Gd(e._id).set(e), e.vueApp.runWithContext(r);
}
function Dv(e) {
  var n;
  let t;
  return (
    ni() && (t = (n = Nn()) == null ? void 0 : n.appContext.app.$nuxt),
    (t = t || Gd(e).tryUse()),
    t || null
  );
}
function Pe(e) {
  const t = Dv(e);
  if (!t) throw new Error('[nuxt] instance unavailable');
  return t;
}
function Fr(e) {
  return Pe().$config;
}
function Ws(e, t, n) {
  Object.defineProperty(e, t, { get: () => n });
}
function Bv(e, t) {
  return { ctx: { table: e }, matchAll: (n) => Yd(n, e) };
}
function Jd(e) {
  const t = {};
  for (const n in e)
    t[n] =
      n === 'dynamic'
        ? new Map(Object.entries(e[n]).map(([r, s]) => [r, Jd(s)]))
        : new Map(Object.entries(e[n]));
  return t;
}
function Uv(e) {
  return Bv(Jd(e));
}
function Yd(e, t, n) {
  e.endsWith('/') && (e = e.slice(0, -1) || '/');
  const r = [];
  for (const [o, i] of Nc(t.wildcard)) (e === o || e.startsWith(o + '/')) && r.push(i);
  for (const [o, i] of Nc(t.dynamic))
    if (e.startsWith(o + '/')) {
      const a = '/' + e.slice(o.length).split('/').splice(2).join('/');
      r.push(...Yd(a, i));
    }
  const s = t.static.get(e);
  return s && r.push(s), r.filter(Boolean);
}
function Nc(e) {
  return [...e.entries()].sort((t, n) => t[0].length - n[0].length);
}
function ji(e) {
  if (e === null || typeof e != 'object') return !1;
  const t = Object.getPrototypeOf(e);
  return (t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null) ||
    Symbol.iterator in e
    ? !1
    : Symbol.toStringTag in e
      ? Object.prototype.toString.call(e) === '[object Module]'
      : !0;
}
function Ta(e, t, n = '.', r) {
  if (!ji(t)) return Ta(e, {}, n, r);
  const s = Object.assign({}, t);
  for (const o in e) {
    if (o === '__proto__' || o === 'constructor') continue;
    const i = e[o];
    i != null &&
      ((r && r(s, o, i, n)) ||
        (Array.isArray(i) && Array.isArray(s[o])
          ? (s[o] = [...i, ...s[o]])
          : ji(i) && ji(s[o])
            ? (s[o] = Ta(i, s[o], (n ? `${n}.` : '') + o.toString(), r))
            : (s[o] = i)));
  }
  return s;
}
function Wv(e) {
  return (...t) => t.reduce((n, r) => Ta(n, r, '', e), {});
}
const Xd = Wv();
function zv(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
class $a extends Error {
  constructor(n, r = {}) {
    super(n, r);
    xe(this, 'statusCode', 500);
    xe(this, 'fatal', !1);
    xe(this, 'unhandled', !1);
    xe(this, 'statusMessage');
    xe(this, 'data');
    xe(this, 'cause');
    r.cause && !this.cause && (this.cause = r.cause);
  }
  toJSON() {
    const n = { message: this.message, statusCode: Pa(this.statusCode, 500) };
    return (
      this.statusMessage && (n.statusMessage = Zd(this.statusMessage)),
      this.data !== void 0 && (n.data = this.data),
      n
    );
  }
}
xe($a, '__h3_error__', !0);
function Ra(e) {
  if (typeof e == 'string') return new $a(e);
  if (Vv(e)) return e;
  const t = new $a(e.message ?? e.statusMessage ?? '', { cause: e.cause || e });
  if (zv(e, 'stack'))
    try {
      Object.defineProperty(t, 'stack', {
        get() {
          return e.stack;
        },
      });
    } catch {
      try {
        t.stack = e.stack;
      } catch {}
    }
  if (
    (e.data && (t.data = e.data),
    e.statusCode
      ? (t.statusCode = Pa(e.statusCode, t.statusCode))
      : e.status && (t.statusCode = Pa(e.status, t.statusCode)),
    e.statusMessage
      ? (t.statusMessage = e.statusMessage)
      : e.statusText && (t.statusMessage = e.statusText),
    t.statusMessage)
  ) {
    const n = t.statusMessage;
    Zd(t.statusMessage) !== n &&
      console.warn(
        '[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.',
      );
  }
  return (
    e.fatal !== void 0 && (t.fatal = e.fatal),
    e.unhandled !== void 0 && (t.unhandled = e.unhandled),
    t
  );
}
function Vv(e) {
  var t;
  return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.__h3_error__) === !0;
}
const qv = /[^\u0009\u0020-\u007E]/g;
function Zd(e = '') {
  return e.replace(qv, '');
}
function Pa(e, t = 200) {
  return !e || (typeof e == 'string' && (e = Number.parseInt(e, 10)), e < 100 || e > 999) ? t : e;
}
const Kv = Symbol('layout-meta'),
  ci = Symbol('route'),
  nt = () => {
    var e;
    return (e = Pe()) == null ? void 0 : e.$router;
  },
  Qd = () => (ni() ? lt(ci, Pe()._route) : Pe()._route);
const Gv = () => {
    try {
      if (Pe()._processingMiddleware) return !0;
    } catch {
      return !1;
    }
    return !1;
  },
  Jv = (e, t) => {
    e || (e = '/');
    const n = typeof e == 'string' ? e : 'path' in e ? ka(e) : nt().resolve(e).href;
    if (t != null && t.open) {
      const { target: l = '_blank', windowFeatures: c = {} } = t.open,
        u = Object.entries(c)
          .filter(([d, h]) => h !== void 0)
          .map(([d, h]) => `${d.toLowerCase()}=${h}`)
          .join(', ');
      return open(n, l, u), Promise.resolve();
    }
    const r = un(n, { acceptRelative: !0 }),
      s = (t == null ? void 0 : t.external) || r;
    if (s) {
      if (!(t != null && t.external))
        throw new Error(
          'Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.',
        );
      const { protocol: l } = new URL(n, window.location.href);
      if (l && Yy(l)) throw new Error(`Cannot navigate to a URL with '${l}' protocol.`);
    }
    const o = Gv();
    if (!s && o)
      return t != null && t.replace
        ? typeof e == 'string'
          ? { path: e, replace: !0 }
          : { ...e, replace: !0 }
        : e;
    const i = nt(),
      a = Pe();
    return s
      ? (a._scope.stop(),
        t != null && t.replace ? location.replace(n) : (location.href = n),
        o ? (a.isHydrating ? new Promise(() => {}) : !1) : Promise.resolve())
      : t != null && t.replace
        ? i.replace(e)
        : i.push(e);
  };
function ka(e) {
  return Fd(e.path || '', e.query || {}) + (e.hash || '');
}
const eh = '__nuxt_error',
  ui = () => jf(Pe().payload, 'error'),
  gr = (e) => {
    const t = fi(e);
    try {
      const n = Pe(),
        r = ui();
      n.hooks.callHook('app:error', t), (r.value = r.value || t);
    } catch {
      throw t;
    }
    return t;
  },
  Yv = async (e = {}) => {
    const t = Pe(),
      n = ui();
    t.callHook('app:error:cleared', e),
      e.redirect && (await nt().replace(e.redirect)),
      (n.value = Ov);
  },
  Xv = (e) => !!e && typeof e == 'object' && eh in e,
  fi = (e) => {
    const t = Ra(e);
    return Object.defineProperty(t, eh, { value: !0, configurable: !1, writable: !1 }), t;
  };
function Lc(e) {
  const t = Qv(e),
    n = new ArrayBuffer(t.length),
    r = new DataView(n);
  for (let s = 0; s < n.byteLength; s++) r.setUint8(s, t.charCodeAt(s));
  return n;
}
const Zv = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function Qv(e) {
  e.length % 4 === 0 && (e = e.replace(/==?$/, ''));
  let t = '',
    n = 0,
    r = 0;
  for (let s = 0; s < e.length; s++)
    (n <<= 6),
      (n |= Zv.indexOf(e[s])),
      (r += 6),
      r === 24 &&
        ((t += String.fromCharCode((n & 16711680) >> 16)),
        (t += String.fromCharCode((n & 65280) >> 8)),
        (t += String.fromCharCode(n & 255)),
        (n = r = 0));
  return (
    r === 12
      ? ((n >>= 4), (t += String.fromCharCode(n)))
      : r === 18 &&
        ((n >>= 2),
        (t += String.fromCharCode((n & 65280) >> 8)),
        (t += String.fromCharCode(n & 255))),
    t
  );
}
const ew = -1,
  tw = -2,
  nw = -3,
  rw = -4,
  sw = -5,
  ow = -6;
function iw(e, t) {
  return aw(JSON.parse(e), t);
}
function aw(e, t) {
  if (typeof e == 'number') return s(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw new Error('Invalid input');
  const n = e,
    r = Array(n.length);
  function s(o, i = !1) {
    if (o === ew) return;
    if (o === nw) return NaN;
    if (o === rw) return 1 / 0;
    if (o === sw) return -1 / 0;
    if (o === ow) return -0;
    if (i) throw new Error('Invalid input');
    if (o in r) return r[o];
    const a = n[o];
    if (!a || typeof a != 'object') r[o] = a;
    else if (Array.isArray(a))
      if (typeof a[0] == 'string') {
        const l = a[0],
          c = t == null ? void 0 : t[l];
        if (c) return (r[o] = c(s(a[1])));
        switch (l) {
          case 'Date':
            r[o] = new Date(a[1]);
            break;
          case 'Set':
            const u = new Set();
            r[o] = u;
            for (let f = 1; f < a.length; f += 1) u.add(s(a[f]));
            break;
          case 'Map':
            const d = new Map();
            r[o] = d;
            for (let f = 1; f < a.length; f += 2) d.set(s(a[f]), s(a[f + 1]));
            break;
          case 'RegExp':
            r[o] = new RegExp(a[1], a[2]);
            break;
          case 'Object':
            r[o] = Object(a[1]);
            break;
          case 'BigInt':
            r[o] = BigInt(a[1]);
            break;
          case 'null':
            const h = Object.create(null);
            r[o] = h;
            for (let f = 1; f < a.length; f += 2) h[a[f]] = s(a[f + 1]);
            break;
          case 'Int8Array':
          case 'Uint8Array':
          case 'Uint8ClampedArray':
          case 'Int16Array':
          case 'Uint16Array':
          case 'Int32Array':
          case 'Uint32Array':
          case 'Float32Array':
          case 'Float64Array':
          case 'BigInt64Array':
          case 'BigUint64Array': {
            const f = globalThis[l],
              p = a[1],
              m = Lc(p),
              b = new f(m);
            r[o] = b;
            break;
          }
          case 'ArrayBuffer': {
            const f = a[1],
              p = Lc(f);
            r[o] = p;
            break;
          }
          default:
            throw new Error(`Unknown type ${l}`);
        }
      } else {
        const l = new Array(a.length);
        r[o] = l;
        for (let c = 0; c < a.length; c += 1) {
          const u = a[c];
          u !== tw && (l[c] = s(u));
        }
      }
    else {
      const l = {};
      r[o] = l;
      for (const c in a) {
        const u = a[c];
        l[c] = s(u);
      }
    }
    return r[o];
  }
  return s(0);
}
const lw = new Set(['title', 'titleTemplate', 'script', 'style', 'noscript']),
  so = new Set(['base', 'meta', 'link', 'style', 'script', 'noscript']),
  cw = new Set([
    'title',
    'titleTemplate',
    'templateParams',
    'base',
    'htmlAttrs',
    'bodyAttrs',
    'meta',
    'link',
    'style',
    'script',
    'noscript',
  ]),
  uw = new Set(['base', 'title', 'titleTemplate', 'bodyAttrs', 'htmlAttrs', 'templateParams']),
  th = new Set([
    'tagPosition',
    'tagPriority',
    'tagDuplicateStrategy',
    'children',
    'innerHTML',
    'textContent',
    'processTemplateParams',
  ]),
  fw = typeof window < 'u';
function Mo(e) {
  let t = 9;
  for (let n = 0; n < e.length; ) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
  return ((t ^ (t >>> 9)) + 65536).toString(16).substring(1, 8).toLowerCase();
}
function Oa(e) {
  if (e._h) return e._h;
  if (e._d) return Mo(e._d);
  let t = `${e.tag}:${e.textContent || e.innerHTML || ''}:`;
  for (const n in e.props) t += `${n}:${String(e.props[n])},`;
  return Mo(t);
}
function dw(e, t) {
  return e instanceof Promise ? e.then(t) : t(e);
}
function Ma(e, t, n, r) {
  const s =
    r ||
    rh(
      typeof t == 'object' && typeof t != 'function' && !(t instanceof Promise)
        ? { ...t }
        : {
            [e === 'script' || e === 'noscript' || e === 'style' ? 'innerHTML' : 'textContent']: t,
          },
      e === 'templateParams' || e === 'titleTemplate',
    );
  if (s instanceof Promise) return s.then((i) => Ma(e, t, n, i));
  const o = { tag: e, props: s };
  for (const i of th) {
    const a = o.props[i] !== void 0 ? o.props[i] : n[i];
    a !== void 0 &&
      ((!(i === 'innerHTML' || i === 'textContent' || i === 'children') || lw.has(o.tag)) &&
        (o[i === 'children' ? 'innerHTML' : i] = a),
      delete o.props[i]);
  }
  return (
    o.props.body && ((o.tagPosition = 'bodyClose'), delete o.props.body),
    o.tag === 'script' &&
      typeof o.innerHTML == 'object' &&
      ((o.innerHTML = JSON.stringify(o.innerHTML)),
      (o.props.type = o.props.type || 'application/json')),
    Array.isArray(o.props.content)
      ? o.props.content.map((i) => ({ ...o, props: { ...o.props, content: i } }))
      : o
  );
}
function hw(e, t) {
  var r;
  const n = e === 'class' ? ' ' : ';';
  return (
    t &&
      typeof t == 'object' &&
      !Array.isArray(t) &&
      (t = Object.entries(t)
        .filter(([, s]) => s)
        .map(([s, o]) => (e === 'style' ? `${s}:${o}` : s))),
    (r = String(Array.isArray(t) ? t.join(n) : t)) == null
      ? void 0
      : r
          .split(n)
          .filter((s) => !!s.trim())
          .join(n)
  );
}
function nh(e, t, n, r) {
  for (let s = r; s < n.length; s += 1) {
    const o = n[s];
    if (o === 'class' || o === 'style') {
      e[o] = hw(o, e[o]);
      continue;
    }
    if (e[o] instanceof Promise) return e[o].then((i) => ((e[o] = i), nh(e, t, n, s)));
    if (!t && !th.has(o)) {
      const i = String(e[o]),
        a = o.startsWith('data-');
      i === 'true' || i === ''
        ? (e[o] = a ? 'true' : !0)
        : e[o] || (a && i === 'false' ? (e[o] = 'false') : delete e[o]);
    }
  }
}
function rh(e, t = !1) {
  const n = nh(e, t, Object.keys(e), 0);
  return n instanceof Promise ? n.then(() => e) : e;
}
const pw = 10;
function sh(e, t, n) {
  for (let r = n; r < t.length; r += 1) {
    const s = t[r];
    if (s instanceof Promise) return s.then((o) => ((t[r] = o), sh(e, t, r)));
    Array.isArray(s) ? e.push(...s) : e.push(s);
  }
}
function gw(e) {
  const t = [],
    n = e.resolvedInput;
  for (const s in n) {
    if (!Object.prototype.hasOwnProperty.call(n, s)) continue;
    const o = n[s];
    if (!(o === void 0 || !cw.has(s))) {
      if (Array.isArray(o)) {
        for (const i of o) t.push(Ma(s, i, e));
        continue;
      }
      t.push(Ma(s, o, e));
    }
  }
  if (t.length === 0) return [];
  const r = [];
  return dw(sh(r, t, 0), () =>
    r.map((s, o) => ((s._e = e._i), e.mode && (s._m = e.mode), (s._p = (e._i << pw) + o), s)),
  );
}
const Ic = new Set(['onload', 'onerror', 'onabort', 'onprogress', 'onloadstart']),
  Hc = { base: -10, title: 10 },
  jc = { critical: -80, high: -10, low: 20 };
function No(e) {
  const t = e.tagPriority;
  if (typeof t == 'number') return t;
  let n = 100;
  return (
    e.tag === 'meta'
      ? e.props['http-equiv'] === 'content-security-policy'
        ? (n = -30)
        : e.props.charset
          ? (n = -20)
          : e.props.name === 'viewport' && (n = -15)
      : e.tag === 'link' && e.props.rel === 'preconnect'
        ? (n = 20)
        : e.tag in Hc && (n = Hc[e.tag]),
    t && t in jc ? n + jc[t] : n
  );
}
const mw = [
    { prefix: 'before:', offset: -1 },
    { prefix: 'after:', offset: 1 },
  ],
  yw = ['name', 'property', 'http-equiv'];
function oh(e) {
  const { props: t, tag: n } = e;
  if (uw.has(n)) return n;
  if (n === 'link' && t.rel === 'canonical') return 'canonical';
  if (t.charset) return 'charset';
  if (t.id) return `${n}:id:${t.id}`;
  for (const r of yw) if (t[r] !== void 0) return `${n}:${r}:${t[r]}`;
  return !1;
}
const wn = '%separator';
function vw(e, t, n = !1) {
  var s;
  let r;
  if (t === 's' || t === 'pageTitle') r = e.pageTitle;
  else if (t.includes('.')) {
    const o = t.indexOf('.');
    r = (s = e[t.substring(0, o)]) == null ? void 0 : s[t.substring(o + 1)];
  } else r = e[t];
  if (r !== void 0) return n ? (r || '').replace(/"/g, '\\"') : r || '';
}
const ww = new RegExp(`${wn}(?:\\s*${wn})*`, 'g');
function zs(e, t, n, r = !1) {
  if (typeof e != 'string' || !e.includes('%')) return e;
  let s = e;
  try {
    s = decodeURI(e);
  } catch {}
  const o = s.match(/%\w+(?:\.\w+)?/g);
  if (!o) return e;
  const i = e.includes(wn);
  return (
    (e = e
      .replace(/%\w+(?:\.\w+)?/g, (a) => {
        if (a === wn || !o.includes(a)) return a;
        const l = vw(t, a.slice(1), r);
        return l !== void 0 ? l : a;
      })
      .trim()),
    i &&
      (e.endsWith(wn) && (e = e.slice(0, -wn.length)),
      e.startsWith(wn) && (e = e.slice(wn.length)),
      (e = e.replace(ww, n).trim())),
    e
  );
}
function Fc(e, t) {
  return e == null ? t || null : typeof e == 'function' ? e(t) : e;
}
async function ih(e, t = {}) {
  const n = t.document || e.resolvedOptions.document;
  if (!n || !e.dirty) return;
  const r = { shouldRender: !0, tags: [] };
  if ((await e.hooks.callHook('dom:beforeRender', r), !!r.shouldRender))
    return (
      e._domUpdatePromise ||
        (e._domUpdatePromise = new Promise(async (s) => {
          var d;
          const o = (await e.resolveTags()).map((h) => ({
            tag: h,
            id: so.has(h.tag) ? Oa(h) : h.tag,
            shouldRender: !0,
          }));
          let i = e._dom;
          if (!i) {
            i = { elMap: { htmlAttrs: n.documentElement, bodyAttrs: n.body } };
            const h = new Set();
            for (const f of ['body', 'head']) {
              const p = (d = n[f]) == null ? void 0 : d.children;
              for (const m of p) {
                const b = m.tagName.toLowerCase();
                if (!so.has(b)) continue;
                const y = {
                    tag: b,
                    props: await rh(
                      m
                        .getAttributeNames()
                        .reduce((x, $) => ({ ...x, [$]: m.getAttribute($) }), {}),
                    ),
                    innerHTML: m.innerHTML,
                  },
                  _ = oh(y);
                let g = _,
                  v = 1;
                for (; g && h.has(g); ) g = `${_}:${v++}`;
                g && ((y._d = g), h.add(g)), (i.elMap[m.getAttribute('data-hid') || Oa(y)] = m);
              }
            }
          }
          (i.pendingSideEffects = { ...i.sideEffects }), (i.sideEffects = {});
          function a(h, f, p) {
            const m = `${h}:${f}`;
            (i.sideEffects[m] = p), delete i.pendingSideEffects[m];
          }
          function l({ id: h, $el: f, tag: p }) {
            const m = p.tag.endsWith('Attrs');
            if (
              ((i.elMap[h] = f),
              m ||
                (p.textContent &&
                  p.textContent !== f.textContent &&
                  (f.textContent = p.textContent),
                p.innerHTML && p.innerHTML !== f.innerHTML && (f.innerHTML = p.innerHTML),
                a(h, 'el', () => {
                  var b;
                  (b = i.elMap[h]) == null || b.remove(), delete i.elMap[h];
                })),
              p._eventHandlers)
            )
              for (const b in p._eventHandlers)
                Object.prototype.hasOwnProperty.call(p._eventHandlers, b) &&
                  f.getAttribute(`data-${b}`) !== '' &&
                  ((p.tag === 'bodyAttrs' ? n.defaultView : f).addEventListener(
                    b.substring(2),
                    p._eventHandlers[b].bind(f),
                  ),
                  f.setAttribute(`data-${b}`, ''));
            for (const b in p.props) {
              if (!Object.prototype.hasOwnProperty.call(p.props, b)) continue;
              const y = p.props[b],
                _ = `attr:${b}`;
              if (b === 'class') {
                if (!y) continue;
                for (const g of y.split(' '))
                  m && a(h, `${_}:${g}`, () => f.classList.remove(g)),
                    !f.classList.contains(g) && f.classList.add(g);
              } else if (b === 'style') {
                if (!y) continue;
                for (const g of y.split(';')) {
                  const v = g.indexOf(':'),
                    x = g.substring(0, v).trim(),
                    $ = g.substring(v + 1).trim();
                  a(h, `${_}:${x}`, () => {
                    f.style.removeProperty(x);
                  }),
                    f.style.setProperty(x, $);
                }
              } else
                f.getAttribute(b) !== y && f.setAttribute(b, y === !0 ? '' : String(y)),
                  m && a(h, _, () => f.removeAttribute(b));
            }
          }
          const c = [],
            u = { bodyClose: void 0, bodyOpen: void 0, head: void 0 };
          for (const h of o) {
            const { tag: f, shouldRender: p, id: m } = h;
            if (p) {
              if (f.tag === 'title') {
                n.title = f.textContent;
                continue;
              }
              (h.$el = h.$el || i.elMap[m]), h.$el ? l(h) : so.has(f.tag) && c.push(h);
            }
          }
          for (const h of c) {
            const f = h.tag.tagPosition || 'head';
            (h.$el = n.createElement(h.tag.tag)),
              l(h),
              (u[f] = u[f] || n.createDocumentFragment()),
              u[f].appendChild(h.$el);
          }
          for (const h of o) await e.hooks.callHook('dom:renderTag', h, n, a);
          u.head && n.head.appendChild(u.head),
            u.bodyOpen && n.body.insertBefore(u.bodyOpen, n.body.firstChild),
            u.bodyClose && n.body.appendChild(u.bodyClose);
          for (const h in i.pendingSideEffects) i.pendingSideEffects[h]();
          (e._dom = i), await e.hooks.callHook('dom:rendered', { renders: o }), s();
        }).finally(() => {
          (e._domUpdatePromise = void 0), (e.dirty = !1);
        })),
      e._domUpdatePromise
    );
}
function bw(e, t = {}) {
  const n = t.delayFn || ((r) => setTimeout(r, 10));
  return (e._domDebouncedUpdatePromise =
    e._domDebouncedUpdatePromise ||
    new Promise((r) =>
      n(() =>
        ih(e, t).then(() => {
          delete e._domDebouncedUpdatePromise, r();
        }),
      ),
    ));
}
function _w(e) {
  return (t) => {
    var r, s;
    const n =
      ((s =
        (r = t.resolvedOptions.document) == null
          ? void 0
          : r.head.querySelector('script[id="unhead:payload"]')) == null
        ? void 0
        : s.innerHTML) || !1;
    return (
      n && t.push(JSON.parse(n)),
      {
        mode: 'client',
        hooks: {
          'entries:updated': (o) => {
            bw(o, e);
          },
        },
      }
    );
  };
}
const Cw = new Set(['templateParams', 'htmlAttrs', 'bodyAttrs']),
  Sw = {
    hooks: {
      'tag:normalise': ({ tag: e }) => {
        e.props.hid && ((e.key = e.props.hid), delete e.props.hid),
          e.props.vmid && ((e.key = e.props.vmid), delete e.props.vmid),
          e.props.key && ((e.key = e.props.key), delete e.props.key);
        const t = oh(e);
        t && !t.startsWith('meta:og:') && !t.startsWith('meta:twitter:') && delete e.key;
        const n = t || (e.key ? `${e.tag}:${e.key}` : !1);
        n && (e._d = n);
      },
      'tags:resolve': (e) => {
        const t = Object.create(null);
        for (const r of e.tags) {
          const s = (r.key ? `${r.tag}:${r.key}` : r._d) || Oa(r),
            o = t[s];
          if (o) {
            let a = r == null ? void 0 : r.tagDuplicateStrategy;
            if ((!a && Cw.has(r.tag) && (a = 'merge'), a === 'merge')) {
              const l = o.props;
              l.style &&
                r.props.style &&
                (l.style[l.style.length - 1] !== ';' && (l.style += ';'),
                (r.props.style = `${l.style} ${r.props.style}`)),
                l.class && r.props.class
                  ? (r.props.class = `${l.class} ${r.props.class}`)
                  : l.class && (r.props.class = l.class),
                (t[s].props = { ...l, ...r.props });
              continue;
            } else if (r._e === o._e) {
              (o._duped = o._duped || []),
                (r._d = `${o._d}:${o._duped.length + 1}`),
                o._duped.push(r);
              continue;
            } else if (No(r) > No(o)) continue;
          }
          if (
            !(r.innerHTML || r.textContent || Object.keys(r.props).length !== 0) &&
            so.has(r.tag)
          ) {
            delete t[s];
            continue;
          }
          t[s] = r;
        }
        const n = [];
        for (const r in t) {
          const s = t[r],
            o = s._duped;
          n.push(s), o && (delete s._duped, n.push(...o));
        }
        (e.tags = n),
          (e.tags = e.tags.filter(
            (r) => !(r.tag === 'meta' && (r.props.name || r.props.property) && !r.props.content),
          ));
      },
    },
  },
  Ew = new Set(['script', 'link', 'bodyAttrs']),
  xw = (e) => ({
    hooks: {
      'tags:resolve': (t) => {
        for (const n of t.tags) {
          if (!Ew.has(n.tag)) continue;
          const r = n.props;
          for (const s in r) {
            if (s[0] !== 'o' || s[1] !== 'n' || !Object.prototype.hasOwnProperty.call(r, s))
              continue;
            const o = r[s];
            typeof o == 'function' &&
              (e.ssr && Ic.has(s) ? (r[s] = `this.dataset.${s}fired = true`) : delete r[s],
              (n._eventHandlers = n._eventHandlers || {}),
              (n._eventHandlers[s] = o));
          }
          e.ssr &&
            n._eventHandlers &&
            (n.props.src || n.props.href) &&
            (n.key = n.key || Mo(n.props.src || n.props.href));
        }
      },
      'dom:renderTag': ({ $el: t, tag: n }) => {
        var s, o;
        const r = t == null ? void 0 : t.dataset;
        if (r)
          for (const i in r) {
            if (!i.endsWith('fired')) continue;
            const a = i.slice(0, -5);
            Ic.has(a) &&
              ((o = (s = n._eventHandlers) == null ? void 0 : s[a]) == null ||
                o.call(t, new Event(a.substring(2))));
          }
      },
    },
  }),
  Aw = new Set(['link', 'style', 'script', 'noscript']),
  Tw = {
    hooks: {
      'tag:normalise': ({ tag: e }) => {
        e.key && Aw.has(e.tag) && (e.props['data-hid'] = e._h = Mo(e.key));
      },
    },
  },
  $w = {
    mode: 'server',
    hooks: {
      'tags:beforeResolve': (e) => {
        const t = {};
        let n = !1;
        for (const r of e.tags)
          r._m !== 'server' ||
            (r.tag !== 'titleTemplate' && r.tag !== 'templateParams' && r.tag !== 'title') ||
            ((t[r.tag] = r.tag === 'title' || r.tag === 'titleTemplate' ? r.textContent : r.props),
            (n = !0));
        n &&
          e.tags.push({
            tag: 'script',
            innerHTML: JSON.stringify(t),
            props: { id: 'unhead:payload', type: 'application/json' },
          });
      },
    },
  },
  Rw = {
    hooks: {
      'tags:resolve': (e) => {
        var t;
        for (const n of e.tags)
          if (typeof n.tagPriority == 'string')
            for (const { prefix: r, offset: s } of mw) {
              if (!n.tagPriority.startsWith(r)) continue;
              const o = n.tagPriority.substring(r.length),
                i = (t = e.tags.find((a) => a._d === o)) == null ? void 0 : t._p;
              if (i !== void 0) {
                n._p = i + s;
                break;
              }
            }
        e.tags.sort((n, r) => {
          const s = No(n),
            o = No(r);
          return s < o ? -1 : s > o ? 1 : n._p - r._p;
        });
      },
    },
  },
  Pw = { meta: 'content', link: 'href', htmlAttrs: 'lang' },
  kw = ['innerHTML', 'textContent'],
  Ow = (e) => ({
    hooks: {
      'tags:resolve': (t) => {
        var i;
        const { tags: n } = t;
        let r;
        for (let a = 0; a < n.length; a += 1)
          n[a].tag === 'templateParams' && ((r = t.tags.splice(a, 1)[0].props), (a -= 1));
        const s = r || {},
          o = s.separator || '|';
        delete s.separator,
          (s.pageTitle = zs(
            s.pageTitle ||
              ((i = n.find((a) => a.tag === 'title')) == null ? void 0 : i.textContent) ||
              '',
            s,
            o,
          ));
        for (const a of n) {
          if (a.processTemplateParams === !1) continue;
          const l = Pw[a.tag];
          if (l && typeof a.props[l] == 'string') a.props[l] = zs(a.props[l], s, o);
          else if (a.processTemplateParams || a.tag === 'titleTemplate' || a.tag === 'title')
            for (const c of kw)
              typeof a[c] == 'string' &&
                (a[c] = zs(a[c], s, o, a.tag === 'script' && a.props.type.endsWith('json')));
        }
        (e._templateParams = s), (e._separator = o);
      },
      'tags:afterResolve': ({ tags: t }) => {
        let n;
        for (let r = 0; r < t.length; r += 1) {
          const s = t[r];
          s.tag === 'title' && s.processTemplateParams !== !1 && (n = s);
        }
        n != null &&
          n.textContent &&
          (n.textContent = zs(n.textContent, e._templateParams, e._separator));
      },
    },
  }),
  Mw = {
    hooks: {
      'tags:resolve': (e) => {
        const { tags: t } = e;
        let n, r;
        for (let s = 0; s < t.length; s += 1) {
          const o = t[s];
          o.tag === 'title' ? (n = o) : o.tag === 'titleTemplate' && (r = o);
        }
        if (r && n) {
          const s = Fc(r.textContent, n.textContent);
          s !== null ? (n.textContent = s || n.textContent) : e.tags.splice(e.tags.indexOf(n), 1);
        } else if (r) {
          const s = Fc(r.textContent);
          s !== null && ((r.textContent = s), (r.tag = 'title'), (r = void 0));
        }
        r && e.tags.splice(e.tags.indexOf(r), 1);
      },
    },
  },
  Nw = {
    hooks: {
      'tags:afterResolve': (e) => {
        for (const t of e.tags)
          typeof t.innerHTML == 'string' &&
            (t.innerHTML &&
            (t.props.type === 'application/ld+json' || t.props.type === 'application/json')
              ? (t.innerHTML = t.innerHTML.replace(/</g, '\\u003C'))
              : (t.innerHTML = t.innerHTML.replace(new RegExp(`</${t.tag}`, 'g'), `<\\/${t.tag}`)));
      },
    },
  };
let ah;
function Lw(e = {}) {
  const t = Iw(e);
  return t.use(_w()), (ah = t);
}
function Dc(e, t) {
  return !e || (e === 'server' && t) || (e === 'client' && !t);
}
function Iw(e = {}) {
  const t = qd();
  t.addHooks(e.hooks || {}), (e.document = e.document || (fw ? document : void 0));
  const n = !e.document,
    r = () => {
      (a.dirty = !0), t.callHook('entries:updated', a);
    };
  let s = 0,
    o = [];
  const i = [],
    a = {
      plugins: i,
      dirty: !1,
      resolvedOptions: e,
      hooks: t,
      headEntries() {
        return o;
      },
      use(l) {
        const c = typeof l == 'function' ? l(a) : l;
        (!c.key || !i.some((u) => u.key === c.key)) &&
          (i.push(c), Dc(c.mode, n) && t.addHooks(c.hooks || {}));
      },
      push(l, c) {
        c == null || delete c.head;
        const u = { _i: s++, input: l, ...c };
        return (
          Dc(u.mode, n) && (o.push(u), r()),
          {
            dispose() {
              (o = o.filter((d) => d._i !== u._i)), r();
            },
            patch(d) {
              for (const h of o) h._i === u._i && (h.input = u.input = d);
              r();
            },
          }
        );
      },
      async resolveTags() {
        const l = { tags: [], entries: [...o] };
        await t.callHook('entries:resolve', l);
        for (const c of l.entries) {
          const u = c.resolvedInput || c.input;
          if (((c.resolvedInput = await (c.transform ? c.transform(u) : u)), c.resolvedInput))
            for (const d of await gw(c)) {
              const h = { tag: d, entry: c, resolvedOptions: a.resolvedOptions };
              await t.callHook('tag:normalise', h), l.tags.push(h.tag);
            }
        }
        return (
          await t.callHook('tags:beforeResolve', l),
          await t.callHook('tags:resolve', l),
          await t.callHook('tags:afterResolve', l),
          l.tags
        );
      },
      ssr: n,
    };
  return (
    [Sw, $w, xw, Tw, Rw, Ow, Mw, Nw, ...((e == null ? void 0 : e.plugins) || [])].forEach((l) =>
      a.use(l),
    ),
    a.hooks.callHook('init', a),
    a
  );
}
function Hw() {
  return ah;
}
const jw = Pd[0] === '3';
function Fw(e) {
  return typeof e == 'function' ? e() : oe(e);
}
function Lo(e) {
  if (e instanceof Promise || e instanceof Date || e instanceof RegExp) return e;
  const t = Fw(e);
  if (!e || !t) return t;
  if (Array.isArray(t)) return t.map((n) => Lo(n));
  if (typeof t == 'object') {
    const n = {};
    for (const r in t)
      if (Object.prototype.hasOwnProperty.call(t, r)) {
        if (r === 'titleTemplate' || (r[0] === 'o' && r[1] === 'n')) {
          n[r] = oe(t[r]);
          continue;
        }
        n[r] = Lo(t[r]);
      }
    return n;
  }
  return t;
}
const Dw = {
    hooks: {
      'entries:resolve': (e) => {
        for (const t of e.entries) t.resolvedInput = Lo(t.input);
      },
    },
  },
  lh = 'usehead';
function Bw(e) {
  return {
    install(n) {
      jw &&
        ((n.config.globalProperties.$unhead = e),
        (n.config.globalProperties.$head = e),
        n.provide(lh, e));
    },
  }.install;
}
function Uw(e = {}) {
  e.domDelayFn = e.domDelayFn || ((n) => Mn(() => setTimeout(() => n(), 0)));
  const t = Lw(e);
  return t.use(Dw), (t.install = Bw(t)), t;
}
const Na =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof globalThis < 'u'
          ? globalThis
          : typeof self < 'u'
            ? self
            : {},
  La = '__unhead_injection_handler__';
function Ww(e) {
  Na[La] = e;
}
function zw() {
  return La in Na ? Na[La]() : lt(lh) || Hw();
}
function Vw(e, t = {}) {
  const n = t.head || zw();
  if (n) return n.ssr ? n.push(e, t) : qw(n, e, t);
}
function qw(e, t, n = {}) {
  const r = Te(!1),
    s = Te({});
  vd(() => {
    s.value = r.value ? {} : Lo(t);
  });
  const o = e.push(s.value, n);
  return (
    xt(s, (a) => {
      o.patch(a);
    }),
    Nn() &&
      (Os(() => {
        o.dispose();
      }),
      Jf(() => {
        r.value = !0;
      }),
      Gf(() => {
        r.value = !1;
      })),
    o
  );
}
const Kw = 'modulepreload',
  Gw = function (e, t) {
    return new URL(e, t).href;
  },
  Bc = {},
  mr = function (t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      const i = document.getElementsByTagName('link'),
        a = document.querySelector('meta[property=csp-nonce]'),
        l = (a == null ? void 0 : a.nonce) || (a == null ? void 0 : a.getAttribute('nonce'));
      s = Promise.allSettled(
        n.map((c) => {
          if (((c = Gw(c, r)), c in Bc)) return;
          Bc[c] = !0;
          const u = c.endsWith('.css'),
            d = u ? '[rel="stylesheet"]' : '';
          if (!!r)
            for (let p = i.length - 1; p >= 0; p--) {
              const m = i[p];
              if (m.href === c && (!u || m.rel === 'stylesheet')) return;
            }
          else if (document.querySelector(`link[href="${c}"]${d}`)) return;
          const f = document.createElement('link');
          if (
            ((f.rel = u ? 'stylesheet' : Kw),
            u || (f.as = 'script'),
            (f.crossOrigin = ''),
            (f.href = c),
            l && f.setAttribute('nonce', l),
            document.head.appendChild(f),
            u)
          )
            return new Promise((p, m) => {
              f.addEventListener('load', p),
                f.addEventListener('error', () => m(new Error(`Unable to preload CSS for ${c}`)));
            });
        }),
      );
    }
    function o(i) {
      const a = new Event('vite:preloadError', { cancelable: !0 });
      if (((a.payload = i), window.dispatchEvent(a), !a.defaultPrevented)) throw i;
    }
    return s.then((i) => {
      for (const a of i || []) a.status === 'rejected' && o(a.reason);
      return t().catch(o);
    });
  };
let oo, io;
function Jw() {
  return (
    (oo = $fetch(vl(`builds/meta/${Fr().app.buildId}.json`), { responseType: 'json' })),
    oo
      .then((e) => {
        io = Uv(e.matcher);
      })
      .catch((e) => {
        console.error('[nuxt] Error fetching app manifest.', e);
      }),
    oo
  );
}
function di() {
  return oo || Jw();
}
async function bl(e) {
  const t = typeof e == 'string' ? e : e.path;
  if ((await di(), !io))
    return console.error('[nuxt] Error creating app manifest matcher.', io), {};
  try {
    return Xd({}, ...io.matchAll(t).reverse());
  } catch (n) {
    return console.error('[nuxt] Error matching route rules.', n), {};
  }
}
async function Uc(e, t = {}) {
  const n = await Xw(e, t),
    r = Pe(),
    s = (r._payloadCache = r._payloadCache || {});
  return n in s
    ? s[n] || null
    : ((s[n] = uh(e).then((o) =>
        o ? ch(n).then((i) => i || (delete s[n], null)) : ((s[n] = null), null),
      )),
      s[n]);
}
const Yw = '_payload.json';
async function Xw(e, t = {}) {
  const n = new URL(e, 'http://localhost');
  if (n.host !== 'localhost' || un(n.pathname, { acceptRelative: !0 }))
    throw new Error('Payload URL must not include hostname: ' + e);
  const r = Fr(),
    s = t.hash || (t.fresh ? Date.now() : r.app.buildId),
    o = r.app.cdnURL,
    i = o && (await uh(e)) ? o : r.app.baseURL;
  return li(i, n.pathname, Yw + (s ? `?${s}` : ''));
}
async function ch(e) {
  const t = fetch(e).then((n) => n.text().then(fh));
  try {
    return await t;
  } catch (n) {
    console.warn('[nuxt] Cannot load payload ', e, n);
  }
  return null;
}
async function uh(e = Qd().path) {
  const t = Pe();
  return (
    (e = ai(e)),
    (await di()).prerendered.includes(e)
      ? !0
      : t.runWithContext(async () => {
          const r = await bl({ path: e });
          return !!r.prerender && !r.redirect;
        })
  );
}
let Bn = null;
async function Zw() {
  var r;
  if (Bn) return Bn;
  const e = document.getElementById('__NUXT_DATA__');
  if (!e) return {};
  const t = await fh(e.textContent || ''),
    n = e.dataset.src ? await ch(e.dataset.src) : void 0;
  return (
    (Bn = { ...t, ...n, ...window.__NUXT__ }),
    (r = Bn.config) != null && r.public && (Bn.config.public = Jt(Bn.config.public)),
    Bn
  );
}
async function fh(e) {
  return await iw(e, Pe()._payloadRevivers);
}
function Qw(e, t) {
  Pe()._payloadRevivers[e] = t;
}
const e0 = [
    ['NuxtError', (e) => fi(e)],
    ['EmptyShallowRef', (e) => Ke(e === '_' ? void 0 : e === '0n' ? BigInt(0) : To(e))],
    ['EmptyRef', (e) => Te(e === '_' ? void 0 : e === '0n' ? BigInt(0) : To(e))],
    ['ShallowRef', (e) => Ke(e)],
    ['ShallowReactive', (e) => on(e)],
    ['Ref', (e) => Te(e)],
    ['Reactive', (e) => Jt(e)],
  ],
  t0 = Ht({
    name: 'nuxt:revive-payload:client',
    order: -30,
    async setup(e) {
      let t, n;
      for (const [r, s] of e0) Qw(r, s);
      Object.assign(e.payload, (([t, n] = xr(() => e.runWithContext(Zw))), (t = await t), n(), t)),
        (window.__NUXT__ = e.payload);
    },
  }),
  n0 = [],
  r0 = Ht({
    name: 'nuxt:head',
    enforce: 'pre',
    setup(e) {
      const t = Uw({ plugins: n0 });
      Ww(() => Pe().vueApp._context.provides.usehead), e.vueApp.use(t);
      {
        let n = !0;
        const r = async () => {
          (n = !1), await ih(t);
        };
        t.hooks.hook('dom:beforeRender', (s) => {
          s.shouldRender = !n;
        }),
          e.hooks.hook('page:start', () => {
            n = !0;
          }),
          e.hooks.hook('page:finish', () => {
            e.isHydrating || r();
          }),
          e.hooks.hook('app:error', r),
          e.hooks.hook('app:suspense:resolve', r);
      }
    },
  });
/*!
 * vue-router v4.5.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const dr = typeof document < 'u';
function dh(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e;
}
function s0(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module' || (e.default && dh(e.default));
}
const ye = Object.assign;
function Fi(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = It(s) ? s.map(e) : e(s);
  }
  return n;
}
const ts = () => {},
  It = Array.isArray,
  hh = /#/g,
  o0 = /&/g,
  i0 = /\//g,
  a0 = /=/g,
  l0 = /\?/g,
  ph = /\+/g,
  c0 = /%5B/g,
  u0 = /%5D/g,
  gh = /%5E/g,
  f0 = /%60/g,
  mh = /%7B/g,
  d0 = /%7C/g,
  yh = /%7D/g,
  h0 = /%20/g;
function _l(e) {
  return encodeURI('' + e)
    .replace(d0, '|')
    .replace(c0, '[')
    .replace(u0, ']');
}
function p0(e) {
  return _l(e).replace(mh, '{').replace(yh, '}').replace(gh, '^');
}
function Ia(e) {
  return _l(e)
    .replace(ph, '%2B')
    .replace(h0, '+')
    .replace(hh, '%23')
    .replace(o0, '%26')
    .replace(f0, '`')
    .replace(mh, '{')
    .replace(yh, '}')
    .replace(gh, '^');
}
function g0(e) {
  return Ia(e).replace(a0, '%3D');
}
function m0(e) {
  return _l(e).replace(hh, '%23').replace(l0, '%3F');
}
function y0(e) {
  return e == null ? '' : m0(e).replace(i0, '%2F');
}
function ms(e) {
  try {
    return decodeURIComponent('' + e);
  } catch {}
  return '' + e;
}
const v0 = /\/$/,
  w0 = (e) => e.replace(v0, '');
function Di(e, t, n = '/') {
  let r,
    s = {},
    o = '',
    i = '';
  const a = t.indexOf('#');
  let l = t.indexOf('?');
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 && ((r = t.slice(0, l)), (o = t.slice(l + 1, a > -1 ? a : t.length)), (s = e(o))),
    a > -1 && ((r = r || t.slice(0, a)), (i = t.slice(a, t.length))),
    (r = S0(r ?? t, n)),
    { fullPath: r + (o && '?') + o + i, path: r, query: s, hash: ms(i) }
  );
}
function b0(e, t) {
  const n = t.query ? e(t.query) : '';
  return t.path + (n && '?') + n + (t.hash || '');
}
function Wc(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/';
}
function _0(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1;
  return (
    r > -1 &&
    r === s &&
    Or(t.matched[r], n.matched[s]) &&
    vh(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Or(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function vh(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!C0(e[n], t[n])) return !1;
  return !0;
}
function C0(e, t) {
  return It(e) ? zc(e, t) : It(t) ? zc(t, e) : e === t;
}
function zc(e, t) {
  return It(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function S0(e, t) {
  if (e.startsWith('/')) return e;
  if (!e) return t;
  const n = t.split('/'),
    r = e.split('/'),
    s = r[r.length - 1];
  (s === '..' || s === '.') && r.push('');
  let o = n.length - 1,
    i,
    a;
  for (i = 0; i < r.length; i++)
    if (((a = r[i]), a !== '.'))
      if (a === '..') o > 1 && o--;
      else break;
  return n.slice(0, o).join('/') + '/' + r.slice(i).join('/');
}
const $t = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
var ys;
(function (e) {
  (e.pop = 'pop'), (e.push = 'push');
})(ys || (ys = {}));
var ns;
(function (e) {
  (e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
})(ns || (ns = {}));
function E0(e) {
  if (!e)
    if (dr) {
      const t = document.querySelector('base');
      (e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''));
    } else e = '/';
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), w0(e);
}
const x0 = /^[^#]+#/;
function A0(e, t) {
  return e.replace(x0, '#') + t;
}
function T0(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const hi = () => ({ left: window.scrollX, top: window.scrollY });
function $0(e) {
  let t;
  if ('el' in e) {
    const n = e.el,
      r = typeof n == 'string' && n.startsWith('#'),
      s =
        typeof n == 'string'
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!s) return;
    t = T0(s, e);
  } else t = e;
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY,
      );
}
function Vc(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Ha = new Map();
function R0(e, t) {
  Ha.set(e, t);
}
function P0(e) {
  const t = Ha.get(e);
  return Ha.delete(e), t;
}
let k0 = () => location.protocol + '//' + location.host;
function wh(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    o = e.indexOf('#');
  if (o > -1) {
    let a = s.includes(e.slice(o)) ? e.slice(o).length : 1,
      l = s.slice(a);
    return l[0] !== '/' && (l = '/' + l), Wc(l, '');
  }
  return Wc(n, e) + r + s;
}
function O0(e, t, n, r) {
  let s = [],
    o = [],
    i = null;
  const a = ({ state: h }) => {
    const f = wh(e, location),
      p = n.value,
      m = t.value;
    let b = 0;
    if (h) {
      if (((n.value = f), (t.value = h), i && i === p)) {
        i = null;
        return;
      }
      b = m ? h.position - m.position : 0;
    } else r(f);
    s.forEach((y) => {
      y(n.value, p, {
        delta: b,
        type: ys.pop,
        direction: b ? (b > 0 ? ns.forward : ns.back) : ns.unknown,
      });
    });
  };
  function l() {
    i = n.value;
  }
  function c(h) {
    s.push(h);
    const f = () => {
      const p = s.indexOf(h);
      p > -1 && s.splice(p, 1);
    };
    return o.push(f), f;
  }
  function u() {
    const { history: h } = window;
    h.state && h.replaceState(ye({}, h.state, { scroll: hi() }), '');
  }
  function d() {
    for (const h of o) h();
    (o = []),
      window.removeEventListener('popstate', a),
      window.removeEventListener('beforeunload', u);
  }
  return (
    window.addEventListener('popstate', a),
    window.addEventListener('beforeunload', u, { passive: !0 }),
    { pauseListeners: l, listen: c, destroy: d }
  );
}
function qc(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? hi() : null,
  };
}
function M0(e) {
  const { history: t, location: n } = window,
    r = { value: wh(e, n) },
    s = { value: t.state };
  s.value ||
    o(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    );
  function o(l, c, u) {
    const d = e.indexOf('#'),
      h = d > -1 ? (n.host && document.querySelector('base') ? e : e.slice(d)) + l : k0() + e + l;
    try {
      t[u ? 'replaceState' : 'pushState'](c, '', h), (s.value = c);
    } catch (f) {
      console.error(f), n[u ? 'replace' : 'assign'](h);
    }
  }
  function i(l, c) {
    const u = ye({}, t.state, qc(s.value.back, l, s.value.forward, !0), c, {
      position: s.value.position,
    });
    o(l, u, !0), (r.value = l);
  }
  function a(l, c) {
    const u = ye({}, s.value, t.state, { forward: l, scroll: hi() });
    o(u.current, u, !0);
    const d = ye({}, qc(r.value, l, null), { position: u.position + 1 }, c);
    o(l, d, !1), (r.value = l);
  }
  return { location: r, state: s, push: a, replace: i };
}
function N0(e) {
  e = E0(e);
  const t = M0(e),
    n = O0(e, t.state, t.location, t.replace);
  function r(o, i = !0) {
    i || n.pauseListeners(), history.go(o);
  }
  const s = ye({ location: '', base: e, go: r, createHref: A0.bind(null, e) }, t, n);
  return (
    Object.defineProperty(s, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(s, 'state', { enumerable: !0, get: () => t.state.value }),
    s
  );
}
function L0(e) {
  return typeof e == 'string' || (e && typeof e == 'object');
}
function bh(e) {
  return typeof e == 'string' || typeof e == 'symbol';
}
const _h = Symbol('');
var Kc;
(function (e) {
  (e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated');
})(Kc || (Kc = {}));
function Mr(e, t) {
  return ye(new Error(), { type: e, [_h]: !0 }, t);
}
function Zt(e, t) {
  return e instanceof Error && _h in e && (t == null || !!(e.type & t));
}
const Gc = '[^/]+?',
  I0 = { sensitive: !1, strict: !1, start: !0, end: !0 },
  H0 = /[.+*?^${}()[\]/\\]/g;
function j0(e, t) {
  const n = ye({}, I0, t),
    r = [];
  let s = n.start ? '^' : '';
  const o = [];
  for (const c of e) {
    const u = c.length ? [] : [90];
    n.strict && !c.length && (s += '/');
    for (let d = 0; d < c.length; d++) {
      const h = c[d];
      let f = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0) d || (s += '/'), (s += h.value.replace(H0, '\\$&')), (f += 40);
      else if (h.type === 1) {
        const { value: p, repeatable: m, optional: b, regexp: y } = h;
        o.push({ name: p, repeatable: m, optional: b });
        const _ = y || Gc;
        if (_ !== Gc) {
          f += 10;
          try {
            new RegExp(`(${_})`);
          } catch (v) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${_}): ` + v.message);
          }
        }
        let g = m ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
        d || (g = b && c.length < 2 ? `(?:/${g})` : '/' + g),
          b && (g += '?'),
          (s += g),
          (f += 20),
          b && (f += -8),
          m && (f += -20),
          _ === '.*' && (f += -50);
      }
      u.push(f);
    }
    r.push(u);
  }
  if (n.strict && n.end) {
    const c = r.length - 1;
    r[c][r[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += '/?'), n.end ? (s += '$') : n.strict && !s.endsWith('/') && (s += '(?:/|$)');
  const i = new RegExp(s, n.sensitive ? '' : 'i');
  function a(c) {
    const u = c.match(i),
      d = {};
    if (!u) return null;
    for (let h = 1; h < u.length; h++) {
      const f = u[h] || '',
        p = o[h - 1];
      d[p.name] = f && p.repeatable ? f.split('/') : f;
    }
    return d;
  }
  function l(c) {
    let u = '',
      d = !1;
    for (const h of e) {
      (!d || !u.endsWith('/')) && (u += '/'), (d = !1);
      for (const f of h)
        if (f.type === 0) u += f.value;
        else if (f.type === 1) {
          const { value: p, repeatable: m, optional: b } = f,
            y = p in c ? c[p] : '';
          if (It(y) && !m)
            throw new Error(
              `Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`,
            );
          const _ = It(y) ? y.join('/') : y;
          if (!_)
            if (b) h.length < 2 && (u.endsWith('/') ? (u = u.slice(0, -1)) : (d = !0));
            else throw new Error(`Missing required param "${p}"`);
          u += _;
        }
    }
    return u || '/';
  }
  return { re: i, score: r, keys: o, parse: a, stringify: l };
}
function F0(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0;
}
function Ch(e, t) {
  let n = 0;
  const r = e.score,
    s = t.score;
  for (; n < r.length && n < s.length; ) {
    const o = F0(r[n], s[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (Jc(r)) return 1;
    if (Jc(s)) return -1;
  }
  return s.length - r.length;
}
function Jc(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const D0 = { type: 0, value: '' },
  B0 = /[a-zA-Z0-9_]/;
function U0(e) {
  if (!e) return [[]];
  if (e === '/') return [[D0]];
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
  function t(f) {
    throw new Error(`ERR (${n})/"${c}": ${f}`);
  }
  let n = 0,
    r = n;
  const s = [];
  let o;
  function i() {
    o && s.push(o), (o = []);
  }
  let a = 0,
    l,
    c = '',
    u = '';
  function d() {
    c &&
      (n === 0
        ? o.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
          ? (o.length > 1 &&
              (l === '*' || l === '+') &&
              t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),
            o.push({
              type: 1,
              value: c,
              regexp: u,
              repeatable: l === '*' || l === '+',
              optional: l === '*' || l === '?',
            }))
          : t('Invalid state to consume buffer'),
      (c = ''));
  }
  function h() {
    c += l;
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === '\\' && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === '/' ? (c && d(), i()) : l === ':' ? (d(), (n = 1)) : h();
        break;
      case 4:
        h(), (n = r);
        break;
      case 1:
        l === '('
          ? (n = 2)
          : B0.test(l)
            ? h()
            : (d(), (n = 0), l !== '*' && l !== '?' && l !== '+' && a--);
        break;
      case 2:
        l === ')' ? (u[u.length - 1] == '\\' ? (u = u.slice(0, -1) + l) : (n = 3)) : (u += l);
        break;
      case 3:
        d(), (n = 0), l !== '*' && l !== '?' && l !== '+' && a--, (u = '');
        break;
      default:
        t('Unknown state');
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), d(), i(), s;
}
function W0(e, t, n) {
  const r = j0(U0(e.path), n),
    s = ye(r, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function z0(e, t) {
  const n = [],
    r = new Map();
  t = Qc({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(d) {
    return r.get(d);
  }
  function o(d, h, f) {
    const p = !f,
      m = Xc(d);
    m.aliasOf = f && f.record;
    const b = Qc(t, d),
      y = [m];
    if ('alias' in d) {
      const v = typeof d.alias == 'string' ? [d.alias] : d.alias;
      for (const x of v)
        y.push(
          Xc(
            ye({}, m, {
              components: f ? f.record.components : m.components,
              path: x,
              aliasOf: f ? f.record : m,
            }),
          ),
        );
    }
    let _, g;
    for (const v of y) {
      const { path: x } = v;
      if (h && x[0] !== '/') {
        const $ = h.record.path,
          k = $[$.length - 1] === '/' ? '' : '/';
        v.path = h.record.path + (x && k + x);
      }
      if (
        ((_ = W0(v, h, b)),
        f
          ? f.alias.push(_)
          : ((g = g || _), g !== _ && g.alias.push(_), p && d.name && !Zc(_) && i(d.name)),
        Sh(_) && l(_),
        m.children)
      ) {
        const $ = m.children;
        for (let k = 0; k < $.length; k++) o($[k], _, f && f.children[k]);
      }
      f = f || _;
    }
    return g
      ? () => {
          i(g);
        }
      : ts;
  }
  function i(d) {
    if (bh(d)) {
      const h = r.get(d);
      h && (r.delete(d), n.splice(n.indexOf(h), 1), h.children.forEach(i), h.alias.forEach(i));
    } else {
      const h = n.indexOf(d);
      h > -1 &&
        (n.splice(h, 1),
        d.record.name && r.delete(d.record.name),
        d.children.forEach(i),
        d.alias.forEach(i));
    }
  }
  function a() {
    return n;
  }
  function l(d) {
    const h = K0(d, n);
    n.splice(h, 0, d), d.record.name && !Zc(d) && r.set(d.record.name, d);
  }
  function c(d, h) {
    let f,
      p = {},
      m,
      b;
    if ('name' in d && d.name) {
      if (((f = r.get(d.name)), !f)) throw Mr(1, { location: d });
      (b = f.record.name),
        (p = ye(
          Yc(
            h.params,
            f.keys
              .filter((g) => !g.optional)
              .concat(f.parent ? f.parent.keys.filter((g) => g.optional) : [])
              .map((g) => g.name),
          ),
          d.params &&
            Yc(
              d.params,
              f.keys.map((g) => g.name),
            ),
        )),
        (m = f.stringify(p));
    } else if (d.path != null)
      (m = d.path), (f = n.find((g) => g.re.test(m))), f && ((p = f.parse(m)), (b = f.record.name));
    else {
      if (((f = h.name ? r.get(h.name) : n.find((g) => g.re.test(h.path))), !f))
        throw Mr(1, { location: d, currentLocation: h });
      (b = f.record.name), (p = ye({}, h.params, d.params)), (m = f.stringify(p));
    }
    const y = [];
    let _ = f;
    for (; _; ) y.unshift(_.record), (_ = _.parent);
    return { name: b, path: m, params: p, matched: y, meta: q0(y) };
  }
  e.forEach((d) => o(d));
  function u() {
    (n.length = 0), r.clear();
  }
  return {
    addRoute: o,
    resolve: c,
    removeRoute: i,
    clearRoutes: u,
    getRoutes: a,
    getRecordMatcher: s,
  };
}
function Yc(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Xc(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: V0(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component },
  };
  return Object.defineProperty(t, 'mods', { value: {} }), t;
}
function V0(e) {
  const t = {},
    n = e.props || !1;
  if ('component' in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == 'object' ? n[r] : n;
  return t;
}
function Zc(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function q0(e) {
  return e.reduce((t, n) => ye(t, n.meta), {});
}
function Qc(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function K0(e, t) {
  let n = 0,
    r = t.length;
  for (; n !== r; ) {
    const o = (n + r) >> 1;
    Ch(e, t[o]) < 0 ? (r = o) : (n = o + 1);
  }
  const s = G0(e);
  return s && (r = t.lastIndexOf(s, r - 1)), r;
}
function G0(e) {
  let t = e;
  for (; (t = t.parent); ) if (Sh(t) && Ch(e, t) === 0) return t;
}
function Sh({ record: e }) {
  return !!(e.name || (e.components && Object.keys(e.components).length) || e.redirect);
}
function J0(e) {
  const t = {};
  if (e === '' || e === '?') return t;
  const r = (e[0] === '?' ? e.slice(1) : e).split('&');
  for (let s = 0; s < r.length; ++s) {
    const o = r[s].replace(ph, ' '),
      i = o.indexOf('='),
      a = ms(i < 0 ? o : o.slice(0, i)),
      l = i < 0 ? null : ms(o.slice(i + 1));
    if (a in t) {
      let c = t[a];
      It(c) || (c = t[a] = [c]), c.push(l);
    } else t[a] = l;
  }
  return t;
}
function eu(e) {
  let t = '';
  for (let n in e) {
    const r = e[n];
    if (((n = g0(n)), r == null)) {
      r !== void 0 && (t += (t.length ? '&' : '') + n);
      continue;
    }
    (It(r) ? r.map((o) => o && Ia(o)) : [r && Ia(r)]).forEach((o) => {
      o !== void 0 && ((t += (t.length ? '&' : '') + n), o != null && (t += '=' + o));
    });
  }
  return t;
}
function Y0(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = It(r) ? r.map((s) => (s == null ? null : '' + s)) : r == null ? r : '' + r);
  }
  return t;
}
const X0 = Symbol(''),
  tu = Symbol(''),
  Cl = Symbol(''),
  Eh = Symbol(''),
  ja = Symbol('');
function zr() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const s = e.indexOf(r);
        s > -1 && e.splice(s, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function bn(e, t, n, r, s, o = (i) => i()) {
  const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () =>
    new Promise((a, l) => {
      const c = (h) => {
          h === !1
            ? l(Mr(4, { from: n, to: t }))
            : h instanceof Error
              ? l(h)
              : L0(h)
                ? l(Mr(2, { from: t, to: h }))
                : (i && r.enterCallbacks[s] === i && typeof h == 'function' && i.push(h), a());
        },
        u = o(() => e.call(r && r.instances[s], t, n, c));
      let d = Promise.resolve(u);
      e.length < 3 && (d = d.then(c)), d.catch((h) => l(h));
    });
}
function Bi(e, t, n, r, s = (o) => o()) {
  const o = [];
  for (const i of e)
    for (const a in i.components) {
      let l = i.components[a];
      if (!(t !== 'beforeRouteEnter' && !i.instances[a]))
        if (dh(l)) {
          const u = (l.__vccOpts || l)[t];
          u && o.push(bn(u, n, r, i, a, s));
        } else {
          let c = l();
          o.push(() =>
            c.then((u) => {
              if (!u) throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
              const d = s0(u) ? u.default : u;
              (i.mods[a] = u), (i.components[a] = d);
              const f = (d.__vccOpts || d)[t];
              return f && bn(f, n, r, i, a, s)();
            }),
          );
        }
    }
  return o;
}
function nu(e) {
  const t = lt(Cl),
    n = lt(Eh),
    r = ae(() => {
      const l = oe(e.to);
      return t.resolve(l);
    }),
    s = ae(() => {
      const { matched: l } = r.value,
        { length: c } = l,
        u = l[c - 1],
        d = n.matched;
      if (!u || !d.length) return -1;
      const h = d.findIndex(Or.bind(null, u));
      if (h > -1) return h;
      const f = ru(l[c - 2]);
      return c > 1 && ru(u) === f && d[d.length - 1].path !== f
        ? d.findIndex(Or.bind(null, l[c - 2]))
        : h;
    }),
    o = ae(() => s.value > -1 && nb(n.params, r.value.params)),
    i = ae(() => s.value > -1 && s.value === n.matched.length - 1 && vh(n.params, r.value.params));
  function a(l = {}) {
    if (tb(l)) {
      const c = t[oe(e.replace) ? 'replace' : 'push'](oe(e.to)).catch(ts);
      return (
        e.viewTransition &&
          typeof document < 'u' &&
          'startViewTransition' in document &&
          document.startViewTransition(() => c),
        c
      );
    }
    return Promise.resolve();
  }
  return { route: r, href: ae(() => r.value.href), isActive: o, isExactActive: i, navigate: a };
}
function Z0(e) {
  return e.length === 1 ? e[0] : e;
}
const Q0 = vt({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
    },
    useLink: nu,
    setup(e, { slots: t }) {
      const n = Jt(nu(e)),
        { options: r } = lt(Cl),
        s = ae(() => ({
          [su(e.activeClass, r.linkActiveClass, 'router-link-active')]: n.isActive,
          [su(e.exactActiveClass, r.linkExactActiveClass, 'router-link-exact-active')]:
            n.isExactActive,
        }));
      return () => {
        const o = t.default && Z0(t.default(n));
        return e.custom
          ? o
          : mt(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              o,
            );
      };
    },
  }),
  eb = Q0;
function tb(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target');
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function nb(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n];
    if (typeof r == 'string') {
      if (r !== s) return !1;
    } else if (!It(s) || s.length !== r.length || r.some((o, i) => o !== s[i])) return !1;
  }
  return !0;
}
function ru(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const su = (e, t, n) => e ?? t ?? n,
  rb = vt({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = lt(ja),
        s = ae(() => e.route || r.value),
        o = lt(tu, 0),
        i = ae(() => {
          let c = oe(o);
          const { matched: u } = s.value;
          let d;
          for (; (d = u[c]) && !d.components; ) c++;
          return c;
        }),
        a = ae(() => s.value.matched[i.value]);
      Cr(
        tu,
        ae(() => i.value + 1),
      ),
        Cr(X0, a),
        Cr(ja, s);
      const l = Te();
      return (
        xt(
          () => [l.value, a.value, e.name],
          ([c, u, d], [h, f, p]) => {
            u &&
              ((u.instances[d] = c),
              f &&
                f !== u &&
                c &&
                c === h &&
                (u.leaveGuards.size || (u.leaveGuards = f.leaveGuards),
                u.updateGuards.size || (u.updateGuards = f.updateGuards))),
              c && u && (!f || !Or(u, f) || !h) && (u.enterCallbacks[d] || []).forEach((m) => m(c));
          },
          { flush: 'post' },
        ),
        () => {
          const c = s.value,
            u = e.name,
            d = a.value,
            h = d && d.components[u];
          if (!h) return ou(n.default, { Component: h, route: c });
          const f = d.props[u],
            p = f ? (f === !0 ? c.params : typeof f == 'function' ? f(c) : f) : null,
            b = mt(
              h,
              ye({}, p, t, {
                onVnodeUnmounted: (y) => {
                  y.component.isUnmounted && (d.instances[u] = null);
                },
                ref: l,
              }),
            );
          return ou(n.default, { Component: b, route: c }) || b;
        }
      );
    },
  });
function ou(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const xh = rb;
function sb(e) {
  const t = z0(e.routes, e),
    n = e.parseQuery || J0,
    r = e.stringifyQuery || eu,
    s = e.history,
    o = zr(),
    i = zr(),
    a = zr(),
    l = Ke($t);
  let c = $t;
  dr &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual');
  const u = Fi.bind(null, (O) => '' + O),
    d = Fi.bind(null, y0),
    h = Fi.bind(null, ms);
  function f(O, G) {
    let V, Y;
    return bh(O) ? ((V = t.getRecordMatcher(O)), (Y = G)) : (Y = O), t.addRoute(Y, V);
  }
  function p(O) {
    const G = t.getRecordMatcher(O);
    G && t.removeRoute(G);
  }
  function m() {
    return t.getRoutes().map((O) => O.record);
  }
  function b(O) {
    return !!t.getRecordMatcher(O);
  }
  function y(O, G) {
    if (((G = ye({}, G || l.value)), typeof O == 'string')) {
      const S = Di(n, O, G.path),
        P = t.resolve({ path: S.path }, G),
        N = s.createHref(S.fullPath);
      return ye(S, P, { params: h(P.params), hash: ms(S.hash), redirectedFrom: void 0, href: N });
    }
    let V;
    if (O.path != null) V = ye({}, O, { path: Di(n, O.path, G.path).path });
    else {
      const S = ye({}, O.params);
      for (const P in S) S[P] == null && delete S[P];
      (V = ye({}, O, { params: d(S) })), (G.params = d(G.params));
    }
    const Y = t.resolve(V, G),
      he = O.hash || '';
    Y.params = u(h(Y.params));
    const Se = b0(r, ye({}, O, { hash: p0(he), path: Y.path })),
      w = s.createHref(Se);
    return ye({ fullPath: Se, hash: he, query: r === eu ? Y0(O.query) : O.query || {} }, Y, {
      redirectedFrom: void 0,
      href: w,
    });
  }
  function _(O) {
    return typeof O == 'string' ? Di(n, O, l.value.path) : ye({}, O);
  }
  function g(O, G) {
    if (c !== O) return Mr(8, { from: G, to: O });
  }
  function v(O) {
    return k(O);
  }
  function x(O) {
    return v(ye(_(O), { replace: !0 }));
  }
  function $(O) {
    const G = O.matched[O.matched.length - 1];
    if (G && G.redirect) {
      const { redirect: V } = G;
      let Y = typeof V == 'function' ? V(O) : V;
      return (
        typeof Y == 'string' &&
          ((Y = Y.includes('?') || Y.includes('#') ? (Y = _(Y)) : { path: Y }), (Y.params = {})),
        ye({ query: O.query, hash: O.hash, params: Y.path != null ? {} : O.params }, Y)
      );
    }
  }
  function k(O, G) {
    const V = (c = y(O)),
      Y = l.value,
      he = O.state,
      Se = O.force,
      w = O.replace === !0,
      S = $(V);
    if (S)
      return k(
        ye(_(S), { state: typeof S == 'object' ? ye({}, he, S.state) : he, force: Se, replace: w }),
        G || V,
      );
    const P = V;
    P.redirectedFrom = G;
    let N;
    return (
      !Se && _0(r, Y, V) && ((N = Mr(16, { to: P, from: Y })), le(Y, Y, !0, !1)),
      (N ? Promise.resolve(N) : A(P, Y))
        .catch((M) => (Zt(M) ? (Zt(M, 2) ? M : me(M)) : F(M, P, Y)))
        .then((M) => {
          if (M) {
            if (Zt(M, 2))
              return k(
                ye({ replace: w }, _(M.to), {
                  state: typeof M.to == 'object' ? ye({}, he, M.to.state) : he,
                  force: Se,
                }),
                G || P,
              );
          } else M = C(P, Y, !0, w, he);
          return T(P, Y, M), M;
        })
    );
  }
  function U(O, G) {
    const V = g(O, G);
    return V ? Promise.reject(V) : Promise.resolve();
  }
  function E(O) {
    const G = Ce.values().next().value;
    return G && typeof G.runWithContext == 'function' ? G.runWithContext(O) : O();
  }
  function A(O, G) {
    let V;
    const [Y, he, Se] = ob(O, G);
    V = Bi(Y.reverse(), 'beforeRouteLeave', O, G);
    for (const S of Y)
      S.leaveGuards.forEach((P) => {
        V.push(bn(P, O, G));
      });
    const w = U.bind(null, O, G);
    return (
      V.push(w),
      ce(V)
        .then(() => {
          V = [];
          for (const S of o.list()) V.push(bn(S, O, G));
          return V.push(w), ce(V);
        })
        .then(() => {
          V = Bi(he, 'beforeRouteUpdate', O, G);
          for (const S of he)
            S.updateGuards.forEach((P) => {
              V.push(bn(P, O, G));
            });
          return V.push(w), ce(V);
        })
        .then(() => {
          V = [];
          for (const S of Se)
            if (S.beforeEnter)
              if (It(S.beforeEnter)) for (const P of S.beforeEnter) V.push(bn(P, O, G));
              else V.push(bn(S.beforeEnter, O, G));
          return V.push(w), ce(V);
        })
        .then(
          () => (
            O.matched.forEach((S) => (S.enterCallbacks = {})),
            (V = Bi(Se, 'beforeRouteEnter', O, G, E)),
            V.push(w),
            ce(V)
          ),
        )
        .then(() => {
          V = [];
          for (const S of i.list()) V.push(bn(S, O, G));
          return V.push(w), ce(V);
        })
        .catch((S) => (Zt(S, 8) ? S : Promise.reject(S)))
    );
  }
  function T(O, G, V) {
    a.list().forEach((Y) => E(() => Y(O, G, V)));
  }
  function C(O, G, V, Y, he) {
    const Se = g(O, G);
    if (Se) return Se;
    const w = G === $t,
      S = dr ? history.state : {};
    V &&
      (Y || w
        ? s.replace(O.fullPath, ye({ scroll: w && S && S.scroll }, he))
        : s.push(O.fullPath, he)),
      (l.value = O),
      le(O, G, V, w),
      me();
  }
  let R;
  function H() {
    R ||
      (R = s.listen((O, G, V) => {
        if (!Ue.listening) return;
        const Y = y(O),
          he = $(Y);
        if (he) {
          k(ye(he, { replace: !0, force: !0 }), Y).catch(ts);
          return;
        }
        c = Y;
        const Se = l.value;
        dr && R0(Vc(Se.fullPath, V.delta), hi()),
          A(Y, Se)
            .catch((w) =>
              Zt(w, 12)
                ? w
                : Zt(w, 2)
                  ? (k(ye(_(w.to), { force: !0 }), Y)
                      .then((S) => {
                        Zt(S, 20) && !V.delta && V.type === ys.pop && s.go(-1, !1);
                      })
                      .catch(ts),
                    Promise.reject())
                  : (V.delta && s.go(-V.delta, !1), F(w, Y, Se)),
            )
            .then((w) => {
              (w = w || C(Y, Se, !1)),
                w &&
                  (V.delta && !Zt(w, 8)
                    ? s.go(-V.delta, !1)
                    : V.type === ys.pop && Zt(w, 20) && s.go(-1, !1)),
                T(Y, Se, w);
            })
            .catch(ts);
      }));
  }
  let K = zr(),
    D = zr(),
    B;
  function F(O, G, V) {
    me(O);
    const Y = D.list();
    return Y.length ? Y.forEach((he) => he(O, G, V)) : console.error(O), Promise.reject(O);
  }
  function ne() {
    return B && l.value !== $t
      ? Promise.resolve()
      : new Promise((O, G) => {
          K.add([O, G]);
        });
  }
  function me(O) {
    return B || ((B = !O), H(), K.list().forEach(([G, V]) => (O ? V(O) : G())), K.reset()), O;
  }
  function le(O, G, V, Y) {
    const { scrollBehavior: he } = e;
    if (!dr || !he) return Promise.resolve();
    const Se =
      (!V && P0(Vc(O.fullPath, 0))) || ((Y || !V) && history.state && history.state.scroll) || null;
    return Mn()
      .then(() => he(O, G, Se))
      .then((w) => w && $0(w))
      .catch((w) => F(w, O, G));
  }
  const ie = (O) => s.go(O);
  let Me;
  const Ce = new Set(),
    Ue = {
      currentRoute: l,
      listening: !0,
      addRoute: f,
      removeRoute: p,
      clearRoutes: t.clearRoutes,
      hasRoute: b,
      getRoutes: m,
      resolve: y,
      options: e,
      push: v,
      replace: x,
      go: ie,
      back: () => ie(-1),
      forward: () => ie(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: a.add,
      onError: D.add,
      isReady: ne,
      install(O) {
        const G = this;
        O.component('RouterLink', eb),
          O.component('RouterView', xh),
          (O.config.globalProperties.$router = G),
          Object.defineProperty(O.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => oe(l),
          }),
          dr && !Me && l.value === $t && ((Me = !0), v(s.location).catch((he) => {}));
        const V = {};
        for (const he in $t)
          Object.defineProperty(V, he, { get: () => l.value[he], enumerable: !0 });
        O.provide(Cl, G), O.provide(Eh, on(V)), O.provide(ja, l);
        const Y = O.unmount;
        Ce.add(O),
          (O.unmount = function () {
            Ce.delete(O),
              Ce.size < 1 && ((c = $t), R && R(), (R = null), (l.value = $t), (Me = !1), (B = !1)),
              Y();
          });
      },
    };
  function ce(O) {
    return O.reduce((G, V) => G.then(() => E(V)), Promise.resolve());
  }
  return Ue;
}
function ob(e, t) {
  const n = [],
    r = [],
    s = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const a = t.matched[i];
    a && (e.matched.find((c) => Or(c, a)) ? r.push(a) : n.push(a));
    const l = e.matched[i];
    l && (t.matched.find((c) => Or(c, l)) || s.push(l));
  }
  return [n, r, s];
}
const ib = /(:\w+)\([^)]+\)/g,
  ab = /(:\w+)[?+*]/g,
  lb = /:\w+/g,
  cb = (e, t) =>
    t.path
      .replace(ib, '$1')
      .replace(ab, '$1')
      .replace(lb, (n) => {
        var r;
        return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || '';
      }),
  Fa = (e, t) => {
    const n = e.route.matched.find((s) => {
        var o;
        return ((o = s.components) == null ? void 0 : o.default) === e.Component.type;
      }),
      r = t ?? (n == null ? void 0 : n.meta.key) ?? (n && cb(e.route, n));
    return typeof r == 'function' ? r(e.route) : r;
  },
  ub = (e, t) => ({ default: () => (e ? mt(Xg, e === !0 ? {} : e, t) : t) });
function Sl(e) {
  return Array.isArray(e) ? e : [e];
}
const Ui = [
    {
      name: 'configs',
      path: '/configs',
      component: () =>
        mr(() => import('./Dh-akTWs.js'), __vite__mapDeps([0, 1, 2, 3]), import.meta.url),
    },
    {
      name: 'files',
      path: '/files',
      component: () =>
        mr(() => import('./Cqmz7tCN.js'), __vite__mapDeps([4, 2, 3]), import.meta.url),
    },
    {
      name: 'index',
      path: '/',
      component: () => mr(() => import('./D5p1_LJe.js'), [], import.meta.url),
    },
    {
      name: 'rules',
      path: '/rules',
      component: () =>
        mr(() => import('./DBS2FFHD.js'), __vite__mapDeps([5, 1, 2]), import.meta.url),
    },
  ],
  fb = (e, t) => ({
    default: () => {
      var n;
      return e ? mt(Zm, e === !0 ? {} : e, t) : (n = t.default) == null ? void 0 : n.call(t);
    },
  }),
  db = /(:\w+)\([^)]+\)/g,
  hb = /(:\w+)[?+*]/g,
  pb = /:\w+/g;
function iu(e) {
  const t =
    (e == null ? void 0 : e.meta.key) ??
    e.path
      .replace(db, '$1')
      .replace(hb, '$1')
      .replace(pb, (n) => {
        var r;
        return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || '';
      });
  return typeof t == 'function' ? t(e) : t;
}
function gb(e, t) {
  return e === t || t === $t
    ? !1
    : iu(e) !== iu(t)
      ? !0
      : !e.matched.every((r, s) => {
          var o, i;
          return (
            r.components &&
            r.components.default ===
              ((i = (o = t.matched[s]) == null ? void 0 : o.components) == null
                ? void 0
                : i.default)
          );
        });
}
const mb = {
  scrollBehavior(e, t, n) {
    var c;
    const r = Pe(),
      s = ((c = nt().options) == null ? void 0 : c.scrollBehaviorType) ?? 'auto';
    let o = n || void 0;
    const i =
      typeof e.meta.scrollToTop == 'function' ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop;
    if ((!o && t && e && i !== !1 && gb(e, t) && (o = { left: 0, top: 0 }), e.path === t.path))
      return t.hash && !e.hash
        ? { left: 0, top: 0 }
        : e.hash
          ? { el: e.hash, top: au(e.hash), behavior: s }
          : !1;
    const a = (u) => !!(u.meta.pageTransition ?? Aa),
      l = a(t) && a(e) ? 'page:transition:finish' : 'page:finish';
    return new Promise((u) => {
      r.hooks.hookOnce(l, async () => {
        await new Promise((d) => setTimeout(d, 0)),
          e.hash && (o = { el: e.hash, top: au(e.hash), behavior: s }),
          u(o);
      });
    });
  },
};
function au(e) {
  try {
    const t = document.querySelector(e);
    if (t)
      return (
        (Number.parseFloat(getComputedStyle(t).scrollMarginTop) || 0) +
        (Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0)
      );
  } catch {}
  return 0;
}
const yb = { hashMode: !1, scrollBehaviorType: 'auto' },
  bt = { ...yb, ...mb },
  vb = async (e) => {
    var l;
    let t, n;
    if (!((l = e.meta) != null && l.validate)) return;
    const r = Pe(),
      s = nt(),
      o = (([t, n] = xr(() => Promise.resolve(e.meta.validate(e)))), (t = await t), n(), t);
    if (o === !0) return;
    const i = fi({
        statusCode: (o && o.statusCode) || 404,
        statusMessage: (o && o.statusMessage) || `Page Not Found: ${e.fullPath}`,
        data: { path: e.fullPath },
      }),
      a = s.beforeResolve((c) => {
        if ((a(), c === e)) {
          const u = s.afterEach(async () => {
            u(),
              await r.runWithContext(() => gr(i)),
              window == null || window.history.pushState({}, '', e.fullPath);
          });
          return !1;
        }
      });
  },
  wb = async (e) => {
    let t, n;
    const r = (([t, n] = xr(() => bl({ path: e.path }))), (t = await t), n(), t);
    if (r.redirect)
      return un(r.redirect, { acceptRelative: !0 })
        ? ((window.location.href = r.redirect), !1)
        : r.redirect;
  },
  bb = [vb, wb],
  rs = {};
function _b(e, t, n) {
  const { pathname: r, search: s, hash: o } = t,
    i = e.indexOf('#');
  if (i > -1) {
    const c = o.includes(e.slice(i)) ? e.slice(i).length : 1;
    let u = o.slice(c);
    return u[0] !== '/' && (u = '/' + u), Tc(u, '');
  }
  const a = Tc(r, e),
    l = !n || ev(a, n, { trailingSlash: !0 }) ? a : n;
  return l + (l.includes('?') ? '' : s) + o;
}
const Cb = Ht({
    name: 'nuxt:router',
    enforce: 'pre',
    async setup(e) {
      var b;
      let t,
        n,
        r = Fr().app.baseURL;
      const s = ((b = bt.history) == null ? void 0 : b.call(bt, r)) ?? N0(r),
        o = bt.routes ? (([t, n] = xr(() => bt.routes(Ui))), (t = await t), n(), t ?? Ui) : Ui;
      let i;
      const a = sb({
        ...bt,
        scrollBehavior: (y, _, g) => {
          if (_ === $t) {
            i = g;
            return;
          }
          if (bt.scrollBehavior) {
            if (
              ((a.options.scrollBehavior = bt.scrollBehavior),
              'scrollRestoration' in window.history)
            ) {
              const v = a.beforeEach(() => {
                v(), (window.history.scrollRestoration = 'manual');
              });
            }
            return bt.scrollBehavior(y, $t, i || g);
          }
        },
        history: s,
        routes: o,
      });
      bt.routes && bt.routes,
        'scrollRestoration' in window.history && (window.history.scrollRestoration = 'auto'),
        e.vueApp.use(a);
      const l = Ke(a.currentRoute.value);
      a.afterEach((y, _) => {
        l.value = _;
      }),
        Object.defineProperty(e.vueApp.config.globalProperties, 'previousRoute', {
          get: () => l.value,
        });
      const c = _b(r, window.location, e.payload.path),
        u = Ke(a.currentRoute.value),
        d = () => {
          u.value = a.currentRoute.value;
        };
      e.hook('page:finish', d),
        a.afterEach((y, _) => {
          var g, v, x, $;
          ((v = (g = y.matched[0]) == null ? void 0 : g.components) == null
            ? void 0
            : v.default) ===
            (($ = (x = _.matched[0]) == null ? void 0 : x.components) == null
              ? void 0
              : $.default) && d();
        });
      const h = {};
      for (const y in u.value)
        Object.defineProperty(h, y, { get: () => u.value[y], enumerable: !0 });
      (e._route = on(h)), (e._middleware = e._middleware || { global: [], named: {} });
      const f = ui();
      a.afterEach(async (y, _, g) => {
        delete e._processingMiddleware,
          !e.isHydrating && f.value && (await e.runWithContext(Yv)),
          g && (await e.callHook('page:loading:end'));
      });
      try {
        ([t, n] = xr(() => a.isReady())), await t, n();
      } catch (y) {
        ([t, n] = xr(() => e.runWithContext(() => gr(y)))), await t, n();
      }
      const p = c !== a.currentRoute.value.fullPath ? a.resolve(c) : a.currentRoute.value;
      d();
      const m = e.payload.state._layout;
      return (
        a.beforeEach(async (y, _) => {
          var g;
          await e.callHook('page:loading:start'),
            (y.meta = Jt(y.meta)),
            e.isHydrating && m && !$n(y.meta.layout) && (y.meta.layout = m),
            (e._processingMiddleware = !0);
          {
            const v = new Set([...bb, ...e._middleware.global]);
            for (const x of y.matched) {
              const $ = x.meta.middleware;
              if ($) for (const k of Sl($)) v.add(k);
            }
            {
              const x = await e.runWithContext(() => bl({ path: y.path }));
              if (x.appMiddleware)
                for (const $ in x.appMiddleware) x.appMiddleware[$] ? v.add($) : v.delete($);
            }
            for (const x of v) {
              const $ =
                typeof x == 'string'
                  ? e._middleware.named[x] ||
                    (await ((g = rs[x]) == null ? void 0 : g.call(rs).then((U) => U.default || U)))
                  : x;
              if (!$) throw new Error(`Unknown route middleware: '${x}'.`);
              const k = await e.runWithContext(() => $(y, _));
              if (!e.payload.serverRendered && e.isHydrating && (k === !1 || k instanceof Error)) {
                const U = k || Ra({ statusCode: 404, statusMessage: `Page Not Found: ${c}` });
                return await e.runWithContext(() => gr(U)), !1;
              }
              if (k !== !0 && (k || k === !1)) return k;
            }
          }
        }),
        a.onError(async () => {
          delete e._processingMiddleware, await e.callHook('page:loading:end');
        }),
        a.afterEach(async (y, _) => {
          y.matched.length === 0 &&
            (await e.runWithContext(() =>
              gr(
                Ra({
                  statusCode: 404,
                  fatal: !1,
                  statusMessage: `Page not found: ${y.fullPath}`,
                  data: { path: y.fullPath },
                }),
              ),
            ));
        }),
        e.hooks.hookOnce('app:created', async () => {
          try {
            'name' in p && (p.name = void 0),
              await a.replace({ ...p, force: !0 }),
              (a.options.scrollBehavior = bt.scrollBehavior);
          } catch (y) {
            await e.runWithContext(() => gr(y));
          }
        }),
        { provide: { router: a } }
      );
    },
  }),
  Da =
    globalThis.requestIdleCallback ||
    ((e) => {
      const t = Date.now(),
        n = { didTimeout: !1, timeRemaining: () => Math.max(0, 50 - (Date.now() - t)) };
      return setTimeout(() => {
        e(n);
      }, 1);
    }),
  Sb =
    globalThis.cancelIdleCallback ||
    ((e) => {
      clearTimeout(e);
    }),
  pi = (e) => {
    const t = Pe();
    t.isHydrating
      ? t.hooks.hookOnce('app:suspense:resolve', () => {
          Da(() => e());
        })
      : Da(() => e());
  },
  Eb = Ht({
    name: 'nuxt:payload',
    setup(e) {
      nt().beforeResolve(async (t, n) => {
        if (t.path === n.path) return;
        const r = await Uc(t.path);
        r && Object.assign(e.static.data, r.data);
      }),
        pi(() => {
          var t;
          e.hooks.hook('link:prefetch', async (n) => {
            const { hostname: r } = new URL(n, window.location.href);
            r === window.location.hostname && (await Uc(n));
          }),
            ((t = navigator.connection) == null ? void 0 : t.effectiveType) !== 'slow-2g' &&
              setTimeout(di, 1e3);
        });
    },
  }),
  xb = Ht(() => {
    const e = nt();
    pi(() => {
      e.beforeResolve(async () => {
        await new Promise((t) => {
          setTimeout(t, 100),
            requestAnimationFrame(() => {
              setTimeout(t, 0);
            });
        });
      });
    });
  }),
  Ab = Ht((e) => {
    let t;
    async function n() {
      const r = await di();
      t && clearTimeout(t), (t = setTimeout(n, Oc));
      try {
        const s = await $fetch(vl('builds/latest.json') + `?${Date.now()}`);
        s.id !== r.id && e.hooks.callHook('app:manifest:update', s);
      } catch {}
    }
    pi(() => {
      t = setTimeout(n, Oc);
    });
  });
function Tb(e = {}) {
  const t = e.path || window.location.pathname;
  let n = {};
  try {
    n = To(sessionStorage.getItem('nuxt:reload') || '{}');
  } catch {}
  if (
    e.force ||
    (n == null ? void 0 : n.path) !== t ||
    (n == null ? void 0 : n.expires) < Date.now()
  ) {
    try {
      sessionStorage.setItem(
        'nuxt:reload',
        JSON.stringify({ path: t, expires: Date.now() + (e.ttl ?? 1e4) }),
      );
    } catch {}
    if (e.persistState)
      try {
        sessionStorage.setItem('nuxt:reload:state', JSON.stringify({ state: Pe().payload.state }));
      } catch {}
    window.location.pathname !== t ? (window.location.href = t) : window.location.reload();
  }
}
const $b = Ht({
    name: 'nuxt:chunk-reload',
    setup(e) {
      const t = nt(),
        n = Fr(),
        r = new Set();
      t.beforeEach(() => {
        r.clear();
      }),
        e.hook('app:chunkError', ({ error: o }) => {
          r.add(o);
        });
      function s(o) {
        const a =
          'href' in o && o.href[0] === '#' ? n.app.baseURL + o.href : li(n.app.baseURL, o.fullPath);
        Tb({ path: a, persistState: !0 });
      }
      e.hook('app:manifest:update', () => {
        t.beforeResolve(s);
      }),
        t.onError((o, i) => {
          r.has(o) && s(i);
        });
    },
  }),
  Rb = Ht({ name: 'nuxt:global-components' }),
  Vs = {},
  Pb = Ht({
    name: 'nuxt:prefetch',
    setup(e) {
      const t = nt();
      e.hooks.hook('app:mounted', () => {
        t.beforeEach(async (n) => {
          var s;
          const r = (s = n == null ? void 0 : n.meta) == null ? void 0 : s.layout;
          r && typeof Vs[r] == 'function' && (await Vs[r]());
        });
      }),
        e.hooks.hook('link:prefetch', (n) => {
          if (un(n)) return;
          const r = t.resolve(n);
          if (!r) return;
          const s = r.meta.layout;
          let o = Sl(r.meta.middleware);
          o = o.filter((i) => typeof i == 'string');
          for (const i of o) typeof rs[i] == 'function' && rs[i]();
          s && typeof Vs[s] == 'function' && Vs[s]();
        });
    },
  }),
  kb = Ht(() => {}),
  Ob = ['top', 'right', 'bottom', 'left'],
  lu = ['start', 'end'],
  cu = Ob.reduce((e, t) => e.concat(t, t + '-' + lu[0], t + '-' + lu[1]), []),
  vs = Math.min,
  zn = Math.max,
  Mb = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  Nb = { start: 'end', end: 'start' };
function Ba(e, t, n) {
  return zn(e, vs(t, n));
}
function ar(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function qt(e) {
  return e.split('-')[0];
}
function Ot(e) {
  return e.split('-')[1];
}
function Ah(e) {
  return e === 'x' ? 'y' : 'x';
}
function El(e) {
  return e === 'y' ? 'height' : 'width';
}
function rr(e) {
  return ['top', 'bottom'].includes(qt(e)) ? 'y' : 'x';
}
function xl(e) {
  return Ah(rr(e));
}
function Th(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ot(e),
    s = xl(e),
    o = El(s);
  let i =
    s === 'x' ? (r === (n ? 'end' : 'start') ? 'right' : 'left') : r === 'start' ? 'bottom' : 'top';
  return t.reference[o] > t.floating[o] && (i = Ho(i)), [i, Ho(i)];
}
function Lb(e) {
  const t = Ho(e);
  return [Io(e), t, Io(t)];
}
function Io(e) {
  return e.replace(/start|end/g, (t) => Nb[t]);
}
function Ib(e, t, n) {
  const r = ['left', 'right'],
    s = ['right', 'left'],
    o = ['top', 'bottom'],
    i = ['bottom', 'top'];
  switch (e) {
    case 'top':
    case 'bottom':
      return n ? (t ? s : r) : t ? r : s;
    case 'left':
    case 'right':
      return t ? o : i;
    default:
      return [];
  }
}
function Hb(e, t, n, r) {
  const s = Ot(e);
  let o = Ib(qt(e), n === 'start', r);
  return s && ((o = o.map((i) => i + '-' + s)), t && (o = o.concat(o.map(Io)))), o;
}
function Ho(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Mb[t]);
}
function jb(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function $h(e) {
  return typeof e != 'number' ? jb(e) : { top: e, right: e, bottom: e, left: e };
}
function ss(e) {
  const { x: t, y: n, width: r, height: s } = e;
  return { width: r, height: s, top: n, left: t, right: t + r, bottom: n + s, x: t, y: n };
}
function uu(e, t, n) {
  let { reference: r, floating: s } = e;
  const o = rr(t),
    i = xl(t),
    a = El(i),
    l = qt(t),
    c = o === 'y',
    u = r.x + r.width / 2 - s.width / 2,
    d = r.y + r.height / 2 - s.height / 2,
    h = r[a] / 2 - s[a] / 2;
  let f;
  switch (l) {
    case 'top':
      f = { x: u, y: r.y - s.height };
      break;
    case 'bottom':
      f = { x: u, y: r.y + r.height };
      break;
    case 'right':
      f = { x: r.x + r.width, y: d };
      break;
    case 'left':
      f = { x: r.x - s.width, y: d };
      break;
    default:
      f = { x: r.x, y: r.y };
  }
  switch (Ot(t)) {
    case 'start':
      f[i] -= h * (n && c ? -1 : 1);
      break;
    case 'end':
      f[i] += h * (n && c ? -1 : 1);
      break;
  }
  return f;
}
const Fb = async (e, t, n) => {
  const { placement: r = 'bottom', strategy: s = 'absolute', middleware: o = [], platform: i } = n,
    a = o.filter(Boolean),
    l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({ reference: e, floating: t, strategy: s }),
    { x: u, y: d } = uu(c, r, l),
    h = r,
    f = {},
    p = 0;
  for (let m = 0; m < a.length; m++) {
    const { name: b, fn: y } = a[m],
      {
        x: _,
        y: g,
        data: v,
        reset: x,
      } = await y({
        x: u,
        y: d,
        initialPlacement: r,
        placement: h,
        strategy: s,
        middlewareData: f,
        rects: c,
        platform: i,
        elements: { reference: e, floating: t },
      });
    (u = _ ?? u),
      (d = g ?? d),
      (f = { ...f, [b]: { ...f[b], ...v } }),
      x &&
        p <= 50 &&
        (p++,
        typeof x == 'object' &&
          (x.placement && (h = x.placement),
          x.rects &&
            (c =
              x.rects === !0
                ? await i.getElementRects({ reference: e, floating: t, strategy: s })
                : x.rects),
          ({ x: u, y: d } = uu(c, h, l))),
        (m = -1));
  }
  return { x: u, y: d, placement: h, strategy: s, middlewareData: f };
};
async function gi(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: s, platform: o, rects: i, elements: a, strategy: l } = e,
    {
      boundary: c = 'clippingAncestors',
      rootBoundary: u = 'viewport',
      elementContext: d = 'floating',
      altBoundary: h = !1,
      padding: f = 0,
    } = ar(t, e),
    p = $h(f),
    b = a[h ? (d === 'floating' ? 'reference' : 'floating') : d],
    y = ss(
      await o.getClippingRect({
        element:
          (n = await (o.isElement == null ? void 0 : o.isElement(b))) == null || n
            ? b
            : b.contextElement ||
              (await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating))),
        boundary: c,
        rootBoundary: u,
        strategy: l,
      }),
    ),
    _ =
      d === 'floating'
        ? { x: r, y: s, width: i.floating.width, height: i.floating.height }
        : i.reference,
    g = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)),
    v = (await (o.isElement == null ? void 0 : o.isElement(g)))
      ? (await (o.getScale == null ? void 0 : o.getScale(g))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    x = ss(
      o.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: _,
            offsetParent: g,
            strategy: l,
          })
        : _,
    );
  return {
    top: (y.top - x.top + p.top) / v.y,
    bottom: (x.bottom - y.bottom + p.bottom) / v.y,
    left: (y.left - x.left + p.left) / v.x,
    right: (x.right - y.right + p.right) / v.x,
  };
}
const Db = (e) => ({
  name: 'arrow',
  options: e,
  async fn(t) {
    const { x: n, y: r, placement: s, rects: o, platform: i, elements: a, middlewareData: l } = t,
      { element: c, padding: u = 0 } = ar(e, t) || {};
    if (c == null) return {};
    const d = $h(u),
      h = { x: n, y: r },
      f = xl(s),
      p = El(f),
      m = await i.getDimensions(c),
      b = f === 'y',
      y = b ? 'top' : 'left',
      _ = b ? 'bottom' : 'right',
      g = b ? 'clientHeight' : 'clientWidth',
      v = o.reference[p] + o.reference[f] - h[f] - o.floating[p],
      x = h[f] - o.reference[f],
      $ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let k = $ ? $[g] : 0;
    (!k || !(await (i.isElement == null ? void 0 : i.isElement($)))) &&
      (k = a.floating[g] || o.floating[p]);
    const U = v / 2 - x / 2,
      E = k / 2 - m[p] / 2 - 1,
      A = vs(d[y], E),
      T = vs(d[_], E),
      C = A,
      R = k - m[p] - T,
      H = k / 2 - m[p] / 2 + U,
      K = Ba(C, H, R),
      D =
        !l.arrow && Ot(s) != null && H !== K && o.reference[p] / 2 - (H < C ? A : T) - m[p] / 2 < 0,
      B = D ? (H < C ? H - C : H - R) : 0;
    return {
      [f]: h[f] + B,
      data: { [f]: K, centerOffset: H - K - B, ...(D && { alignmentOffset: B }) },
      reset: D,
    };
  },
});
function Bb(e, t, n) {
  return (
    e
      ? [...n.filter((s) => Ot(s) === e), ...n.filter((s) => Ot(s) !== e)]
      : n.filter((s) => qt(s) === s)
  ).filter((s) => (e ? Ot(s) === e || (t ? Io(s) !== s : !1) : !0));
}
const Ub = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'autoPlacement',
        options: e,
        async fn(t) {
          var n, r, s;
          const { rects: o, middlewareData: i, placement: a, platform: l, elements: c } = t,
            {
              crossAxis: u = !1,
              alignment: d,
              allowedPlacements: h = cu,
              autoAlignment: f = !0,
              ...p
            } = ar(e, t),
            m = d !== void 0 || h === cu ? Bb(d || null, f, h) : h,
            b = await gi(t, p),
            y = ((n = i.autoPlacement) == null ? void 0 : n.index) || 0,
            _ = m[y];
          if (_ == null) return {};
          const g = Th(_, o, await (l.isRTL == null ? void 0 : l.isRTL(c.floating)));
          if (a !== _) return { reset: { placement: m[0] } };
          const v = [b[qt(_)], b[g[0]], b[g[1]]],
            x = [
              ...(((r = i.autoPlacement) == null ? void 0 : r.overflows) || []),
              { placement: _, overflows: v },
            ],
            $ = m[y + 1];
          if ($) return { data: { index: y + 1, overflows: x }, reset: { placement: $ } };
          const k = x
              .map((A) => {
                const T = Ot(A.placement);
                return [
                  A.placement,
                  T && u ? A.overflows.slice(0, 2).reduce((C, R) => C + R, 0) : A.overflows[0],
                  A.overflows,
                ];
              })
              .sort((A, T) => A[1] - T[1]),
            E =
              ((s = k.filter((A) => A[2].slice(0, Ot(A[0]) ? 2 : 3).every((T) => T <= 0))[0]) ==
              null
                ? void 0
                : s[0]) || k[0][0];
          return E !== a ? { data: { index: y + 1, overflows: x }, reset: { placement: E } } : {};
        },
      }
    );
  },
  Wb = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'flip',
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: s,
              middlewareData: o,
              rects: i,
              initialPlacement: a,
              platform: l,
              elements: c,
            } = t,
            {
              mainAxis: u = !0,
              crossAxis: d = !0,
              fallbackPlacements: h,
              fallbackStrategy: f = 'bestFit',
              fallbackAxisSideDirection: p = 'none',
              flipAlignment: m = !0,
              ...b
            } = ar(e, t);
          if ((n = o.arrow) != null && n.alignmentOffset) return {};
          const y = qt(s),
            _ = rr(a),
            g = qt(a) === a,
            v = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)),
            x = h || (g || !m ? [Ho(a)] : Lb(a)),
            $ = p !== 'none';
          !h && $ && x.push(...Hb(a, m, p, v));
          const k = [a, ...x],
            U = await gi(t, b),
            E = [];
          let A = ((r = o.flip) == null ? void 0 : r.overflows) || [];
          if ((u && E.push(U[y]), d)) {
            const H = Th(s, i, v);
            E.push(U[H[0]], U[H[1]]);
          }
          if (((A = [...A, { placement: s, overflows: E }]), !E.every((H) => H <= 0))) {
            var T, C;
            const H = (((T = o.flip) == null ? void 0 : T.index) || 0) + 1,
              K = k[H];
            if (K) return { data: { index: H, overflows: A }, reset: { placement: K } };
            let D =
              (C = A.filter((B) => B.overflows[0] <= 0).sort(
                (B, F) => B.overflows[1] - F.overflows[1],
              )[0]) == null
                ? void 0
                : C.placement;
            if (!D)
              switch (f) {
                case 'bestFit': {
                  var R;
                  const B =
                    (R = A.filter((F) => {
                      if ($) {
                        const ne = rr(F.placement);
                        return ne === _ || ne === 'y';
                      }
                      return !0;
                    })
                      .map((F) => [
                        F.placement,
                        F.overflows.filter((ne) => ne > 0).reduce((ne, me) => ne + me, 0),
                      ])
                      .sort((F, ne) => F[1] - ne[1])[0]) == null
                      ? void 0
                      : R[0];
                  B && (D = B);
                  break;
                }
                case 'initialPlacement':
                  D = a;
                  break;
              }
            if (s !== D) return { reset: { placement: D } };
          }
          return {};
        },
      }
    );
  };
async function zb(e, t) {
  const { placement: n, platform: r, elements: s } = e,
    o = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)),
    i = qt(n),
    a = Ot(n),
    l = rr(n) === 'y',
    c = ['left', 'top'].includes(i) ? -1 : 1,
    u = o && l ? -1 : 1,
    d = ar(t, e);
  let {
    mainAxis: h,
    crossAxis: f,
    alignmentAxis: p,
  } = typeof d == 'number'
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: d.mainAxis || 0, crossAxis: d.crossAxis || 0, alignmentAxis: d.alignmentAxis };
  return (
    a && typeof p == 'number' && (f = a === 'end' ? p * -1 : p),
    l ? { x: f * u, y: h * c } : { x: h * c, y: f * u }
  );
}
const Vb = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: 'offset',
        options: e,
        async fn(t) {
          var n, r;
          const { x: s, y: o, placement: i, middlewareData: a } = t,
            l = await zb(t, e);
          return i === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: s + l.x, y: o + l.y, data: { ...l, placement: i } };
        },
      }
    );
  },
  qb = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'shift',
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: s } = t,
            {
              mainAxis: o = !0,
              crossAxis: i = !1,
              limiter: a = {
                fn: (b) => {
                  let { x: y, y: _ } = b;
                  return { x: y, y: _ };
                },
              },
              ...l
            } = ar(e, t),
            c = { x: n, y: r },
            u = await gi(t, l),
            d = rr(qt(s)),
            h = Ah(d);
          let f = c[h],
            p = c[d];
          if (o) {
            const b = h === 'y' ? 'top' : 'left',
              y = h === 'y' ? 'bottom' : 'right',
              _ = f + u[b],
              g = f - u[y];
            f = Ba(_, f, g);
          }
          if (i) {
            const b = d === 'y' ? 'top' : 'left',
              y = d === 'y' ? 'bottom' : 'right',
              _ = p + u[b],
              g = p - u[y];
            p = Ba(_, p, g);
          }
          const m = a.fn({ ...t, [h]: f, [d]: p });
          return { ...m, data: { x: m.x - n, y: m.y - r, enabled: { [h]: o, [d]: i } } };
        },
      }
    );
  },
  Kb = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'size',
        options: e,
        async fn(t) {
          var n, r;
          const { placement: s, rects: o, platform: i, elements: a } = t,
            { apply: l = () => {}, ...c } = ar(e, t),
            u = await gi(t, c),
            d = qt(s),
            h = Ot(s),
            f = rr(s) === 'y',
            { width: p, height: m } = o.floating;
          let b, y;
          d === 'top' || d === 'bottom'
            ? ((b = d),
              (y =
                h === ((await (i.isRTL == null ? void 0 : i.isRTL(a.floating))) ? 'start' : 'end')
                  ? 'left'
                  : 'right'))
            : ((y = d), (b = h === 'end' ? 'top' : 'bottom'));
          const _ = m - u.top - u.bottom,
            g = p - u.left - u.right,
            v = vs(m - u[b], _),
            x = vs(p - u[y], g),
            $ = !t.middlewareData.shift;
          let k = v,
            U = x;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (U = g),
            (r = t.middlewareData.shift) != null && r.enabled.y && (k = _),
            $ && !h)
          ) {
            const A = zn(u.left, 0),
              T = zn(u.right, 0),
              C = zn(u.top, 0),
              R = zn(u.bottom, 0);
            f
              ? (U = p - 2 * (A !== 0 || T !== 0 ? A + T : zn(u.left, u.right)))
              : (k = m - 2 * (C !== 0 || R !== 0 ? C + R : zn(u.top, u.bottom)));
          }
          await l({ ...t, availableWidth: U, availableHeight: k });
          const E = await i.getDimensions(a.floating);
          return p !== E.width || m !== E.height ? { reset: { rects: !0 } } : {};
        },
      }
    );
  };
function St(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function zt(e) {
  return St(e).getComputedStyle(e);
}
const fu = Math.min,
  os = Math.max,
  jo = Math.round;
function Rh(e) {
  const t = zt(e);
  let n = parseFloat(t.width),
    r = parseFloat(t.height);
  const s = e.offsetWidth,
    o = e.offsetHeight,
    i = jo(n) !== s || jo(r) !== o;
  return i && ((n = s), (r = o)), { width: n, height: r, fallback: i };
}
function Rn(e) {
  return kh(e) ? (e.nodeName || '').toLowerCase() : '';
}
let qs;
function Ph() {
  if (qs) return qs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands)
    ? ((qs = e.brands.map((t) => t.brand + '/' + t.version).join(' ')), qs)
    : navigator.userAgent;
}
function Vt(e) {
  return e instanceof St(e).HTMLElement;
}
function xn(e) {
  return e instanceof St(e).Element;
}
function kh(e) {
  return e instanceof St(e).Node;
}
function du(e) {
  return typeof ShadowRoot > 'u' ? !1 : e instanceof St(e).ShadowRoot || e instanceof ShadowRoot;
}
function mi(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: s } = zt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !['inline', 'contents'].includes(s);
}
function Gb(e) {
  return ['table', 'td', 'th'].includes(Rn(e));
}
function Ua(e) {
  const t = /firefox/i.test(Ph()),
    n = zt(e),
    r = n.backdropFilter || n.WebkitBackdropFilter;
  return (
    n.transform !== 'none' ||
    n.perspective !== 'none' ||
    (!!r && r !== 'none') ||
    (t && n.willChange === 'filter') ||
    (t && !!n.filter && n.filter !== 'none') ||
    ['transform', 'perspective'].some((s) => n.willChange.includes(s)) ||
    ['paint', 'layout', 'strict', 'content'].some((s) => {
      const o = n.contain;
      return o != null && o.includes(s);
    })
  );
}
function Oh() {
  return !/^((?!chrome|android).)*safari/i.test(Ph());
}
function Al(e) {
  return ['html', 'body', '#document'].includes(Rn(e));
}
function Mh(e) {
  return xn(e) ? e : e.contextElement;
}
const Nh = { x: 1, y: 1 };
function Ar(e) {
  const t = Mh(e);
  if (!Vt(t)) return Nh;
  const n = t.getBoundingClientRect(),
    { width: r, height: s, fallback: o } = Rh(t);
  let i = (o ? jo(n.width) : n.width) / r,
    a = (o ? jo(n.height) : n.height) / s;
  return (i && Number.isFinite(i)) || (i = 1), (a && Number.isFinite(a)) || (a = 1), { x: i, y: a };
}
function ws(e, t, n, r) {
  var s, o;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(),
    a = Mh(e);
  let l = Nh;
  t && (r ? xn(r) && (l = Ar(r)) : (l = Ar(e)));
  const c = a ? St(a) : window,
    u = !Oh() && n;
  let d = (i.left + ((u && ((s = c.visualViewport) == null ? void 0 : s.offsetLeft)) || 0)) / l.x,
    h = (i.top + ((u && ((o = c.visualViewport) == null ? void 0 : o.offsetTop)) || 0)) / l.y,
    f = i.width / l.x,
    p = i.height / l.y;
  if (a) {
    const m = St(a),
      b = r && xn(r) ? St(r) : r;
    let y = m.frameElement;
    for (; y && r && b !== m; ) {
      const _ = Ar(y),
        g = y.getBoundingClientRect(),
        v = getComputedStyle(y);
      (g.x += (y.clientLeft + parseFloat(v.paddingLeft)) * _.x),
        (g.y += (y.clientTop + parseFloat(v.paddingTop)) * _.y),
        (d *= _.x),
        (h *= _.y),
        (f *= _.x),
        (p *= _.y),
        (d += g.x),
        (h += g.y),
        (y = St(y).frameElement);
    }
  }
  return { width: f, height: p, top: h, right: d + f, bottom: h + p, left: d, x: d, y: h };
}
function An(e) {
  return ((kh(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function yi(e) {
  return xn(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Lh(e) {
  return ws(An(e)).left + yi(e).scrollLeft;
}
function bs(e) {
  if (Rn(e) === 'html') return e;
  const t = e.assignedSlot || e.parentNode || (du(e) && e.host) || An(e);
  return du(t) ? t.host : t;
}
function Ih(e) {
  const t = bs(e);
  return Al(t) ? t.ownerDocument.body : Vt(t) && mi(t) ? t : Ih(t);
}
function Fo(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Ih(e),
    s = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    o = St(r);
  return s ? t.concat(o, o.visualViewport || [], mi(r) ? r : []) : t.concat(r, Fo(r));
}
function hu(e, t, n) {
  return t === 'viewport'
    ? ss(
        (function (r, s) {
          const o = St(r),
            i = An(r),
            a = o.visualViewport;
          let l = i.clientWidth,
            c = i.clientHeight,
            u = 0,
            d = 0;
          if (a) {
            (l = a.width), (c = a.height);
            const h = Oh();
            (h || (!h && s === 'fixed')) && ((u = a.offsetLeft), (d = a.offsetTop));
          }
          return { width: l, height: c, x: u, y: d };
        })(e, n),
      )
    : xn(t)
      ? ss(
          (function (r, s) {
            const o = ws(r, !0, s === 'fixed'),
              i = o.top + r.clientTop,
              a = o.left + r.clientLeft,
              l = Vt(r) ? Ar(r) : { x: 1, y: 1 };
            return {
              width: r.clientWidth * l.x,
              height: r.clientHeight * l.y,
              x: a * l.x,
              y: i * l.y,
            };
          })(t, n),
        )
      : ss(
          (function (r) {
            const s = An(r),
              o = yi(r),
              i = r.ownerDocument.body,
              a = os(s.scrollWidth, s.clientWidth, i.scrollWidth, i.clientWidth),
              l = os(s.scrollHeight, s.clientHeight, i.scrollHeight, i.clientHeight);
            let c = -o.scrollLeft + Lh(r);
            const u = -o.scrollTop;
            return (
              zt(i).direction === 'rtl' && (c += os(s.clientWidth, i.clientWidth) - a),
              { width: a, height: l, x: c, y: u }
            );
          })(An(e)),
        );
}
function pu(e) {
  return Vt(e) && zt(e).position !== 'fixed' ? e.offsetParent : null;
}
function gu(e) {
  const t = St(e);
  let n = pu(e);
  for (; n && Gb(n) && zt(n).position === 'static'; ) n = pu(n);
  return n && (Rn(n) === 'html' || (Rn(n) === 'body' && zt(n).position === 'static' && !Ua(n)))
    ? t
    : n ||
        (function (r) {
          let s = bs(r);
          for (; Vt(s) && !Al(s); ) {
            if (Ua(s)) return s;
            s = bs(s);
          }
          return null;
        })(e) ||
        t;
}
function Jb(e, t, n) {
  const r = Vt(t),
    s = An(t),
    o = ws(e, !0, n === 'fixed', t);
  let i = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (r || (!r && n !== 'fixed'))
    if (((Rn(t) !== 'body' || mi(s)) && (i = yi(t)), Vt(t))) {
      const l = ws(t, !0);
      (a.x = l.x + t.clientLeft), (a.y = l.y + t.clientTop);
    } else s && (a.x = Lh(s));
  return {
    x: o.left + i.scrollLeft - a.x,
    y: o.top + i.scrollTop - a.y,
    width: o.width,
    height: o.height,
  };
}
const Yb = {
    getClippingRect: function (e) {
      let { element: t, boundary: n, rootBoundary: r, strategy: s } = e;
      const o =
          n === 'clippingAncestors'
            ? (function (c, u) {
                const d = u.get(c);
                if (d) return d;
                let h = Fo(c).filter((b) => xn(b) && Rn(b) !== 'body'),
                  f = null;
                const p = zt(c).position === 'fixed';
                let m = p ? bs(c) : c;
                for (; xn(m) && !Al(m); ) {
                  const b = zt(m),
                    y = Ua(m);
                  (
                    p
                      ? y || f
                      : y ||
                        b.position !== 'static' ||
                        !f ||
                        !['absolute', 'fixed'].includes(f.position)
                  )
                    ? (f = b)
                    : (h = h.filter((_) => _ !== m)),
                    (m = bs(m));
                }
                return u.set(c, h), h;
              })(t, this._c)
            : [].concat(n),
        i = [...o, r],
        a = i[0],
        l = i.reduce(
          (c, u) => {
            const d = hu(t, u, s);
            return (
              (c.top = os(d.top, c.top)),
              (c.right = fu(d.right, c.right)),
              (c.bottom = fu(d.bottom, c.bottom)),
              (c.left = os(d.left, c.left)),
              c
            );
          },
          hu(t, a, s),
        );
      return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
    },
    convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
      let { rect: t, offsetParent: n, strategy: r } = e;
      const s = Vt(n),
        o = An(n);
      if (n === o) return t;
      let i = { scrollLeft: 0, scrollTop: 0 },
        a = { x: 1, y: 1 };
      const l = { x: 0, y: 0 };
      if ((s || (!s && r !== 'fixed')) && ((Rn(n) !== 'body' || mi(o)) && (i = yi(n)), Vt(n))) {
        const c = ws(n);
        (a = Ar(n)), (l.x = c.x + n.clientLeft), (l.y = c.y + n.clientTop);
      }
      return {
        width: t.width * a.x,
        height: t.height * a.y,
        x: t.x * a.x - i.scrollLeft * a.x + l.x,
        y: t.y * a.y - i.scrollTop * a.y + l.y,
      };
    },
    isElement: xn,
    getDimensions: function (e) {
      return Vt(e) ? Rh(e) : e.getBoundingClientRect();
    },
    getOffsetParent: gu,
    getDocumentElement: An,
    getScale: Ar,
    async getElementRects(e) {
      let { reference: t, floating: n, strategy: r } = e;
      const s = this.getOffsetParent || gu,
        o = this.getDimensions;
      return { reference: Jb(t, await s(n), r), floating: { x: 0, y: 0, ...(await o(n)) } };
    },
    getClientRects: (e) => Array.from(e.getClientRects()),
    isRTL: (e) => zt(e).direction === 'rtl',
  },
  Xb = (e, t, n) => {
    const r = new Map(),
      s = { platform: Yb, ...n },
      o = { ...s.platform, _c: r };
    return Fb(e, t, { ...s, platform: o });
  };
function Hh(e, t) {
  for (const n in t)
    Object.prototype.hasOwnProperty.call(t, n) &&
      (typeof t[n] == 'object' && e[n] ? Hh(e[n], t[n]) : (e[n] = t[n]));
}
const Mt = {
  disabled: !1,
  distance: 5,
  skidding: 0,
  container: 'body',
  boundary: void 0,
  instantMove: !1,
  disposeTimeout: 150,
  popperTriggers: [],
  strategy: 'absolute',
  preventOverflow: !0,
  flip: !0,
  shift: !0,
  overflowPadding: 0,
  arrowPadding: 0,
  arrowOverflow: !0,
  autoHideOnMousedown: !1,
  themes: {
    tooltip: {
      placement: 'top',
      triggers: ['hover', 'focus', 'touch'],
      hideTriggers: (e) => [...e, 'click'],
      delay: { show: 200, hide: 0 },
      handleResize: !1,
      html: !1,
      loadingContent: '...',
    },
    dropdown: {
      placement: 'bottom',
      triggers: ['click'],
      delay: 0,
      handleResize: !0,
      autoHide: !0,
    },
    menu: {
      $extend: 'dropdown',
      triggers: ['hover', 'focus'],
      popperTriggers: ['hover'],
      delay: { show: 0, hide: 400 },
    },
  },
};
function _s(e, t) {
  let n = Mt.themes[e] || {},
    r;
  do
    (r = n[t]),
      typeof r > 'u'
        ? n.$extend
          ? (n = Mt.themes[n.$extend] || {})
          : ((n = null), (r = Mt[t]))
        : (n = null);
  while (n);
  return r;
}
function Zb(e) {
  const t = [e];
  let n = Mt.themes[e] || {};
  do n.$extend && !n.$resetCss ? (t.push(n.$extend), (n = Mt.themes[n.$extend] || {})) : (n = null);
  while (n);
  return t.map((r) => `v-popper--theme-${r}`);
}
function mu(e) {
  const t = [e];
  let n = Mt.themes[e] || {};
  do n.$extend ? (t.push(n.$extend), (n = Mt.themes[n.$extend] || {})) : (n = null);
  while (n);
  return t;
}
let Nr = !1;
if (typeof window < 'u') {
  Nr = !1;
  try {
    const e = Object.defineProperty({}, 'passive', {
      get() {
        Nr = !0;
      },
    });
    window.addEventListener('test', null, e);
  } catch {}
}
let jh = !1;
typeof window < 'u' &&
  typeof navigator < 'u' &&
  (jh = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const Fh = ['auto', 'top', 'bottom', 'left', 'right'].reduce(
    (e, t) => e.concat([t, `${t}-start`, `${t}-end`]),
    [],
  ),
  yu = {
    hover: 'mouseenter',
    focus: 'focus',
    click: 'click',
    touch: 'touchstart',
    pointer: 'pointerdown',
  },
  vu = {
    hover: 'mouseleave',
    focus: 'blur',
    click: 'click',
    touch: 'touchend',
    pointer: 'pointerup',
  };
function wu(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Wi() {
  return new Promise((e) =>
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    }),
  );
}
const Pt = [];
let Un = null;
const bu = {};
function _u(e) {
  let t = bu[e];
  return t || (t = bu[e] = []), t;
}
let Wa = function () {};
typeof window < 'u' && (Wa = window.Element);
function fe(e) {
  return function (t) {
    return _s(t.theme, e);
  };
}
const zi = '__floating-vue__popper',
  Dh = () =>
    vt({
      name: 'VPopper',
      provide() {
        return { [zi]: { parentPopper: this } };
      },
      inject: { [zi]: { default: null } },
      props: {
        theme: { type: String, required: !0 },
        targetNodes: { type: Function, required: !0 },
        referenceNode: { type: Function, default: null },
        popperNode: { type: Function, required: !0 },
        shown: { type: Boolean, default: !1 },
        showGroup: { type: String, default: null },
        ariaId: { default: null },
        disabled: { type: Boolean, default: fe('disabled') },
        positioningDisabled: { type: Boolean, default: fe('positioningDisabled') },
        placement: { type: String, default: fe('placement'), validator: (e) => Fh.includes(e) },
        delay: { type: [String, Number, Object], default: fe('delay') },
        distance: { type: [Number, String], default: fe('distance') },
        skidding: { type: [Number, String], default: fe('skidding') },
        triggers: { type: Array, default: fe('triggers') },
        showTriggers: { type: [Array, Function], default: fe('showTriggers') },
        hideTriggers: { type: [Array, Function], default: fe('hideTriggers') },
        popperTriggers: { type: Array, default: fe('popperTriggers') },
        popperShowTriggers: { type: [Array, Function], default: fe('popperShowTriggers') },
        popperHideTriggers: { type: [Array, Function], default: fe('popperHideTriggers') },
        container: { type: [String, Object, Wa, Boolean], default: fe('container') },
        boundary: { type: [String, Wa], default: fe('boundary') },
        strategy: {
          type: String,
          validator: (e) => ['absolute', 'fixed'].includes(e),
          default: fe('strategy'),
        },
        autoHide: { type: [Boolean, Function], default: fe('autoHide') },
        handleResize: { type: Boolean, default: fe('handleResize') },
        instantMove: { type: Boolean, default: fe('instantMove') },
        eagerMount: { type: Boolean, default: fe('eagerMount') },
        popperClass: { type: [String, Array, Object], default: fe('popperClass') },
        computeTransformOrigin: { type: Boolean, default: fe('computeTransformOrigin') },
        autoMinSize: { type: Boolean, default: fe('autoMinSize') },
        autoSize: { type: [Boolean, String], default: fe('autoSize') },
        autoMaxSize: { type: Boolean, default: fe('autoMaxSize') },
        autoBoundaryMaxSize: { type: Boolean, default: fe('autoBoundaryMaxSize') },
        preventOverflow: { type: Boolean, default: fe('preventOverflow') },
        overflowPadding: { type: [Number, String], default: fe('overflowPadding') },
        arrowPadding: { type: [Number, String], default: fe('arrowPadding') },
        arrowOverflow: { type: Boolean, default: fe('arrowOverflow') },
        flip: { type: Boolean, default: fe('flip') },
        shift: { type: Boolean, default: fe('shift') },
        shiftCrossAxis: { type: Boolean, default: fe('shiftCrossAxis') },
        noAutoFocus: { type: Boolean, default: fe('noAutoFocus') },
        disposeTimeout: { type: Number, default: fe('disposeTimeout') },
      },
      emits: {
        show: () => !0,
        hide: () => !0,
        'update:shown': (e) => !0,
        'apply-show': () => !0,
        'apply-hide': () => !0,
        'close-group': () => !0,
        'close-directive': () => !0,
        'auto-hide': () => !0,
        resize: () => !0,
      },
      data() {
        return {
          isShown: !1,
          isMounted: !1,
          skipTransition: !1,
          classes: { showFrom: !1, showTo: !1, hideFrom: !1, hideTo: !0 },
          result: {
            x: 0,
            y: 0,
            placement: '',
            strategy: this.strategy,
            arrow: { x: 0, y: 0, centerOffset: 0 },
            transformOrigin: null,
          },
          randomId: `popper_${[Math.random(), Date.now()].map((e) => e.toString(36).substring(2, 10)).join('_')}`,
          shownChildren: new Set(),
          lastAutoHide: !0,
          pendingHide: !1,
          containsGlobalTarget: !1,
          isDisposed: !0,
          mouseDownContains: !1,
        };
      },
      computed: {
        popperId() {
          return this.ariaId != null ? this.ariaId : this.randomId;
        },
        shouldMountContent() {
          return this.eagerMount || this.isMounted;
        },
        slotData() {
          return {
            popperId: this.popperId,
            isShown: this.isShown,
            shouldMountContent: this.shouldMountContent,
            skipTransition: this.skipTransition,
            autoHide: typeof this.autoHide == 'function' ? this.lastAutoHide : this.autoHide,
            show: this.show,
            hide: this.hide,
            handleResize: this.handleResize,
            onResize: this.onResize,
            classes: { ...this.classes, popperClass: this.popperClass },
            result: this.positioningDisabled ? null : this.result,
            attrs: this.$attrs,
          };
        },
        parentPopper() {
          var e;
          return (e = this[zi]) == null ? void 0 : e.parentPopper;
        },
        hasPopperShowTriggerHover() {
          var e, t;
          return (
            ((e = this.popperTriggers) == null ? void 0 : e.includes('hover')) ||
            ((t = this.popperShowTriggers) == null ? void 0 : t.includes('hover'))
          );
        },
      },
      watch: {
        shown: '$_autoShowHide',
        disabled(e) {
          e ? this.dispose() : this.init();
        },
        async container() {
          this.isShown && (this.$_ensureTeleport(), await this.$_computePosition());
        },
        triggers: { handler: '$_refreshListeners', deep: !0 },
        positioningDisabled: '$_refreshListeners',
        ...[
          'placement',
          'distance',
          'skidding',
          'boundary',
          'strategy',
          'overflowPadding',
          'arrowPadding',
          'preventOverflow',
          'shift',
          'shiftCrossAxis',
          'flip',
        ].reduce((e, t) => ((e[t] = '$_computePosition'), e), {}),
      },
      created() {
        this.autoMinSize &&
          console.warn(
            '[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.',
          ),
          this.autoMaxSize &&
            console.warn(
              '[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.',
            );
      },
      mounted() {
        this.init(), this.$_detachPopperNode();
      },
      activated() {
        this.$_autoShowHide();
      },
      deactivated() {
        this.hide();
      },
      beforeUnmount() {
        this.dispose();
      },
      methods: {
        show({ event: e = null, skipDelay: t = !1, force: n = !1 } = {}) {
          var r, s;
          ((r = this.parentPopper) != null &&
            r.lockedChild &&
            this.parentPopper.lockedChild !== this) ||
            ((this.pendingHide = !1),
            (n || !this.disabled) &&
              (((s = this.parentPopper) == null ? void 0 : s.lockedChild) === this &&
                (this.parentPopper.lockedChild = null),
              this.$_scheduleShow(e, t),
              this.$emit('show'),
              (this.$_showFrameLocked = !0),
              requestAnimationFrame(() => {
                this.$_showFrameLocked = !1;
              })),
            this.$emit('update:shown', !0));
        },
        hide({ event: e = null, skipDelay: t = !1 } = {}) {
          var n;
          if (!this.$_hideInProgress) {
            if (this.shownChildren.size > 0) {
              this.pendingHide = !0;
              return;
            }
            if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
              this.parentPopper &&
                ((this.parentPopper.lockedChild = this),
                clearTimeout(this.parentPopper.lockedChildTimer),
                (this.parentPopper.lockedChildTimer = setTimeout(() => {
                  this.parentPopper.lockedChild === this &&
                    (this.parentPopper.lockedChild.hide({ skipDelay: t }),
                    (this.parentPopper.lockedChild = null));
                }, 1e3)));
              return;
            }
            ((n = this.parentPopper) == null ? void 0 : n.lockedChild) === this &&
              (this.parentPopper.lockedChild = null),
              (this.pendingHide = !1),
              this.$_scheduleHide(e, t),
              this.$emit('hide'),
              this.$emit('update:shown', !1);
          }
        },
        init() {
          var e;
          this.isDisposed &&
            ((this.isDisposed = !1),
            (this.isMounted = !1),
            (this.$_events = []),
            (this.$_preventShow = !1),
            (this.$_referenceNode =
              ((e = this.referenceNode) == null ? void 0 : e.call(this)) ?? this.$el),
            (this.$_targetNodes = this.targetNodes().filter((t) => t.nodeType === t.ELEMENT_NODE)),
            (this.$_popperNode = this.popperNode()),
            (this.$_innerNode = this.$_popperNode.querySelector('.v-popper__inner')),
            (this.$_arrowNode = this.$_popperNode.querySelector('.v-popper__arrow-container')),
            this.$_swapTargetAttrs('title', 'data-original-title'),
            this.$_detachPopperNode(),
            this.triggers.length && this.$_addEventListeners(),
            this.shown && this.show());
        },
        dispose() {
          this.isDisposed ||
            ((this.isDisposed = !0),
            this.$_removeEventListeners(),
            this.hide({ skipDelay: !0 }),
            this.$_detachPopperNode(),
            (this.isMounted = !1),
            (this.isShown = !1),
            this.$_updateParentShownChildren(!1),
            this.$_swapTargetAttrs('data-original-title', 'title'));
        },
        async onResize() {
          this.isShown && (await this.$_computePosition(), this.$emit('resize'));
        },
        async $_computePosition() {
          if (this.isDisposed || this.positioningDisabled) return;
          const e = { strategy: this.strategy, middleware: [] };
          (this.distance || this.skidding) &&
            e.middleware.push(Vb({ mainAxis: this.distance, crossAxis: this.skidding }));
          const t = this.placement.startsWith('auto');
          if (
            (t
              ? e.middleware.push(Ub({ alignment: this.placement.split('-')[1] ?? '' }))
              : (e.placement = this.placement),
            this.preventOverflow &&
              (this.shift &&
                e.middleware.push(
                  qb({
                    padding: this.overflowPadding,
                    boundary: this.boundary,
                    crossAxis: this.shiftCrossAxis,
                  }),
                ),
              !t &&
                this.flip &&
                e.middleware.push(Wb({ padding: this.overflowPadding, boundary: this.boundary }))),
            e.middleware.push(Db({ element: this.$_arrowNode, padding: this.arrowPadding })),
            this.arrowOverflow &&
              e.middleware.push({
                name: 'arrowOverflow',
                fn: ({ placement: r, rects: s, middlewareData: o }) => {
                  let i;
                  const { centerOffset: a } = o.arrow;
                  return (
                    r.startsWith('top') || r.startsWith('bottom')
                      ? (i = Math.abs(a) > s.reference.width / 2)
                      : (i = Math.abs(a) > s.reference.height / 2),
                    { data: { overflow: i } }
                  );
                },
              }),
            this.autoMinSize || this.autoSize)
          ) {
            const r = this.autoSize ? this.autoSize : this.autoMinSize ? 'min' : null;
            e.middleware.push({
              name: 'autoSize',
              fn: ({ rects: s, placement: o, middlewareData: i }) => {
                var a;
                if ((a = i.autoSize) != null && a.skip) return {};
                let l, c;
                return (
                  o.startsWith('top') || o.startsWith('bottom')
                    ? (l = s.reference.width)
                    : (c = s.reference.height),
                  (this.$_innerNode.style[
                    r === 'min' ? 'minWidth' : r === 'max' ? 'maxWidth' : 'width'
                  ] = l != null ? `${l}px` : null),
                  (this.$_innerNode.style[
                    r === 'min' ? 'minHeight' : r === 'max' ? 'maxHeight' : 'height'
                  ] = c != null ? `${c}px` : null),
                  { data: { skip: !0 }, reset: { rects: !0 } }
                );
              },
            });
          }
          (this.autoMaxSize || this.autoBoundaryMaxSize) &&
            ((this.$_innerNode.style.maxWidth = null),
            (this.$_innerNode.style.maxHeight = null),
            e.middleware.push(
              Kb({
                boundary: this.boundary,
                padding: this.overflowPadding,
                apply: ({ availableWidth: r, availableHeight: s }) => {
                  (this.$_innerNode.style.maxWidth = r != null ? `${r}px` : null),
                    (this.$_innerNode.style.maxHeight = s != null ? `${s}px` : null);
                },
              }),
            ));
          const n = await Xb(this.$_referenceNode, this.$_popperNode, e);
          Object.assign(this.result, {
            x: n.x,
            y: n.y,
            placement: n.placement,
            strategy: n.strategy,
            arrow: { ...n.middlewareData.arrow, ...n.middlewareData.arrowOverflow },
          });
        },
        $_scheduleShow(e, t = !1) {
          if (
            (this.$_updateParentShownChildren(!0),
            (this.$_hideInProgress = !1),
            clearTimeout(this.$_scheduleTimer),
            Un && this.instantMove && Un.instantMove && Un !== this.parentPopper)
          ) {
            Un.$_applyHide(!0), this.$_applyShow(!0);
            return;
          }
          t
            ? this.$_applyShow()
            : (this.$_scheduleTimer = setTimeout(
                this.$_applyShow.bind(this),
                this.$_computeDelay('show'),
              ));
        },
        $_scheduleHide(e, t = !1) {
          if (this.shownChildren.size > 0) {
            this.pendingHide = !0;
            return;
          }
          this.$_updateParentShownChildren(!1),
            (this.$_hideInProgress = !0),
            clearTimeout(this.$_scheduleTimer),
            this.isShown && (Un = this),
            t
              ? this.$_applyHide()
              : (this.$_scheduleTimer = setTimeout(
                  this.$_applyHide.bind(this),
                  this.$_computeDelay('hide'),
                ));
        },
        $_computeDelay(e) {
          const t = this.delay;
          return parseInt((t && t[e]) || t || 0);
        },
        async $_applyShow(e = !1) {
          clearTimeout(this.$_disposeTimer),
            clearTimeout(this.$_scheduleTimer),
            (this.skipTransition = e),
            !this.isShown &&
              (this.$_ensureTeleport(),
              await Wi(),
              await this.$_computePosition(),
              await this.$_applyShowEffect(),
              this.positioningDisabled ||
                this.$_registerEventListeners(
                  [...Fo(this.$_referenceNode), ...Fo(this.$_popperNode)],
                  'scroll',
                  () => {
                    this.$_computePosition();
                  },
                ));
        },
        async $_applyShowEffect() {
          if (this.$_hideInProgress) return;
          if (this.computeTransformOrigin) {
            const t = this.$_referenceNode.getBoundingClientRect(),
              n = this.$_popperNode.querySelector('.v-popper__wrapper'),
              r = n.parentNode.getBoundingClientRect(),
              s = t.x + t.width / 2 - (r.left + n.offsetLeft),
              o = t.y + t.height / 2 - (r.top + n.offsetTop);
            this.result.transformOrigin = `${s}px ${o}px`;
          }
          (this.isShown = !0),
            this.$_applyAttrsToTarget({
              'aria-describedby': this.popperId,
              'data-popper-shown': '',
            });
          const e = this.showGroup;
          if (e) {
            let t;
            for (let n = 0; n < Pt.length; n++)
              (t = Pt[n]), t.showGroup !== e && (t.hide(), t.$emit('close-group'));
          }
          Pt.push(this), document.body.classList.add('v-popper--some-open');
          for (const t of mu(this.theme))
            _u(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
          this.$emit('apply-show'),
            (this.classes.showFrom = !0),
            (this.classes.showTo = !1),
            (this.classes.hideFrom = !1),
            (this.classes.hideTo = !1),
            await Wi(),
            (this.classes.showFrom = !1),
            (this.classes.showTo = !0),
            this.noAutoFocus || this.$_popperNode.focus();
        },
        async $_applyHide(e = !1) {
          if (this.shownChildren.size > 0) {
            (this.pendingHide = !0), (this.$_hideInProgress = !1);
            return;
          }
          if ((clearTimeout(this.$_scheduleTimer), !this.isShown)) return;
          (this.skipTransition = e),
            wu(Pt, this),
            Pt.length === 0 && document.body.classList.remove('v-popper--some-open');
          for (const n of mu(this.theme)) {
            const r = _u(n);
            wu(r, this),
              r.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
          }
          Un === this && (Un = null),
            (this.isShown = !1),
            this.$_applyAttrsToTarget({ 'aria-describedby': void 0, 'data-popper-shown': void 0 }),
            clearTimeout(this.$_disposeTimer);
          const t = this.disposeTimeout;
          t !== null &&
            (this.$_disposeTimer = setTimeout(() => {
              this.$_popperNode && (this.$_detachPopperNode(), (this.isMounted = !1));
            }, t)),
            this.$_removeEventListeners('scroll'),
            this.$emit('apply-hide'),
            (this.classes.showFrom = !1),
            (this.classes.showTo = !1),
            (this.classes.hideFrom = !0),
            (this.classes.hideTo = !1),
            await Wi(),
            (this.classes.hideFrom = !1),
            (this.classes.hideTo = !0);
        },
        $_autoShowHide() {
          this.shown ? this.show() : this.hide();
        },
        $_ensureTeleport() {
          if (this.isDisposed) return;
          let e = this.container;
          if (
            (typeof e == 'string'
              ? (e = window.document.querySelector(e))
              : e === !1 && (e = this.$_targetNodes[0].parentNode),
            !e)
          )
            throw new Error('No container for popover: ' + this.container);
          e.appendChild(this.$_popperNode), (this.isMounted = !0);
        },
        $_addEventListeners() {
          const e = (n) => {
            (this.isShown && !this.$_hideInProgress) ||
              ((n.usedByTooltip = !0), !this.$_preventShow && this.show({ event: n }));
          };
          this.$_registerTriggerListeners(
            this.$_targetNodes,
            yu,
            this.triggers,
            this.showTriggers,
            e,
          ),
            this.$_registerTriggerListeners(
              [this.$_popperNode],
              yu,
              this.popperTriggers,
              this.popperShowTriggers,
              e,
            );
          const t = (n) => {
            n.usedByTooltip || this.hide({ event: n });
          };
          this.$_registerTriggerListeners(
            this.$_targetNodes,
            vu,
            this.triggers,
            this.hideTriggers,
            t,
          ),
            this.$_registerTriggerListeners(
              [this.$_popperNode],
              vu,
              this.popperTriggers,
              this.popperHideTriggers,
              t,
            );
        },
        $_registerEventListeners(e, t, n) {
          this.$_events.push({ targetNodes: e, eventType: t, handler: n }),
            e.forEach((r) => r.addEventListener(t, n, Nr ? { passive: !0 } : void 0));
        },
        $_registerTriggerListeners(e, t, n, r, s) {
          let o = n;
          r != null && (o = typeof r == 'function' ? r(o) : r),
            o.forEach((i) => {
              const a = t[i];
              a && this.$_registerEventListeners(e, a, s);
            });
        },
        $_removeEventListeners(e) {
          const t = [];
          this.$_events.forEach((n) => {
            const { targetNodes: r, eventType: s, handler: o } = n;
            !e || e === s ? r.forEach((i) => i.removeEventListener(s, o)) : t.push(n);
          }),
            (this.$_events = t);
        },
        $_refreshListeners() {
          this.isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
        },
        $_handleGlobalClose(e, t = !1) {
          this.$_showFrameLocked ||
            (this.hide({ event: e }),
            e.closePopover ? this.$emit('close-directive') : this.$emit('auto-hide'),
            t &&
              ((this.$_preventShow = !0),
              setTimeout(() => {
                this.$_preventShow = !1;
              }, 300)));
        },
        $_detachPopperNode() {
          this.$_popperNode.parentNode &&
            this.$_popperNode.parentNode.removeChild(this.$_popperNode);
        },
        $_swapTargetAttrs(e, t) {
          for (const n of this.$_targetNodes) {
            const r = n.getAttribute(e);
            r && (n.removeAttribute(e), n.setAttribute(t, r));
          }
        },
        $_applyAttrsToTarget(e) {
          for (const t of this.$_targetNodes)
            for (const n in e) {
              const r = e[n];
              r == null ? t.removeAttribute(n) : t.setAttribute(n, r);
            }
        },
        $_updateParentShownChildren(e) {
          let t = this.parentPopper;
          for (; t; )
            e
              ? t.shownChildren.add(this.randomId)
              : (t.shownChildren.delete(this.randomId), t.pendingHide && t.hide()),
              (t = t.parentPopper);
        },
        $_isAimingPopper() {
          const e = this.$_referenceNode.getBoundingClientRect();
          if (is >= e.left && is <= e.right && as >= e.top && as <= e.bottom) {
            const t = this.$_popperNode.getBoundingClientRect(),
              n = is - pn,
              r = as - gn,
              s = t.left + t.width / 2 - pn + (t.top + t.height / 2) - gn + t.width + t.height,
              o = pn + n * s,
              i = gn + r * s;
            return (
              Ks(pn, gn, o, i, t.left, t.top, t.left, t.bottom) ||
              Ks(pn, gn, o, i, t.left, t.top, t.right, t.top) ||
              Ks(pn, gn, o, i, t.right, t.top, t.right, t.bottom) ||
              Ks(pn, gn, o, i, t.left, t.bottom, t.right, t.bottom)
            );
          }
          return !1;
        },
      },
      render() {
        return this.$slots.default(this.slotData);
      },
    });
if (typeof document < 'u' && typeof window < 'u') {
  if (jh) {
    const e = Nr ? { passive: !0, capture: !0 } : !0;
    document.addEventListener('touchstart', (t) => Cu(t, !0), e),
      document.addEventListener('touchend', (t) => Su(t, !0), e);
  } else
    window.addEventListener('mousedown', (e) => Cu(e, !1), !0),
      window.addEventListener('click', (e) => Su(e, !1), !0);
  window.addEventListener('resize', e_);
}
function Cu(e, t) {
  if (Mt.autoHideOnMousedown) Bh(e, t);
  else
    for (let n = 0; n < Pt.length; n++) {
      const r = Pt[n];
      try {
        r.mouseDownContains = r.popperNode().contains(e.target);
      } catch {}
    }
}
function Su(e, t) {
  Mt.autoHideOnMousedown || Bh(e, t);
}
function Bh(e, t) {
  const n = {};
  for (let r = Pt.length - 1; r >= 0; r--) {
    const s = Pt[r];
    try {
      const o = (s.containsGlobalTarget = s.mouseDownContains || s.popperNode().contains(e.target));
      (s.pendingHide = !1),
        requestAnimationFrame(() => {
          if (((s.pendingHide = !1), !n[s.randomId] && Eu(s, o, e))) {
            if ((s.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && o)) {
              let a = s.parentPopper;
              for (; a; ) (n[a.randomId] = !0), (a = a.parentPopper);
              return;
            }
            let i = s.parentPopper;
            for (; i && Eu(i, i.containsGlobalTarget, e); )
              i.$_handleGlobalClose(e, t), (i = i.parentPopper);
          }
        });
    } catch {}
  }
}
function Eu(e, t, n) {
  return n.closeAllPopover || (n.closePopover && t) || (Qb(e, n) && !t);
}
function Qb(e, t) {
  if (typeof e.autoHide == 'function') {
    const n = e.autoHide(t);
    return (e.lastAutoHide = n), n;
  }
  return e.autoHide;
}
function e_() {
  for (let e = 0; e < Pt.length; e++) Pt[e].$_computePosition();
}
let pn = 0,
  gn = 0,
  is = 0,
  as = 0;
typeof window < 'u' &&
  window.addEventListener(
    'mousemove',
    (e) => {
      (pn = is), (gn = as), (is = e.clientX), (as = e.clientY);
    },
    Nr ? { passive: !0 } : void 0,
  );
function Ks(e, t, n, r, s, o, i, a) {
  const l = ((i - s) * (t - o) - (a - o) * (e - s)) / ((a - o) * (n - e) - (i - s) * (r - t)),
    c = ((n - e) * (t - o) - (r - t) * (e - s)) / ((a - o) * (n - e) - (i - s) * (r - t));
  return l >= 0 && l <= 1 && c >= 0 && c <= 1;
}
const t_ = { extends: Dh() },
  vi = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t) n[r] = s;
    return n;
  };
function n_(e, t, n, r, s, o) {
  return (
    we(),
    tt(
      'div',
      { ref: 'reference', class: ir(['v-popper', { 'v-popper--shown': e.slotData.isShown }]) },
      [wo(e.$slots, 'default', mf(pl(e.slotData)))],
      2,
    )
  );
}
const r_ = vi(t_, [['render', n_]]);
function s_() {
  var e = window.navigator.userAgent,
    t = e.indexOf('MSIE ');
  if (t > 0) return parseInt(e.substring(t + 5, e.indexOf('.', t)), 10);
  var n = e.indexOf('Trident/');
  if (n > 0) {
    var r = e.indexOf('rv:');
    return parseInt(e.substring(r + 3, e.indexOf('.', r)), 10);
  }
  var s = e.indexOf('Edge/');
  return s > 0 ? parseInt(e.substring(s + 5, e.indexOf('.', s)), 10) : -1;
}
let ao;
function za() {
  za.init || ((za.init = !0), (ao = s_() !== -1));
}
var wi = {
  name: 'ResizeObserver',
  props: {
    emitOnMount: { type: Boolean, default: !1 },
    ignoreWidth: { type: Boolean, default: !1 },
    ignoreHeight: { type: Boolean, default: !1 },
  },
  emits: ['notify'],
  mounted() {
    za(),
      Mn(() => {
        (this._w = this.$el.offsetWidth),
          (this._h = this.$el.offsetHeight),
          this.emitOnMount && this.emitSize();
      });
    const e = document.createElement('object');
    (this._resizeObject = e),
      e.setAttribute('aria-hidden', 'true'),
      e.setAttribute('tabindex', -1),
      (e.onload = this.addResizeHandlers),
      (e.type = 'text/html'),
      ao && this.$el.appendChild(e),
      (e.data = 'about:blank'),
      ao || this.$el.appendChild(e);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      ((!this.ignoreWidth && this._w !== this.$el.offsetWidth) ||
        (!this.ignoreHeight && this._h !== this.$el.offsetHeight)) &&
        ((this._w = this.$el.offsetWidth), (this._h = this.$el.offsetHeight), this.emitSize());
    },
    emitSize() {
      this.$emit('notify', { width: this._w, height: this._h });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener(
        'resize',
        this.compareAndNotify,
      ),
        this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject &&
        this._resizeObject.onload &&
        (!ao &&
          this._resizeObject.contentDocument &&
          this._resizeObject.contentDocument.defaultView.removeEventListener(
            'resize',
            this.compareAndNotify,
          ),
        this.$el.removeChild(this._resizeObject),
        (this._resizeObject.onload = null),
        (this._resizeObject = null));
    },
  },
};
const o_ = Dg();
jg('data-v-b329ee4c');
const i_ = { class: 'resize-observer', tabindex: '-1' };
Fg();
const a_ = o_((e, t, n, r, s, o) => (we(), it('div', i_)));
wi.render = a_;
wi.__scopeId = 'data-v-b329ee4c';
wi.__file = 'src/components/ResizeObserver.vue';
const Uh = (e = 'theme') => ({
    computed: {
      themeClass() {
        return Zb(this[e]);
      },
    },
  }),
  l_ = vt({
    name: 'VPopperContent',
    components: { ResizeObserver: wi },
    mixins: [Uh()],
    props: {
      popperId: String,
      theme: String,
      shown: Boolean,
      mounted: Boolean,
      skipTransition: Boolean,
      autoHide: Boolean,
      handleResize: Boolean,
      classes: Object,
      result: Object,
    },
    emits: ['hide', 'resize'],
    methods: {
      toPx(e) {
        return e != null && !isNaN(e) ? `${e}px` : null;
      },
    },
  }),
  c_ = ['id', 'aria-hidden', 'tabindex', 'data-popper-placement'],
  u_ = { ref: 'inner', class: 'v-popper__inner' },
  f_ = ue('div', { class: 'v-popper__arrow-outer' }, null, -1),
  d_ = ue('div', { class: 'v-popper__arrow-inner' }, null, -1),
  h_ = [f_, d_];
function p_(e, t, n, r, s, o) {
  const i = tr('ResizeObserver');
  return (
    we(),
    tt(
      'div',
      {
        id: e.popperId,
        ref: 'popover',
        class: ir([
          'v-popper__popper',
          [
            e.themeClass,
            e.classes.popperClass,
            {
              'v-popper__popper--shown': e.shown,
              'v-popper__popper--hidden': !e.shown,
              'v-popper__popper--show-from': e.classes.showFrom,
              'v-popper__popper--show-to': e.classes.showTo,
              'v-popper__popper--hide-from': e.classes.hideFrom,
              'v-popper__popper--hide-to': e.classes.hideTo,
              'v-popper__popper--skip-transition': e.skipTransition,
              'v-popper__popper--arrow-overflow': e.result && e.result.arrow.overflow,
              'v-popper__popper--no-positioning': !e.result,
            },
          ],
        ]),
        style: Yn(
          e.result
            ? {
                position: e.result.strategy,
                transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`,
              }
            : void 0,
        ),
        'aria-hidden': e.shown ? 'false' : 'true',
        tabindex: e.autoHide ? 0 : void 0,
        'data-popper-placement': e.result ? e.result.placement : void 0,
        onKeyup: t[2] || (t[2] = Cy((a) => e.autoHide && e.$emit('hide'), ['esc'])),
      },
      [
        ue('div', {
          class: 'v-popper__backdrop',
          onClick: t[0] || (t[0] = (a) => e.autoHide && e.$emit('hide')),
        }),
        ue(
          'div',
          {
            class: 'v-popper__wrapper',
            style: Yn(e.result ? { transformOrigin: e.result.transformOrigin } : void 0),
          },
          [
            ue(
              'div',
              u_,
              [
                e.mounted
                  ? (we(),
                    tt(
                      Ie,
                      { key: 0 },
                      [
                        ue('div', null, [wo(e.$slots, 'default')]),
                        e.handleResize
                          ? (we(),
                            it(i, {
                              key: 0,
                              onNotify: t[1] || (t[1] = (a) => e.$emit('resize', a)),
                            }))
                          : qn('', !0),
                      ],
                      64,
                    ))
                  : qn('', !0),
              ],
              512,
            ),
            ue(
              'div',
              {
                ref: 'arrow',
                class: 'v-popper__arrow-container',
                style: Yn(
                  e.result
                    ? { left: e.toPx(e.result.arrow.x), top: e.toPx(e.result.arrow.y) }
                    : void 0,
                ),
              },
              h_,
              4,
            ),
          ],
          4,
        ),
      ],
      46,
      c_,
    )
  );
}
const Wh = vi(l_, [['render', p_]]),
  zh = {
    methods: {
      show(...e) {
        return this.$refs.popper.show(...e);
      },
      hide(...e) {
        return this.$refs.popper.hide(...e);
      },
      dispose(...e) {
        return this.$refs.popper.dispose(...e);
      },
      onResize(...e) {
        return this.$refs.popper.onResize(...e);
      },
    },
  };
let Va = function () {};
typeof window < 'u' && (Va = window.Element);
const g_ = vt({
  name: 'VPopperWrapper',
  components: { Popper: r_, PopperContent: Wh },
  mixins: [zh, Uh('finalTheme')],
  props: {
    theme: { type: String, default: null },
    referenceNode: { type: Function, default: null },
    shown: { type: Boolean, default: !1 },
    showGroup: { type: String, default: null },
    ariaId: { default: null },
    disabled: { type: Boolean, default: void 0 },
    positioningDisabled: { type: Boolean, default: void 0 },
    placement: { type: String, default: void 0 },
    delay: { type: [String, Number, Object], default: void 0 },
    distance: { type: [Number, String], default: void 0 },
    skidding: { type: [Number, String], default: void 0 },
    triggers: { type: Array, default: void 0 },
    showTriggers: { type: [Array, Function], default: void 0 },
    hideTriggers: { type: [Array, Function], default: void 0 },
    popperTriggers: { type: Array, default: void 0 },
    popperShowTriggers: { type: [Array, Function], default: void 0 },
    popperHideTriggers: { type: [Array, Function], default: void 0 },
    container: { type: [String, Object, Va, Boolean], default: void 0 },
    boundary: { type: [String, Va], default: void 0 },
    strategy: { type: String, default: void 0 },
    autoHide: { type: [Boolean, Function], default: void 0 },
    handleResize: { type: Boolean, default: void 0 },
    instantMove: { type: Boolean, default: void 0 },
    eagerMount: { type: Boolean, default: void 0 },
    popperClass: { type: [String, Array, Object], default: void 0 },
    computeTransformOrigin: { type: Boolean, default: void 0 },
    autoMinSize: { type: Boolean, default: void 0 },
    autoSize: { type: [Boolean, String], default: void 0 },
    autoMaxSize: { type: Boolean, default: void 0 },
    autoBoundaryMaxSize: { type: Boolean, default: void 0 },
    preventOverflow: { type: Boolean, default: void 0 },
    overflowPadding: { type: [Number, String], default: void 0 },
    arrowPadding: { type: [Number, String], default: void 0 },
    arrowOverflow: { type: Boolean, default: void 0 },
    flip: { type: Boolean, default: void 0 },
    shift: { type: Boolean, default: void 0 },
    shiftCrossAxis: { type: Boolean, default: void 0 },
    noAutoFocus: { type: Boolean, default: void 0 },
    disposeTimeout: { type: Number, default: void 0 },
  },
  emits: {
    show: () => !0,
    hide: () => !0,
    'update:shown': (e) => !0,
    'apply-show': () => !0,
    'apply-hide': () => !0,
    'close-group': () => !0,
    'close-directive': () => !0,
    'auto-hide': () => !0,
    resize: () => !0,
  },
  computed: {
    finalTheme() {
      return this.theme ?? this.$options.vPopperTheme;
    },
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$el.children).filter((e) => e !== this.$refs.popperContent.$el);
    },
  },
});
function m_(e, t, n, r, s, o) {
  const i = tr('PopperContent'),
    a = tr('Popper');
  return (
    we(),
    it(
      a,
      ml({ ref: 'popper' }, e.$props, {
        theme: e.finalTheme,
        'target-nodes': e.getTargetNodes,
        'popper-node': () => e.$refs.popperContent.$el,
        class: [e.themeClass],
        onShow: t[0] || (t[0] = () => e.$emit('show')),
        onHide: t[1] || (t[1] = () => e.$emit('hide')),
        'onUpdate:shown': t[2] || (t[2] = (l) => e.$emit('update:shown', l)),
        onApplyShow: t[3] || (t[3] = () => e.$emit('apply-show')),
        onApplyHide: t[4] || (t[4] = () => e.$emit('apply-hide')),
        onCloseGroup: t[5] || (t[5] = () => e.$emit('close-group')),
        onCloseDirective: t[6] || (t[6] = () => e.$emit('close-directive')),
        onAutoHide: t[7] || (t[7] = () => e.$emit('auto-hide')),
        onResize: t[8] || (t[8] = () => e.$emit('resize')),
      }),
      {
        default: Wt(
          ({
            popperId: l,
            isShown: c,
            shouldMountContent: u,
            skipTransition: d,
            autoHide: h,
            show: f,
            hide: p,
            handleResize: m,
            onResize: b,
            classes: y,
            result: _,
          }) => [
            wo(e.$slots, 'default', { shown: c, show: f, hide: p }),
            ge(
              i,
              {
                ref: 'popperContent',
                'popper-id': l,
                theme: e.finalTheme,
                shown: c,
                mounted: u,
                'skip-transition': d,
                'auto-hide': h,
                'handle-resize': m,
                classes: y,
                result: _,
                onHide: p,
                onResize: b,
              },
              { default: Wt(() => [wo(e.$slots, 'popper', { shown: c, hide: p })]), _: 2 },
              1032,
              [
                'popper-id',
                'theme',
                'shown',
                'mounted',
                'skip-transition',
                'auto-hide',
                'handle-resize',
                'classes',
                'result',
                'onHide',
                'onResize',
              ],
            ),
          ],
        ),
        _: 3,
      },
      16,
      ['theme', 'target-nodes', 'popper-node', 'class'],
    )
  );
}
const Tl = vi(g_, [['render', m_]]),
  Vh = { ...Tl, name: 'VDropdown', vPopperTheme: 'dropdown' },
  y_ = { ...Tl, name: 'VMenu', vPopperTheme: 'menu' },
  v_ = { ...Tl, name: 'VTooltip', vPopperTheme: 'tooltip' },
  w_ = vt({
    name: 'VTooltipDirective',
    components: { Popper: Dh(), PopperContent: Wh },
    mixins: [zh],
    inheritAttrs: !1,
    props: {
      theme: { type: String, default: 'tooltip' },
      html: { type: Boolean, default: (e) => _s(e.theme, 'html') },
      content: { type: [String, Number, Function], default: null },
      loadingContent: { type: String, default: (e) => _s(e.theme, 'loadingContent') },
      targetNodes: { type: Function, required: !0 },
    },
    data() {
      return { asyncContent: null };
    },
    computed: {
      isContentAsync() {
        return typeof this.content == 'function';
      },
      loading() {
        return this.isContentAsync && this.asyncContent == null;
      },
      finalContent() {
        return this.isContentAsync
          ? this.loading
            ? this.loadingContent
            : this.asyncContent
          : this.content;
      },
    },
    watch: {
      content: {
        handler() {
          this.fetchContent(!0);
        },
        immediate: !0,
      },
      async finalContent() {
        await this.$nextTick(), this.$refs.popper.onResize();
      },
    },
    created() {
      this.$_fetchId = 0;
    },
    methods: {
      fetchContent(e) {
        if (
          typeof this.content == 'function' &&
          this.$_isShown &&
          (e || (!this.$_loading && this.asyncContent == null))
        ) {
          (this.asyncContent = null), (this.$_loading = !0);
          const t = ++this.$_fetchId,
            n = this.content(this);
          n.then ? n.then((r) => this.onResult(t, r)) : this.onResult(t, n);
        }
      },
      onResult(e, t) {
        e === this.$_fetchId && ((this.$_loading = !1), (this.asyncContent = t));
      },
      onShow() {
        (this.$_isShown = !0), this.fetchContent();
      },
      onHide() {
        this.$_isShown = !1;
      },
    },
  }),
  b_ = ['innerHTML'],
  __ = ['textContent'];
function C_(e, t, n, r, s, o) {
  const i = tr('PopperContent'),
    a = tr('Popper');
  return (
    we(),
    it(
      a,
      ml({ ref: 'popper' }, e.$attrs, {
        theme: e.theme,
        'target-nodes': e.targetNodes,
        'popper-node': () => e.$refs.popperContent.$el,
        onApplyShow: e.onShow,
        onApplyHide: e.onHide,
      }),
      {
        default: Wt(
          ({
            popperId: l,
            isShown: c,
            shouldMountContent: u,
            skipTransition: d,
            autoHide: h,
            hide: f,
            handleResize: p,
            onResize: m,
            classes: b,
            result: y,
          }) => [
            ge(
              i,
              {
                ref: 'popperContent',
                class: ir({ 'v-popper--tooltip-loading': e.loading }),
                'popper-id': l,
                theme: e.theme,
                shown: c,
                mounted: u,
                'skip-transition': d,
                'auto-hide': h,
                'handle-resize': p,
                classes: b,
                result: y,
                onHide: f,
                onResize: m,
              },
              {
                default: Wt(() => [
                  e.html
                    ? (we(), tt('div', { key: 0, innerHTML: e.finalContent }, null, 8, b_))
                    : (we(), tt('div', { key: 1, textContent: Sn(e.finalContent) }, null, 8, __)),
                ]),
                _: 2,
              },
              1032,
              [
                'class',
                'popper-id',
                'theme',
                'shown',
                'mounted',
                'skip-transition',
                'auto-hide',
                'handle-resize',
                'classes',
                'result',
                'onHide',
                'onResize',
              ],
            ),
          ],
        ),
        _: 1,
      },
      16,
      ['theme', 'target-nodes', 'popper-node', 'onApplyShow', 'onApplyHide'],
    )
  );
}
const S_ = vi(w_, [['render', C_]]),
  qh = 'v-popper--has-tooltip';
function E_(e, t) {
  let n = e.placement;
  if (!n && t) for (const r of Fh) t[r] && (n = r);
  return n || (n = _s(e.theme || 'tooltip', 'placement')), n;
}
function Kh(e, t, n) {
  let r;
  const s = typeof t;
  return (
    s === 'string' ? (r = { content: t }) : t && s === 'object' ? (r = t) : (r = { content: !1 }),
    (r.placement = E_(r, n)),
    (r.targetNodes = () => [e]),
    (r.referenceNode = () => e),
    r
  );
}
let Vi,
  Cs,
  x_ = 0;
function A_() {
  if (Vi) return;
  (Cs = Te([])),
    (Vi = Ld({
      name: 'VTooltipDirectiveApp',
      setup() {
        return { directives: Cs };
      },
      render() {
        return this.directives.map((t) =>
          mt(S_, { ...t.options, shown: t.shown || t.options.shown, key: t.id }),
        );
      },
      devtools: { hide: !0 },
    }));
  const e = document.createElement('div');
  document.body.appendChild(e), Vi.mount(e);
}
function T_(e, t, n) {
  A_();
  const r = Te(Kh(e, t, n)),
    s = Te(!1),
    o = { id: x_++, options: r, shown: s };
  return (
    Cs.value.push(o),
    e.classList && e.classList.add(qh),
    (e.$_popper = {
      options: r,
      item: o,
      show() {
        s.value = !0;
      },
      hide() {
        s.value = !1;
      },
    })
  );
}
function Gh(e) {
  if (e.$_popper) {
    const t = Cs.value.indexOf(e.$_popper.item);
    t !== -1 && Cs.value.splice(t, 1),
      delete e.$_popper,
      delete e.$_popperOldShown,
      delete e.$_popperMountTarget;
  }
  e.classList && e.classList.remove(qh);
}
function xu(e, { value: t, modifiers: n }) {
  const r = Kh(e, t, n);
  if (!r.content || _s(r.theme || 'tooltip', 'disabled')) Gh(e);
  else {
    let s;
    e.$_popper ? ((s = e.$_popper), (s.options.value = r)) : (s = T_(e, t, n)),
      typeof t.shown < 'u' &&
        t.shown !== e.$_popperOldShown &&
        ((e.$_popperOldShown = t.shown), t.shown ? s.show() : s.hide());
  }
}
const Jh = {
  beforeMount: xu,
  updated: xu,
  beforeUnmount(e) {
    Gh(e);
  },
};
function Au(e) {
  e.addEventListener('mousedown', Do),
    e.addEventListener('click', Do),
    e.addEventListener('touchstart', Yh, Nr ? { passive: !0 } : !1);
}
function Tu(e) {
  e.removeEventListener('mousedown', Do),
    e.removeEventListener('click', Do),
    e.removeEventListener('touchstart', Yh),
    e.removeEventListener('touchend', Xh),
    e.removeEventListener('touchcancel', Zh);
}
function Do(e) {
  const t = e.currentTarget;
  (e.closePopover = !t.$_vclosepopover_touch),
    (e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all);
}
function Yh(e) {
  if (e.changedTouches.length === 1) {
    const t = e.currentTarget;
    t.$_vclosepopover_touch = !0;
    const n = e.changedTouches[0];
    (t.$_vclosepopover_touchPoint = n),
      t.addEventListener('touchend', Xh),
      t.addEventListener('touchcancel', Zh);
  }
}
function Xh(e) {
  const t = e.currentTarget;
  if (((t.$_vclosepopover_touch = !1), e.changedTouches.length === 1)) {
    const n = e.changedTouches[0],
      r = t.$_vclosepopover_touchPoint;
    (e.closePopover = Math.abs(n.screenY - r.screenY) < 20 && Math.abs(n.screenX - r.screenX) < 20),
      (e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all);
  }
}
function Zh(e) {
  const t = e.currentTarget;
  t.$_vclosepopover_touch = !1;
}
const $_ = {
    beforeMount(e, { value: t, modifiers: n }) {
      (e.$_closePopoverModifiers = n), (typeof t > 'u' || t) && Au(e);
    },
    updated(e, { value: t, oldValue: n, modifiers: r }) {
      (e.$_closePopoverModifiers = r), t !== n && (typeof t > 'u' || t ? Au(e) : Tu(e));
    },
    beforeUnmount(e) {
      Tu(e);
    },
  },
  QE = Jh,
  ex = Vh;
function R_(e, t = {}) {
  e.$_vTooltipInstalled ||
    ((e.$_vTooltipInstalled = !0),
    Hh(Mt, t),
    e.directive('tooltip', Jh),
    e.directive('close-popper', $_),
    e.component('VTooltip', v_),
    e.component('VDropdown', Vh),
    e.component('VMenu', y_));
}
const P_ = { version: '5.2.2', install: R_, options: Mt },
  k_ = Ht((e) => {
    e.vueApp.use(P_, { overflowPadding: 20 });
  }),
  O_ = [t0, r0, Cb, Eb, xb, Ab, $b, Rb, Pb, kb, k_],
  M_ = wl('/favicon.svg'),
  $u = '1.0.2',
  N_ = ['href'],
  Qh = vt({
    __name: 'ConfigInspectorBadge',
    props: { showVersion: { type: Boolean, default: !0 } },
    setup(e) {
      return (t, n) => (
        we(),
        tt('div', null, [
          n[0] ||
            (n[0] = ue(
              'a',
              {
                href: 'https://github.com/eslint/config-inspector',
                target: '_blank',
                flex: 'inline gap-2 items-center',
                mr1: '',
              },
              [
                ue('img', { src: M_, 'inline-block': '', 'h-1em': '' }),
                gt(' ESLint Config Inspector '),
              ],
              -1,
            )),
          t.showVersion
            ? (we(),
              tt(
                'a',
                {
                  key: 0,
                  ml1: '',
                  'inline-block': '',
                  'translate-y--5': '',
                  'text-0.6em': '',
                  'font-200': '',
                  'font-mono': '',
                  op50: '',
                  href: `https://github.com/eslint/config-inspector/releases/tag/v${oe($u)}`,
                  target: '_blank',
                },
                ' v' + Sn(oe($u)),
                9,
                N_,
              ))
            : qn('', !0),
        ])
      );
    },
  });
async function ep(e, t = nt()) {
  const { path: n, matched: r } = t.resolve(e);
  if (!r.length || (t._routePreloaded || (t._routePreloaded = new Set()), t._routePreloaded.has(n)))
    return;
  const s = (t._preloadPromises = t._preloadPromises || []);
  if (s.length > 4) return Promise.all(s).then(() => ep(e, t));
  t._routePreloaded.add(n);
  const o = r
    .map((i) => {
      var a;
      return (a = i.components) == null ? void 0 : a.default;
    })
    .filter((i) => typeof i == 'function');
  for (const i of o) {
    const a = Promise.resolve(i())
      .catch(() => {})
      .finally(() => s.splice(s.indexOf(a)));
    s.push(a);
  }
  await Promise.all(s);
}
const L_ = (...e) => e.find((t) => t !== void 0);
function I_(e) {
  const t = e.componentName || 'NuxtLink';
  function n(o) {
    return typeof o == 'string' && o.startsWith('#');
  }
  function r(o, i) {
    if (!o || (e.trailingSlash !== 'append' && e.trailingSlash !== 'remove')) return o;
    if (typeof o == 'string') return Ru(o, e.trailingSlash);
    const a = 'path' in o && o.path !== void 0 ? o.path : i(o).path;
    return { ...o, name: void 0, path: Ru(a, e.trailingSlash) };
  }
  function s(o) {
    const i = nt(),
      a = Fr(),
      l = ae(() => !!o.target && o.target !== '_self'),
      c = ae(() => {
        const b = o.to || o.href || '';
        return typeof b == 'string' && un(b, { acceptRelative: !0 });
      }),
      u = tr('RouterLink'),
      d = u && typeof u != 'string' ? u.useLink : void 0,
      h = ae(() => {
        if (o.external) return !0;
        const b = o.to || o.href || '';
        return typeof b == 'object' ? !1 : b === '' || c.value;
      }),
      f = ae(() => {
        const b = o.to || o.href || '';
        return h.value ? b : r(b, i.resolve);
      }),
      p = h.value || d == null ? void 0 : d({ ...o, to: f }),
      m = ae(() => {
        var b;
        if (!f.value || c.value || n(f.value)) return f.value;
        if (h.value) {
          const y = typeof f.value == 'object' && 'path' in f.value ? ka(f.value) : f.value,
            _ = typeof y == 'object' ? i.resolve(y).href : y;
          return r(_, i.resolve);
        }
        return typeof f.value == 'object'
          ? (((b = i.resolve(f.value)) == null ? void 0 : b.href) ?? null)
          : r(li(a.app.baseURL, f.value), i.resolve);
      });
    return {
      to: f,
      hasTarget: l,
      isAbsoluteUrl: c,
      isExternal: h,
      href: m,
      isActive:
        (p == null ? void 0 : p.isActive) ?? ae(() => f.value === i.currentRoute.value.path),
      isExactActive:
        (p == null ? void 0 : p.isExactActive) ?? ae(() => f.value === i.currentRoute.value.path),
      route: (p == null ? void 0 : p.route) ?? ae(() => i.resolve(f.value)),
      async navigate() {
        await Jv(m.value, { replace: o.replace, external: h.value || l.value });
      },
    };
  }
  return vt({
    name: t,
    props: {
      to: { type: [String, Object], default: void 0, required: !1 },
      href: { type: [String, Object], default: void 0, required: !1 },
      target: { type: String, default: void 0, required: !1 },
      rel: { type: String, default: void 0, required: !1 },
      noRel: { type: Boolean, default: void 0, required: !1 },
      prefetch: { type: Boolean, default: void 0, required: !1 },
      prefetchOn: { type: [String, Object], default: void 0, required: !1 },
      noPrefetch: { type: Boolean, default: void 0, required: !1 },
      activeClass: { type: String, default: void 0, required: !1 },
      exactActiveClass: { type: String, default: void 0, required: !1 },
      prefetchedClass: { type: String, default: void 0, required: !1 },
      replace: { type: Boolean, default: void 0, required: !1 },
      ariaCurrentValue: { type: String, default: void 0, required: !1 },
      external: { type: Boolean, default: void 0, required: !1 },
      custom: { type: Boolean, default: void 0, required: !1 },
    },
    useLink: s,
    setup(o, { slots: i }) {
      const a = nt(),
        { to: l, href: c, navigate: u, isExternal: d, hasTarget: h, isAbsoluteUrl: f } = s(o),
        p = Te(!1),
        m = Te(null),
        b = (g) => {
          var v;
          m.value = o.custom
            ? (v = g == null ? void 0 : g.$el) == null
              ? void 0
              : v.nextElementSibling
            : g == null
              ? void 0
              : g.$el;
        };
      function y(g) {
        var v, x;
        return (
          !p.value &&
          (typeof o.prefetchOn == 'string'
            ? o.prefetchOn === g
            : (((v = o.prefetchOn) == null ? void 0 : v[g]) ??
              ((x = e.prefetchOn) == null ? void 0 : x[g]))) &&
          (o.prefetch ?? e.prefetch) !== !1 &&
          o.noPrefetch !== !0 &&
          o.target !== '_blank' &&
          !D_()
        );
      }
      async function _(g = Pe()) {
        if (p.value) return;
        p.value = !0;
        const v =
            typeof l.value == 'string'
              ? l.value
              : d.value
                ? ka(l.value)
                : a.resolve(l.value).fullPath,
          x = d.value ? new URL(v, window.location.href).href : v;
        await Promise.all([
          g.hooks.callHook('link:prefetch', x).catch(() => {}),
          !d.value && !h.value && ep(l.value, a).catch(() => {}),
        ]);
      }
      if (y('visibility')) {
        const g = Pe();
        let v,
          x = null;
        jr(() => {
          const $ = j_();
          pi(() => {
            v = Da(() => {
              var k;
              (k = m == null ? void 0 : m.value) != null &&
                k.tagName &&
                (x = $.observe(m.value, async () => {
                  x == null || x(), (x = null), await _(g);
                }));
            });
          });
        }),
          Os(() => {
            v && Sb(v), x == null || x(), (x = null);
          });
      }
      return () => {
        var x;
        if (!d.value && !h.value && !n(l.value)) {
          const $ = {
            ref: b,
            to: l.value,
            activeClass: o.activeClass || e.activeClass,
            exactActiveClass: o.exactActiveClass || e.exactActiveClass,
            replace: o.replace,
            ariaCurrentValue: o.ariaCurrentValue,
            custom: o.custom,
          };
          return (
            o.custom ||
              (y('interaction') &&
                (($.onPointerenter = _.bind(null, void 0)), ($.onFocus = _.bind(null, void 0))),
              p.value && ($.class = o.prefetchedClass || e.prefetchedClass),
              ($.rel = o.rel || void 0)),
            mt(tr('RouterLink'), $, i.default)
          );
        }
        const g = o.target || null,
          v =
            L_(
              o.noRel ? '' : o.rel,
              e.externalRelAttribute,
              f.value || h.value ? 'noopener noreferrer' : '',
            ) || null;
        return o.custom
          ? i.default
            ? i.default({
                href: c.value,
                navigate: u,
                prefetch: _,
                get route() {
                  if (!c.value) return;
                  const $ = new URL(c.value, window.location.href);
                  return {
                    path: $.pathname,
                    fullPath: $.pathname,
                    get query() {
                      return jd($.search);
                    },
                    hash: $.hash,
                    params: {},
                    name: void 0,
                    matched: [],
                    redirectedFrom: void 0,
                    meta: {},
                    href: c.value,
                  };
                },
                rel: v,
                target: g,
                isExternal: d.value || h.value,
                isActive: !1,
                isExactActive: !1,
              })
            : null
          : mt(
              'a',
              { ref: m, href: c.value || null, rel: v, target: g },
              (x = i.default) == null ? void 0 : x.call(i),
            );
      };
    },
  });
}
const H_ = I_(kv);
function Ru(e, t) {
  const n = t === 'append' ? Ro : ai;
  return un(e) && !e.startsWith('http') ? e : n(e, !0);
}
function j_() {
  const e = Pe();
  if (e._observer) return e._observer;
  let t = null;
  const n = new Map(),
    r = (o, i) => (
      t ||
        (t = new IntersectionObserver((a) => {
          for (const l of a) {
            const c = n.get(l.target);
            (l.isIntersecting || l.intersectionRatio > 0) && c && c();
          }
        })),
      n.set(o, i),
      t.observe(o),
      () => {
        n.delete(o),
          t == null || t.unobserve(o),
          n.size === 0 && (t == null || t.disconnect(), (t = null));
      }
    );
  return (e._observer = { observe: r });
}
const F_ = /2g/;
function D_() {
  const e = navigator.connection;
  return !!(e && (e.saveData || F_.test(e.effectiveType)));
}
function Ss(e) {
  return nl() ? (og(e), !0) : !1;
}
const qi = new WeakMap(),
  B_ = (...e) => {
    var t;
    const n = e[0],
      r = (t = Nn()) == null ? void 0 : t.proxy;
    if (r == null && !ni()) throw new Error('injectLocal must be called in setup');
    return r && qi.has(r) && n in qi.get(r) ? qi.get(r)[n] : lt(...e);
  },
  Es = typeof window < 'u' && typeof document < 'u';
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope;
const U_ = Object.prototype.toString,
  W_ = (e) => U_.call(e) === '[object Object]',
  qa = () => {};
function z_(e, t) {
  function n(...r) {
    return new Promise((s, o) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r }))
        .then(s)
        .catch(o);
    });
  }
  return n;
}
const tp = (e) => e();
function V_(e, t = {}) {
  let n,
    r,
    s = qa;
  const o = (l) => {
    clearTimeout(l), s(), (s = qa);
  };
  let i;
  return (l) => {
    const c = Ve(e),
      u = Ve(t.maxWait);
    return (
      n && o(n),
      c <= 0 || (u !== void 0 && u <= 0)
        ? (r && (o(r), (r = null)), Promise.resolve(l()))
        : new Promise((d, h) => {
            (s = t.rejectOnCancel ? h : d),
              (i = l),
              u &&
                !r &&
                (r = setTimeout(() => {
                  n && o(n), (r = null), d(i());
                }, u)),
              (n = setTimeout(() => {
                r && o(r), (r = null), d(l());
              }, c));
          })
    );
  };
}
function q_(e = tp, t = {}) {
  const { initialState: n = 'active' } = t,
    r = np(n === 'active');
  function s() {
    r.value = !1;
  }
  function o() {
    r.value = !0;
  }
  const i = (...a) => {
    r.value && e(...a);
  };
  return { isActive: Ir(r), pause: s, resume: o, eventFilter: i };
}
function K_(e) {
  let t;
  function n() {
    return t || (t = e()), t;
  }
  return (
    (n.reset = async () => {
      const r = t;
      (t = void 0), r && (await r);
    }),
    n
  );
}
function G_(e, t) {
  var n;
  if (typeof e == 'number') return e + t;
  const r = ((n = e.match(/^-?\d+\.?\d*/)) == null ? void 0 : n[0]) || '',
    s = e.slice(r.length),
    o = Number.parseFloat(r) + t;
  return Number.isNaN(o) ? e : o + s;
}
function ls(e) {
  return e.endsWith('rem') ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function J_(e) {
  return Nn();
}
function Ki(e) {
  return Array.isArray(e) ? e : [e];
}
function np(...e) {
  if (e.length !== 1) return jf(...e);
  const t = e[0];
  return typeof t == 'function' ? Ir(Hf(() => ({ get: t, set: qa }))) : Te(t);
}
function rp(e, t, n = {}) {
  const { eventFilter: r = tp, ...s } = n;
  return xt(e, z_(r, t), s);
}
function Y_(e, t, n = {}) {
  const { eventFilter: r, initialState: s = 'active', ...o } = n,
    { eventFilter: i, pause: a, resume: l, isActive: c } = q_(r, { initialState: s });
  return { stop: rp(e, t, { ...o, eventFilter: i }), pause: a, resume: l, isActive: c };
}
function $l(e, t = !0, n) {
  J_() ? jr(e, n) : t ? e() : Mn(e);
}
function X_(e, t = 1e3, n = {}) {
  const { immediate: r = !0, immediateCallback: s = !1 } = n;
  let o = null;
  const i = Ke(!1);
  function a() {
    o && (clearInterval(o), (o = null));
  }
  function l() {
    (i.value = !1), a();
  }
  function c() {
    const u = Ve(t);
    u <= 0 || ((i.value = !0), s && e(), a(), i.value && (o = setInterval(e, u)));
  }
  if ((r && Es && c(), De(t) || typeof t == 'function')) {
    const u = xt(t, () => {
      i.value && Es && c();
    });
    Ss(u);
  }
  return Ss(l), { isActive: i, pause: l, resume: c };
}
function Z_(e, t, n = {}) {
  const { immediate: r = !0, immediateCallback: s = !1 } = n,
    o = Ke(!1);
  let i = null;
  function a() {
    i && (clearTimeout(i), (i = null));
  }
  function l() {
    (o.value = !1), a();
  }
  function c(...u) {
    s && e(),
      a(),
      (o.value = !0),
      (i = setTimeout(() => {
        (o.value = !1), (i = null), e(...u);
      }, Ve(t)));
  }
  return r && ((o.value = !0), Es && c()), Ss(l), { isPending: Ir(o), start: c, stop: l };
}
function tx(e, t, n = {}) {
  const { debounce: r = 0, maxWait: s = void 0, ...o } = n;
  return rp(e, t, { ...o, eventFilter: V_(r, { maxWait: s }) });
}
function Q_(e, t, n) {
  return xt(e, t, { ...n, immediate: !0 });
}
const Pn = Es ? window : void 0,
  sp = Es ? window.navigator : void 0;
function op(e) {
  var t;
  const n = Ve(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function xs(...e) {
  const t = [],
    n = () => {
      t.forEach((a) => a()), (t.length = 0);
    },
    r = (a, l, c, u) => (a.addEventListener(l, c, u), () => a.removeEventListener(l, c, u)),
    s = ae(() => {
      const a = Ki(Ve(e[0])).filter((l) => l != null);
      return a.every((l) => typeof l != 'string') ? a : void 0;
    }),
    o = Q_(
      () => {
        var a, l;
        return [
          (l = (a = s.value) == null ? void 0 : a.map((c) => op(c))) != null
            ? l
            : [Pn].filter((c) => c != null),
          Ki(Ve(s.value ? e[1] : e[0])),
          Ki(oe(s.value ? e[2] : e[1])),
          Ve(s.value ? e[3] : e[2]),
        ];
      },
      ([a, l, c, u]) => {
        if ((n(), !(a != null && a.length) || !(l != null && l.length) || !(c != null && c.length)))
          return;
        const d = W_(u) ? { ...u } : u;
        t.push(...a.flatMap((h) => l.flatMap((f) => c.map((p) => r(h, f, p, d)))));
      },
      { flush: 'post' },
    ),
    i = () => {
      o(), n();
    };
  return Ss(n), i;
}
function eC() {
  const e = Ke(!1),
    t = Nn();
  return (
    t &&
      jr(() => {
        e.value = !0;
      }, t),
    e
  );
}
function Rl(e) {
  const t = eC();
  return ae(() => (t.value, !!e()));
}
function tC(e, t = {}) {
  const { immediate: n = !0, fpsLimit: r = void 0, window: s = Pn, once: o = !1 } = t,
    i = Ke(!1),
    a = ae(() => (r ? 1e3 / Ve(r) : null));
  let l = 0,
    c = null;
  function u(f) {
    if (!i.value || !s) return;
    l || (l = f);
    const p = f - l;
    if (a.value && p < a.value) {
      c = s.requestAnimationFrame(u);
      return;
    }
    if (((l = f), e({ delta: p, timestamp: f }), o)) {
      (i.value = !1), (c = null);
      return;
    }
    c = s.requestAnimationFrame(u);
  }
  function d() {
    !i.value && s && ((i.value = !0), (l = 0), (c = s.requestAnimationFrame(u)));
  }
  function h() {
    (i.value = !1), c != null && s && (s.cancelAnimationFrame(c), (c = null));
  }
  return n && d(), Ss(h), { isActive: Ir(i), pause: h, resume: d };
}
const nC = Symbol('vueuse-ssr-width');
function ip() {
  const e = ni() ? B_(nC, null) : null;
  return typeof e == 'number' ? e : void 0;
}
function hr(e, t = {}) {
  const { window: n = Pn, ssrWidth: r = ip() } = t,
    s = Rl(() => n && 'matchMedia' in n && typeof n.matchMedia == 'function'),
    o = Te(typeof r == 'number'),
    i = Ke(),
    a = Ke(!1),
    l = (c) => {
      a.value = c.matches;
    };
  return (
    vd(() => {
      if (o.value) {
        o.value = !s.value;
        const c = Ve(e).split(',');
        a.value = c.some((u) => {
          const d = u.includes('not all'),
            h = u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),
            f = u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
          let p = !!(h || f);
          return h && p && (p = r >= ls(h[1])), f && p && (p = r <= ls(f[1])), d ? !p : p;
        });
        return;
      }
      s.value && ((i.value = n.matchMedia(Ve(e))), (a.value = i.value.matches));
    }),
    xs(i, 'change', l, { passive: !0 }),
    ae(() => a.value)
  );
}
const rC = { sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536 };
function sC(e, t = {}) {
  function n(f, p) {
    let m = Ve(e[Ve(f)]);
    return p != null && (m = G_(m, p)), typeof m == 'number' && (m = `${m}px`), m;
  }
  const { window: r = Pn, strategy: s = 'min-width', ssrWidth: o = ip() } = t,
    i = typeof o == 'number',
    a = i ? Ke(!1) : { value: !0 };
  i && $l(() => (a.value = !!r));
  function l(f, p) {
    return !a.value && i
      ? f === 'min'
        ? o >= ls(p)
        : o <= ls(p)
      : r
        ? r.matchMedia(`(${f}-width: ${p})`).matches
        : !1;
  }
  const c = (f) => hr(() => `(min-width: ${n(f)})`, t),
    u = (f) => hr(() => `(max-width: ${n(f)})`, t),
    d = Object.keys(e).reduce(
      (f, p) => (
        Object.defineProperty(f, p, {
          get: () => (s === 'min-width' ? c(p) : u(p)),
          enumerable: !0,
          configurable: !0,
        }),
        f
      ),
      {},
    );
  function h() {
    const f = Object.keys(e)
      .map((p) => [p, d[p], ls(n(p))])
      .sort((p, m) => p[2] - m[2]);
    return ae(() => f.filter(([, p]) => p.value).map(([p]) => p));
  }
  return Object.assign(d, {
    greaterOrEqual: c,
    smallerOrEqual: u,
    greater(f) {
      return hr(() => `(min-width: ${n(f, 0.1)})`, t);
    },
    smaller(f) {
      return hr(() => `(max-width: ${n(f, -0.1)})`, t);
    },
    between(f, p) {
      return hr(() => `(min-width: ${n(f)}) and (max-width: ${n(p, -0.1)})`, t);
    },
    isGreater(f) {
      return l('min', n(f, 0.1));
    },
    isGreaterOrEqual(f) {
      return l('min', n(f));
    },
    isSmaller(f) {
      return l('max', n(f, -0.1));
    },
    isSmallerOrEqual(f) {
      return l('max', n(f));
    },
    isInBetween(f, p) {
      return l('min', n(f)) && l('max', n(p, -0.1));
    },
    current: h,
    active() {
      const f = h();
      return ae(() => (f.value.length === 0 ? '' : f.value.at(s === 'min-width' ? -1 : 0)));
    },
  });
}
function Pu(e, t = {}) {
  const { controls: n = !1, navigator: r = sp } = t,
    s = Rl(() => r && 'permissions' in r),
    o = Ke(),
    i = typeof e == 'string' ? { name: e } : e,
    a = Ke(),
    l = () => {
      var u, d;
      a.value = (d = (u = o.value) == null ? void 0 : u.state) != null ? d : 'prompt';
    };
  xs(o, 'change', l, { passive: !0 });
  const c = K_(async () => {
    if (s.value) {
      if (!o.value)
        try {
          o.value = await r.permissions.query(i);
        } catch {
          o.value = void 0;
        } finally {
          l();
        }
      if (n) return de(o.value);
    }
  });
  return c(), n ? { state: a, isSupported: s, query: c } : a;
}
function nx(e = {}) {
  const { navigator: t = sp, read: n = !1, source: r, copiedDuring: s = 1500, legacy: o = !1 } = e,
    i = Rl(() => t && 'clipboard' in t),
    a = Pu('clipboard-read'),
    l = Pu('clipboard-write'),
    c = ae(() => i.value || o),
    u = Ke(''),
    d = Ke(!1),
    h = Z_(() => (d.value = !1), s, { immediate: !1 });
  function f() {
    let _ = !(i.value && y(a.value));
    if (!_)
      try {
        t.clipboard.readText().then((g) => {
          u.value = g;
        });
      } catch {
        _ = !0;
      }
    _ && (u.value = b());
  }
  c.value && n && xs(['copy', 'cut'], f, { passive: !0 });
  async function p(_ = Ve(r)) {
    if (c.value && _ != null) {
      let g = !(i.value && y(l.value));
      if (!g)
        try {
          await t.clipboard.writeText(_);
        } catch {
          g = !0;
        }
      g && m(_), (u.value = _), (d.value = !0), h.start();
    }
  }
  function m(_) {
    const g = document.createElement('textarea');
    (g.value = _ ?? ''),
      (g.style.position = 'absolute'),
      (g.style.opacity = '0'),
      document.body.appendChild(g),
      g.select(),
      document.execCommand('copy'),
      g.remove();
  }
  function b() {
    var _, g, v;
    return (v =
      (g =
        (_ = document == null ? void 0 : document.getSelection) == null
          ? void 0
          : _.call(document)) == null
        ? void 0
        : g.toString()) != null
      ? v
      : '';
  }
  function y(_) {
    return _ === 'granted' || _ === 'prompt';
  }
  return { isSupported: c, text: u, copied: d, copy: p };
}
const Gs =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof globalThis < 'u'
          ? globalThis
          : typeof self < 'u'
            ? self
            : {},
  Js = '__vueuse_ssr_handlers__',
  oC = iC();
function iC() {
  return Js in Gs || (Gs[Js] = Gs[Js] || {}), Gs[Js];
}
function ap(e, t) {
  return oC[e] || t;
}
function aC(e) {
  return hr('(prefers-color-scheme: dark)', e);
}
function lC(e) {
  return e == null
    ? 'any'
    : e instanceof Set
      ? 'set'
      : e instanceof Map
        ? 'map'
        : e instanceof Date
          ? 'date'
          : typeof e == 'boolean'
            ? 'boolean'
            : typeof e == 'string'
              ? 'string'
              : typeof e == 'object'
                ? 'object'
                : Number.isNaN(e)
                  ? 'any'
                  : 'number';
}
const cC = {
    boolean: { read: (e) => e === 'true', write: (e) => String(e) },
    object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
    number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
    any: { read: (e) => e, write: (e) => String(e) },
    string: { read: (e) => e, write: (e) => String(e) },
    map: {
      read: (e) => new Map(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e.entries())),
    },
    set: { read: (e) => new Set(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e)) },
    date: { read: (e) => new Date(e), write: (e) => e.toISOString() },
  },
  ku = 'vueuse-storage';
function lp(e, t, n, r = {}) {
  var s;
  const {
      flush: o = 'pre',
      deep: i = !0,
      listenToStorageChanges: a = !0,
      writeDefaults: l = !0,
      mergeDefaults: c = !1,
      shallow: u,
      window: d = Pn,
      eventFilter: h,
      onError: f = (T) => {
        console.error(T);
      },
      initOnMounted: p,
    } = r,
    m = (u ? Ke : Te)(typeof t == 'function' ? t() : t),
    b = ae(() => Ve(e));
  if (!n)
    try {
      n = ap('getDefaultStorage', () => {
        var T;
        return (T = Pn) == null ? void 0 : T.localStorage;
      })();
    } catch (T) {
      f(T);
    }
  if (!n) return m;
  const y = Ve(t),
    _ = lC(y),
    g = (s = r.serializer) != null ? s : cC[_],
    { pause: v, resume: x } = Y_(m, () => k(m.value), { flush: o, deep: i, eventFilter: h });
  xt(b, () => E(), { flush: o }),
    d &&
      a &&
      $l(() => {
        n instanceof Storage ? xs(d, 'storage', E, { passive: !0 }) : xs(d, ku, A), p && E();
      }),
    p || E();
  function $(T, C) {
    if (d) {
      const R = { key: b.value, oldValue: T, newValue: C, storageArea: n };
      d.dispatchEvent(
        n instanceof Storage ? new StorageEvent('storage', R) : new CustomEvent(ku, { detail: R }),
      );
    }
  }
  function k(T) {
    try {
      const C = n.getItem(b.value);
      if (T == null) $(C, null), n.removeItem(b.value);
      else {
        const R = g.write(T);
        C !== R && (n.setItem(b.value, R), $(C, R));
      }
    } catch (C) {
      f(C);
    }
  }
  function U(T) {
    const C = T ? T.newValue : n.getItem(b.value);
    if (C == null) return l && y != null && n.setItem(b.value, g.write(y)), y;
    if (!T && c) {
      const R = g.read(C);
      return typeof c == 'function'
        ? c(R, y)
        : _ === 'object' && !Array.isArray(R)
          ? { ...y, ...R }
          : R;
    } else return typeof C != 'string' ? C : g.read(C);
  }
  function E(T) {
    if (!(T && T.storageArea !== n)) {
      if (T && T.key == null) {
        m.value = y;
        return;
      }
      if (!(T && T.key !== b.value)) {
        v();
        try {
          (T == null ? void 0 : T.newValue) !== g.write(m.value) && (m.value = U(T));
        } catch (C) {
          f(C);
        } finally {
          T ? Mn(x) : x();
        }
      }
    }
  }
  function A(T) {
    E(T.detail);
  }
  return m;
}
const uC =
  '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';
function fC(e = {}) {
  const {
      selector: t = 'html',
      attribute: n = 'class',
      initialValue: r = 'auto',
      window: s = Pn,
      storage: o,
      storageKey: i = 'vueuse-color-scheme',
      listenToStorageChanges: a = !0,
      storageRef: l,
      emitAuto: c,
      disableTransition: u = !0,
    } = e,
    d = { auto: '', light: 'light', dark: 'dark', ...(e.modes || {}) },
    h = aC({ window: s }),
    f = ae(() => (h.value ? 'dark' : 'light')),
    p = l || (i == null ? np(r) : lp(i, r, o, { window: s, listenToStorageChanges: a })),
    m = ae(() => (p.value === 'auto' ? f.value : p.value)),
    b = ap('updateHTMLAttrs', (v, x, $) => {
      const k = typeof v == 'string' ? (s == null ? void 0 : s.document.querySelector(v)) : op(v);
      if (!k) return;
      const U = new Set(),
        E = new Set();
      let A = null;
      if (x === 'class') {
        const C = $.split(/\s/g);
        Object.values(d)
          .flatMap((R) => (R || '').split(/\s/g))
          .filter(Boolean)
          .forEach((R) => {
            C.includes(R) ? U.add(R) : E.add(R);
          });
      } else A = { key: x, value: $ };
      if (U.size === 0 && E.size === 0 && A === null) return;
      let T;
      u &&
        ((T = s.document.createElement('style')),
        T.appendChild(document.createTextNode(uC)),
        s.document.head.appendChild(T));
      for (const C of U) k.classList.add(C);
      for (const C of E) k.classList.remove(C);
      A && k.setAttribute(A.key, A.value),
        u && (s.getComputedStyle(T).opacity, document.head.removeChild(T));
    });
  function y(v) {
    var x;
    b(t, n, (x = d[v]) != null ? x : v);
  }
  function _(v) {
    e.onChanged ? e.onChanged(v, y) : y(v);
  }
  xt(m, _, { flush: 'post', immediate: !0 }), $l(() => _(m.value));
  const g = ae({
    get() {
      return c ? p.value : m.value;
    },
    set(v) {
      p.value = v;
    },
  });
  return Object.assign(g, { store: p, system: f, state: m });
}
function dC(e = {}) {
  const { valueDark: t = 'dark', valueLight: n = '' } = e,
    r = fC({
      ...e,
      onChanged: (i, a) => {
        var l;
        e.onChanged ? (l = e.onChanged) == null || l.call(e, i === 'dark', a, i) : a(i);
      },
      modes: { dark: t, light: n },
    }),
    s = ae(() => r.system.value);
  return ae({
    get() {
      return r.value === 'dark';
    },
    set(i) {
      const a = i ? 'dark' : 'light';
      s.value === a ? (r.value = 'auto') : (r.value = a);
    },
  });
}
function hC(e, t, n = {}) {
  const { window: r = Pn } = n;
  return lp(e, t, r == null ? void 0 : r.localStorage, n);
}
function pC(e = {}) {
  const { controls: t = !1, interval: n = 'requestAnimationFrame' } = e,
    r = Te(new Date()),
    s = () => (r.value = new Date()),
    o = n === 'requestAnimationFrame' ? tC(s, { immediate: !0 }) : X_(s, n, { immediate: !0 });
  return t ? { now: r, ...o } : r;
}
const gC = [
    { max: 6e4, value: 1e3, name: 'second' },
    { max: 276e4, value: 6e4, name: 'minute' },
    { max: 72e6, value: 36e5, name: 'hour' },
    { max: 5184e5, value: 864e5, name: 'day' },
    { max: 24192e5, value: 6048e5, name: 'week' },
    { max: 28512e6, value: 2592e6, name: 'month' },
    { max: Number.POSITIVE_INFINITY, value: 31536e6, name: 'year' },
  ],
  mC = {
    justNow: 'just now',
    past: (e) => (e.match(/\d/) ? `${e} ago` : e),
    future: (e) => (e.match(/\d/) ? `in ${e}` : e),
    month: (e, t) =>
      e === 1 ? (t ? 'last month' : 'next month') : `${e} month${e > 1 ? 's' : ''}`,
    year: (e, t) => (e === 1 ? (t ? 'last year' : 'next year') : `${e} year${e > 1 ? 's' : ''}`),
    day: (e, t) => (e === 1 ? (t ? 'yesterday' : 'tomorrow') : `${e} day${e > 1 ? 's' : ''}`),
    week: (e, t) => (e === 1 ? (t ? 'last week' : 'next week') : `${e} week${e > 1 ? 's' : ''}`),
    hour: (e) => `${e} hour${e > 1 ? 's' : ''}`,
    minute: (e) => `${e} minute${e > 1 ? 's' : ''}`,
    second: (e) => `${e} second${e > 1 ? 's' : ''}`,
    invalid: '',
  };
function yC(e) {
  return e.toISOString().slice(0, 10);
}
function vC(e, t = {}) {
  const { controls: n = !1, updateInterval: r = 3e4 } = t,
    { now: s, ...o } = pC({ interval: r, controls: !0 }),
    i = ae(() => wC(new Date(Ve(e)), t, Ve(s)));
  return n ? { timeAgo: i, ...o } : i;
}
function wC(e, t = {}, n = Date.now()) {
  var r;
  const {
      max: s,
      messages: o = mC,
      fullDateFormatter: i = yC,
      units: a = gC,
      showSecond: l = !1,
      rounding: c = 'round',
    } = t,
    u = typeof c == 'number' ? (b) => +b.toFixed(c) : Math[c],
    d = +n - +e,
    h = Math.abs(d);
  function f(b, y) {
    return u(Math.abs(b) / y.value);
  }
  function p(b, y) {
    const _ = f(b, y),
      g = b > 0,
      v = m(y.name, _, g);
    return m(g ? 'past' : 'future', v, g);
  }
  function m(b, y, _) {
    const g = o[b];
    return typeof g == 'function' ? g(y, _) : g.replace('{0}', y.toString());
  }
  if (h < 6e4 && !l) return o.justNow;
  if (typeof s == 'number' && h > s) return i(new Date(e));
  if (typeof s == 'string') {
    const b = (r = a.find((y) => y.name === s)) == null ? void 0 : r.max;
    if (b && h > b) return i(new Date(e));
  }
  for (const [b, y] of a.entries()) {
    if (f(d, y) <= 0 && a[b - 1]) return p(d, a[b - 1]);
    if (h < y.max) return p(d, y);
  }
  return o.invalid;
}
const Ou = dC();
function bC() {
  Ou.value = !Ou.value;
}
function Kt(e) {
  if (typeof e != 'string')
    throw new TypeError(`Path must be a string, received "${JSON.stringify(e)}"`);
}
function _C(e, t) {
  if (t.length >= e.length) return e;
  const n = e.length - t.length;
  for (let r = t.length - 1; r >= 0; --r) if (e.charCodeAt(n + r) !== t.charCodeAt(r)) return e;
  return e.slice(0, -t.length);
}
function CC(e, t, n = 0) {
  let r = !1,
    s = e.length;
  for (let o = e.length - 1; o >= n; --o)
    if (t(e.charCodeAt(o))) {
      if (r) {
        n = o + 1;
        break;
      }
    } else r || ((r = !0), (s = o + 1));
  return e.slice(n, s);
}
function SC(e, t) {
  if ((Kt(e), e.length === 0)) return e;
  if (typeof t != 'string')
    throw new TypeError(`Suffix must be a string, received "${JSON.stringify(t)}"`);
}
function Pl(e, t) {
  if (e.length <= 1) return e;
  let n = e.length;
  for (let r = e.length - 1; r > 0 && t(e.charCodeAt(r)); r--) n = r;
  return e.slice(0, n);
}
const cs = 46,
  cp = 47;
function Oe(e) {
  return e === cp;
}
function EC(e, t = '') {
  SC(e, t);
  const n = CC(e, Oe),
    r = Pl(n, Oe);
  return t ? _C(r, t) : r;
}
const xC = ':',
  kl = '/',
  up = /\/+/;
function AC(e) {
  if ((Kt(e), e.length === 0)) return '.';
}
function TC(e) {
  AC(e);
  let t = -1,
    n = !1;
  for (let r = e.length - 1; r >= 1; --r)
    if (Oe(e.charCodeAt(r))) {
      if (n) {
        t = r;
        break;
      }
    } else n = !0;
  return t === -1 ? (Oe(e.charCodeAt(0)) ? '/' : '.') : Pl(e.slice(0, t), Oe);
}
function $C(e) {
  Kt(e);
  let t = -1,
    n = 0,
    r = -1,
    s = !0,
    o = 0;
  for (let i = e.length - 1; i >= 0; --i) {
    const a = e.charCodeAt(i);
    if (Oe(a)) {
      if (!s) {
        n = i + 1;
        break;
      }
      continue;
    }
    r === -1 && ((s = !1), (r = i + 1)),
      a === cs ? (t === -1 ? (t = i) : o !== 1 && (o = 1)) : t !== -1 && (o = -1);
  }
  return t === -1 || r === -1 || o === 0 || (o === 1 && t === r - 1 && t === n + 1)
    ? ''
    : e.slice(t, r);
}
function RC(e, t) {
  const n = t.dir || t.root,
    r = t.base || (t.name ?? '') + (t.ext ?? '');
  return n ? (r === e ? n : n === t.root ? n + r : n + e + r) : r;
}
function PC(e) {
  if (e === null || typeof e != 'object')
    throw new TypeError(
      `The "pathObject" argument must be of type Object, received type "${typeof e}"`,
    );
}
function kC(e) {
  return PC(e), RC('/', e);
}
function OC(e) {
  if (((e = e instanceof URL ? e : new URL(e)), e.protocol !== 'file:'))
    throw new TypeError(`URL must be a file URL: received "${e.protocol}"`);
  return e;
}
function MC(e) {
  return (e = OC(e)), decodeURIComponent(e.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, '%25'));
}
function fp(e) {
  return Kt(e), e.length > 0 && Oe(e.charCodeAt(0));
}
function NC(e) {
  if ((Kt(e), e.length === 0)) return '.';
}
function dp(e, t, n, r) {
  let s = '',
    o = 0,
    i = -1,
    a = 0,
    l;
  for (let c = 0; c <= e.length; ++c) {
    if (c < e.length) l = e.charCodeAt(c);
    else {
      if (r(l)) break;
      l = cp;
    }
    if (r(l)) {
      if (!(i === c - 1 || a === 1))
        if (i !== c - 1 && a === 2) {
          if (
            s.length < 2 ||
            o !== 2 ||
            s.charCodeAt(s.length - 1) !== cs ||
            s.charCodeAt(s.length - 2) !== cs
          ) {
            if (s.length > 2) {
              const u = s.lastIndexOf(n);
              u === -1
                ? ((s = ''), (o = 0))
                : ((s = s.slice(0, u)), (o = s.length - 1 - s.lastIndexOf(n))),
                (i = c),
                (a = 0);
              continue;
            } else if (s.length === 2 || s.length === 1) {
              (s = ''), (o = 0), (i = c), (a = 0);
              continue;
            }
          }
          t && (s.length > 0 ? (s += `${n}..`) : (s = '..'), (o = 2));
        } else
          s.length > 0 ? (s += n + e.slice(i + 1, c)) : (s = e.slice(i + 1, c)), (o = c - i - 1);
      (i = c), (a = 0);
    } else l === cs && a !== -1 ? ++a : (a = -1);
  }
  return s;
}
function Bo(e) {
  NC(e);
  const t = Oe(e.charCodeAt(0)),
    n = Oe(e.charCodeAt(e.length - 1));
  return (
    (e = dp(e, !t, '/', Oe)),
    e.length === 0 && !t && (e = '.'),
    e.length > 0 && n && (e += '/'),
    t ? `/${e}` : e
  );
}
function hp(...e) {
  if (e.length === 0) return '.';
  e.forEach((n) => Kt(n));
  const t = e.filter((n) => n.length > 0).join('/');
  return t === '' ? '.' : Bo(t);
}
function LC(e) {
  Kt(e);
  const t = { root: '', dir: '', base: '', ext: '', name: '' };
  if (e.length === 0) return t;
  const n = Oe(e.charCodeAt(0));
  let r;
  n ? ((t.root = '/'), (r = 1)) : (r = 0);
  let s = -1,
    o = 0,
    i = -1,
    a = !0,
    l = e.length - 1,
    c = 0;
  for (; l >= r; --l) {
    const u = e.charCodeAt(l);
    if (Oe(u)) {
      if (!a) {
        o = l + 1;
        break;
      }
      continue;
    }
    i === -1 && ((a = !1), (i = l + 1)),
      u === cs ? (s === -1 ? (s = l) : c !== 1 && (c = 1)) : s !== -1 && (c = -1);
  }
  return (
    s === -1 || i === -1 || c === 0 || (c === 1 && s === i - 1 && s === o + 1)
      ? (i !== -1 &&
          (o === 0 && n ? (t.base = t.name = e.slice(1, i)) : (t.base = t.name = e.slice(o, i))),
        (t.base = t.base || '/'))
      : (o === 0 && n
          ? ((t.name = e.slice(1, s)), (t.base = e.slice(1, i)))
          : ((t.name = e.slice(o, s)), (t.base = e.slice(o, i))),
        (t.ext = e.slice(s, i))),
    o > 0 ? (t.dir = Pl(e.slice(0, o - 1), Oe)) : n && (t.dir = '/'),
    t
  );
}
function Ka(...e) {
  let t = '',
    n = !1;
  for (let r = e.length - 1; r >= -1 && !n; r--) {
    let s;
    if (r >= 0) s = e[r];
    else {
      const { Deno: o } = globalThis;
      if (typeof (o == null ? void 0 : o.cwd) != 'function')
        throw new TypeError('Resolved a relative path without a current working directory (CWD)');
      s = o.cwd();
    }
    Kt(s), s.length !== 0 && ((t = `${s}/${t}`), (n = Oe(s.charCodeAt(0))));
  }
  return (t = dp(t, !n, '/', Oe)), n ? (t.length > 0 ? `/${t}` : '/') : t.length > 0 ? t : '.';
}
function IC(e, t) {
  if ((Kt(e), Kt(t), e === t)) return '';
}
function HC(e, t) {
  if ((IC(e, t), (e = Ka(e)), (t = Ka(t)), e === t)) return '';
  let n = 1;
  const r = e.length;
  for (; n < r && Oe(e.charCodeAt(n)); ++n);
  const s = r - n;
  let o = 1;
  const i = t.length;
  for (; o < i && Oe(t.charCodeAt(o)); ++o);
  const a = i - o,
    l = s < a ? s : a;
  let c = -1,
    u = 0;
  for (; u <= l; ++u) {
    if (u === l) {
      if (a > l) {
        if (Oe(t.charCodeAt(o + u))) return t.slice(o + u + 1);
        if (u === 0) return t.slice(o + u);
      } else s > l && (Oe(e.charCodeAt(n + u)) ? (c = u) : u === 0 && (c = 0));
      break;
    }
    const h = e.charCodeAt(n + u),
      f = t.charCodeAt(o + u);
    if (h !== f) break;
    Oe(h) && (c = u);
  }
  let d = '';
  for (u = n + c + 1; u <= r; ++u)
    (u === r || Oe(e.charCodeAt(u))) && (d.length === 0 ? (d += '..') : (d += '/..'));
  return d.length > 0 ? d + t.slice(o + c) : ((o += c), Oe(t.charCodeAt(o)) && ++o, t.slice(o));
}
const jC = { '	': '%09', '\n': '%0A', '\v': '%0B', '\f': '%0C', '\r': '%0D', ' ': '%20' };
function FC(e) {
  return e.replaceAll(/[\s]/g, (t) => jC[t] ?? t);
}
function DC(e) {
  if (!fp(e)) throw new TypeError(`Path must be absolute: received "${e}"`);
  const t = new URL('file:///');
  return (t.pathname = FC(e.replace(/%/g, '%25').replace(/\\/g, '%5C'))), t;
}
function BC(e) {
  return e;
}
function UC(e, t) {
  const [n = '', ...r] = e,
    s = n.split(t);
  let o = s.length,
    i = '';
  for (const a of r) {
    const l = a.split(t);
    l.length <= o && ((o = l.length), (i = ''));
    for (let c = 0; c < o; c++)
      if (l[c] !== s[c]) {
        (o = c), (i = c === 0 ? '' : t);
        break;
      }
  }
  return s.slice(0, o).join(t) + i;
}
function WC(e) {
  return UC(e, kl);
}
const Gi = ['!', '$', '(', ')', '*', '+', '.', '=', '?', '[', '\\', '^', '{', '|'],
  zC = ['-', '\\', ']'];
function VC(e, t, { extended: n = !0, globstar: r = !0, caseInsensitive: s = !1 } = {}) {
  if (t === '') return /(?!)/;
  let o = t.length;
  for (; o > 1 && e.seps.includes(t[o - 1]); o--);
  t = t.slice(0, o);
  let i = '';
  for (let a = 0; a < t.length; ) {
    let l = '';
    const c = [];
    let u = !1,
      d = !1,
      h = !1,
      f = a;
    for (; f < t.length && !e.seps.includes(t[f]); f++) {
      if (d) {
        (d = !1), (l += (u ? zC : Gi).includes(t[f]) ? `\\${t[f]}` : t[f]);
        continue;
      }
      if (t[f] === e.escapePrefix) {
        d = !0;
        continue;
      }
      if (t[f] === '[')
        if (u) {
          if (t[f + 1] === ':') {
            let p = f + 1,
              m = '';
            for (; t[p + 1] !== void 0 && t[p + 1] !== ':'; ) (m += t[p + 1]), p++;
            if (t[p + 1] === ':' && t[p + 2] === ']') {
              (f = p + 2),
                m === 'alnum'
                  ? (l += '\\dA-Za-z')
                  : m === 'alpha'
                    ? (l += 'A-Za-z')
                    : m === 'ascii'
                      ? (l += '\0-')
                      : m === 'blank'
                        ? (l += '	 ')
                        : m === 'cntrl'
                          ? (l += '\0-')
                          : m === 'digit'
                            ? (l += '\\d')
                            : m === 'graph'
                              ? (l += '!-~')
                              : m === 'lower'
                                ? (l += 'a-z')
                                : m === 'print'
                                  ? (l += ' -~')
                                  : m === 'punct'
                                    ? (l += `!"#$%&'()*+,\\-./:;<=>?@[\\\\\\]^_‘{|}~`)
                                    : m === 'space'
                                      ? (l += '\\s\v')
                                      : m === 'upper'
                                        ? (l += 'A-Z')
                                        : m === 'word'
                                          ? (l += '\\w')
                                          : m === 'xdigit' && (l += '\\dA-Fa-f');
              continue;
            }
          }
        } else {
          (u = !0),
            (l += '['),
            t[f + 1] === '!' ? (f++, (l += '^')) : t[f + 1] === '^' && (f++, (l += '\\^'));
          continue;
        }
      if (t[f] === ']' && u) {
        (u = !1), (l += ']');
        continue;
      }
      if (u) {
        l += t[f];
        continue;
      }
      if (t[f] === ')' && c.length > 0 && c[c.length - 1] !== 'BRACE') {
        l += ')';
        const p = c.pop();
        p === '!' ? (l += e.wildcard) : p !== '@' && (l += p);
        continue;
      }
      if (t[f] === '|' && c.length > 0 && c[c.length - 1] !== 'BRACE') {
        l += '|';
        continue;
      }
      if (t[f] === '+' && n && t[f + 1] === '(') {
        f++, c.push('+'), (l += '(?:');
        continue;
      }
      if (t[f] === '@' && n && t[f + 1] === '(') {
        f++, c.push('@'), (l += '(?:');
        continue;
      }
      if (t[f] === '?') {
        n && t[f + 1] === '(' ? (f++, c.push('?'), (l += '(?:')) : (l += '.');
        continue;
      }
      if (t[f] === '!' && n && t[f + 1] === '(') {
        f++, c.push('!'), (l += '(?!');
        continue;
      }
      if (t[f] === '{') {
        c.push('BRACE'), (l += '(?:');
        continue;
      }
      if (t[f] === '}' && c[c.length - 1] === 'BRACE') {
        c.pop(), (l += ')');
        continue;
      }
      if (t[f] === ',' && c[c.length - 1] === 'BRACE') {
        l += '|';
        continue;
      }
      if (t[f] === '*') {
        if (n && t[f + 1] === '(') f++, c.push('*'), (l += '(?:');
        else {
          const p = t[f - 1];
          let m = 1;
          for (; t[f + 1] === '*'; ) f++, m++;
          const b = t[f + 1];
          r && m === 2 && [...e.seps, void 0].includes(p) && [...e.seps, void 0].includes(b)
            ? ((l += e.globstar), (h = !0))
            : (l += e.wildcard);
        }
        continue;
      }
      l += Gi.includes(t[f]) ? `\\${t[f]}` : t[f];
    }
    if (c.length > 0 || u || d) {
      l = '';
      for (const p of t.slice(a, f)) (l += Gi.includes(p) ? `\\${p}` : p), (h = !1);
    }
    for (i += l, h || ((i += f < t.length ? e.sep : e.sepMaybe), (h = !0)); e.seps.includes(t[f]); )
      f++;
    a = f;
  }
  return (i = `^${i}$`), new RegExp(i, s ? 'i' : '');
}
const qC = {
  sep: '/+',
  sepMaybe: '/*',
  seps: ['/'],
  globstar: '(?:[^/]*(?:/|$)+)*',
  wildcard: '[^/]*',
  escapePrefix: '\\',
};
function KC(e, t = {}) {
  return VC(qC, e, t);
}
function GC(e) {
  const t = { '{': '}', '(': ')', '[': ']' },
    n = /\\(.)|(^!|\*|\?|[\].+)]\?|\[[^\\\]]+\]|\{[^\\}]+\}|\(\?[:!=][^\\)]+\)|\([^|]+\|[^\\)]+\))/;
  if (e === '') return !1;
  let r;
  for (; (r = n.exec(e)); ) {
    if (r[2]) return !0;
    let s = r.index + r[0].length;
    const o = r[1],
      i = o ? t[o] : null;
    if (o && i) {
      const a = e.indexOf(i, s);
      a !== -1 && (s = a + 1);
    }
    e = e.slice(s);
  }
  return !1;
}
function pp(e, t = {}) {
  const { globstar: n = !1 } = t;
  if (e.match(/\0/g)) throw new Error(`Glob contains invalid characters: "${e}"`);
  if (!n) return Bo(e);
  const r = up.source,
    s = new RegExp(`(?<=(${r}|^)\\*\\*${r})\\.\\.(?=${r}|$)`, 'g');
  return Bo(e.replace(s, '\0')).replace(/\0/g, '..');
}
function JC(e, t = {}) {
  const { globstar: n = !1 } = t;
  if (!n || e.length === 0) return hp(...e);
  let r;
  for (const s of e) {
    const o = s;
    o.length > 0 && (r ? (r += `${kl}${o}`) : (r = o));
  }
  return r ? pp(r, { globstar: n }) : '.';
}
const YC = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      DELIMITER: xC,
      SEPARATOR: kl,
      SEPARATOR_PATTERN: up,
      basename: EC,
      common: WC,
      dirname: TC,
      extname: $C,
      format: kC,
      fromFileUrl: MC,
      globToRegExp: KC,
      isAbsolute: fp,
      isGlob: GC,
      join: hp,
      joinGlobs: JC,
      normalize: Bo,
      normalizeGlob: pp,
      parse: LC,
      relative: HC,
      resolve: Ka,
      toFileUrl: DC,
      toNamespacedPath: BC,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
function Gt(e) {
  if (typeof e != 'string')
    throw new TypeError(`Path must be a string, received "${JSON.stringify(e)}"`);
}
function XC(e, t) {
  if (t.length >= e.length) return e;
  const n = e.length - t.length;
  for (let r = t.length - 1; r >= 0; --r) if (e.charCodeAt(n + r) !== t.charCodeAt(r)) return e;
  return e.slice(0, -t.length);
}
function ZC(e, t, n = 0) {
  let r = !1,
    s = e.length;
  for (let o = e.length - 1; o >= n; --o)
    if (t(e.charCodeAt(o))) {
      if (r) {
        n = o + 1;
        break;
      }
    } else r || ((r = !0), (s = o + 1));
  return e.slice(n, s);
}
function QC(e, t) {
  if ((Gt(e), e.length === 0)) return e;
  if (typeof t != 'string')
    throw new TypeError(`Suffix must be a string, received "${JSON.stringify(t)}"`);
}
const e1 = 65,
  t1 = 97,
  n1 = 90,
  r1 = 122,
  Tr = 46,
  Ol = 47,
  ht = 92,
  Ln = 58,
  s1 = 63;
function gp(e, t) {
  if (e.length <= 1) return e;
  let n = e.length;
  for (let r = e.length - 1; r > 0 && t(e.charCodeAt(r)); r--) n = r;
  return e.slice(0, n);
}
function o1(e) {
  return e === Ol;
}
function re(e) {
  return e === Ol || e === ht;
}
function In(e) {
  return (e >= t1 && e <= r1) || (e >= e1 && e <= n1);
}
function i1(e, t = '') {
  QC(e, t);
  let n = 0;
  if (e.length >= 2) {
    const o = e.charCodeAt(0);
    In(o) && e.charCodeAt(1) === Ln && (n = 2);
  }
  const r = ZC(e, re, n),
    s = gp(r, re);
  return t ? XC(s, t) : s;
}
const a1 = ';',
  Ml = '\\',
  mp = /[\\/]+/;
function l1(e) {
  if ((Gt(e), e.length === 0)) return '.';
}
function c1(e) {
  l1(e);
  const t = e.length;
  let n = -1,
    r = -1,
    s = !0,
    o = 0;
  const i = e.charCodeAt(0);
  if (t > 1)
    if (re(i)) {
      if (((n = o = 1), re(e.charCodeAt(1)))) {
        let a = 2,
          l = a;
        for (; a < t && !re(e.charCodeAt(a)); ++a);
        if (a < t && a !== l) {
          for (l = a; a < t && re(e.charCodeAt(a)); ++a);
          if (a < t && a !== l) {
            for (l = a; a < t && !re(e.charCodeAt(a)); ++a);
            if (a === t) return e;
            a !== l && (n = o = a + 1);
          }
        }
      }
    } else
      In(i) && e.charCodeAt(1) === Ln && ((n = o = 2), t > 2 && re(e.charCodeAt(2)) && (n = o = 3));
  else if (re(i)) return e;
  for (let a = t - 1; a >= o; --a)
    if (re(e.charCodeAt(a))) {
      if (!s) {
        r = a;
        break;
      }
    } else s = !1;
  if (r === -1) {
    if (n === -1) return '.';
    r = n;
  }
  return gp(e.slice(0, r), o1);
}
function u1(e) {
  Gt(e);
  let t = 0,
    n = -1,
    r = 0,
    s = -1,
    o = !0,
    i = 0;
  e.length >= 2 && e.charCodeAt(1) === Ln && In(e.charCodeAt(0)) && (t = r = 2);
  for (let a = e.length - 1; a >= t; --a) {
    const l = e.charCodeAt(a);
    if (re(l)) {
      if (!o) {
        r = a + 1;
        break;
      }
      continue;
    }
    s === -1 && ((o = !1), (s = a + 1)),
      l === Tr ? (n === -1 ? (n = a) : i !== 1 && (i = 1)) : n !== -1 && (i = -1);
  }
  return n === -1 || s === -1 || i === 0 || (i === 1 && n === s - 1 && n === r + 1)
    ? ''
    : e.slice(n, s);
}
function f1(e, t) {
  const n = t.dir || t.root,
    r = t.base || (t.name ?? '') + (t.ext ?? '');
  return n ? (r === e ? n : n === t.root ? n + r : n + e + r) : r;
}
function d1(e) {
  if (e === null || typeof e != 'object')
    throw new TypeError(
      `The "pathObject" argument must be of type Object, received type "${typeof e}"`,
    );
}
function h1(e) {
  return d1(e), f1('\\', e);
}
function p1(e) {
  if (((e = e instanceof URL ? e : new URL(e)), e.protocol !== 'file:'))
    throw new TypeError(`URL must be a file URL: received "${e.protocol}"`);
  return e;
}
function g1(e) {
  e = p1(e);
  let t = decodeURIComponent(
    e.pathname.replace(/\//g, '\\').replace(/%(?![0-9A-Fa-f]{2})/g, '%25'),
  ).replace(/^\\*([A-Za-z]:)(\\|$)/, '$1\\');
  return e.hostname !== '' && (t = `\\\\${e.hostname}${t}`), t;
}
function yp(e) {
  Gt(e);
  const t = e.length;
  if (t === 0) return !1;
  const n = e.charCodeAt(0);
  return re(n) ? !0 : !!(In(n) && t > 2 && e.charCodeAt(1) === Ln && re(e.charCodeAt(2)));
}
function m1(e) {
  if ((Gt(e), e.length === 0)) return '.';
}
function vp(e, t, n, r) {
  let s = '',
    o = 0,
    i = -1,
    a = 0,
    l;
  for (let c = 0; c <= e.length; ++c) {
    if (c < e.length) l = e.charCodeAt(c);
    else {
      if (r(l)) break;
      l = Ol;
    }
    if (r(l)) {
      if (!(i === c - 1 || a === 1))
        if (i !== c - 1 && a === 2) {
          if (
            s.length < 2 ||
            o !== 2 ||
            s.charCodeAt(s.length - 1) !== Tr ||
            s.charCodeAt(s.length - 2) !== Tr
          ) {
            if (s.length > 2) {
              const u = s.lastIndexOf(n);
              u === -1
                ? ((s = ''), (o = 0))
                : ((s = s.slice(0, u)), (o = s.length - 1 - s.lastIndexOf(n))),
                (i = c),
                (a = 0);
              continue;
            } else if (s.length === 2 || s.length === 1) {
              (s = ''), (o = 0), (i = c), (a = 0);
              continue;
            }
          }
          t && (s.length > 0 ? (s += `${n}..`) : (s = '..'), (o = 2));
        } else
          s.length > 0 ? (s += n + e.slice(i + 1, c)) : (s = e.slice(i + 1, c)), (o = c - i - 1);
      (i = c), (a = 0);
    } else l === Tr && a !== -1 ? ++a : (a = -1);
  }
  return s;
}
function Uo(e) {
  m1(e);
  const t = e.length;
  let n = 0,
    r,
    s = !1;
  const o = e.charCodeAt(0);
  if (t > 1)
    if (re(o))
      if (((s = !0), re(e.charCodeAt(1)))) {
        let a = 2,
          l = a;
        for (; a < t && !re(e.charCodeAt(a)); ++a);
        if (a < t && a !== l) {
          const c = e.slice(l, a);
          for (l = a; a < t && re(e.charCodeAt(a)); ++a);
          if (a < t && a !== l) {
            for (l = a; a < t && !re(e.charCodeAt(a)); ++a);
            if (a === t) return `\\\\${c}\\${e.slice(l)}\\`;
            a !== l && ((r = `\\\\${c}\\${e.slice(l, a)}`), (n = a));
          }
        }
      } else n = 1;
    else
      In(o) &&
        e.charCodeAt(1) === Ln &&
        ((r = e.slice(0, 2)), (n = 2), t > 2 && re(e.charCodeAt(2)) && ((s = !0), (n = 3)));
  else if (re(o)) return '\\';
  let i;
  return (
    n < t ? (i = vp(e.slice(n), !s, '\\', re)) : (i = ''),
    i.length === 0 && !s && (i = '.'),
    i.length > 0 && re(e.charCodeAt(t - 1)) && (i += '\\'),
    r === void 0
      ? s
        ? i.length > 0
          ? `\\${i}`
          : '\\'
        : i
      : s
        ? i.length > 0
          ? `${r}\\${i}`
          : `${r}\\`
        : r + i
  );
}
function wp(...e) {
  if ((e.forEach((o) => Gt(o)), (e = e.filter((o) => o.length > 0)), e.length === 0)) return '.';
  let t = !0,
    n = 0;
  const r = e[0];
  if (re(r.charCodeAt(0))) {
    ++n;
    const o = r.length;
    o > 1 && re(r.charCodeAt(1)) && (++n, o > 2 && (re(r.charCodeAt(2)) ? ++n : (t = !1)));
  }
  let s = e.join('\\');
  if (t) {
    for (; n < s.length && re(s.charCodeAt(n)); ++n);
    n >= 2 && (s = `\\${s.slice(n)}`);
  }
  return Uo(s);
}
function y1(e) {
  Gt(e);
  const t = { root: '', dir: '', base: '', ext: '', name: '' },
    n = e.length;
  if (n === 0) return t;
  let r = 0,
    s = e.charCodeAt(0);
  if (n > 1) {
    if (re(s)) {
      if (((r = 1), re(e.charCodeAt(1)))) {
        let d = 2,
          h = d;
        for (; d < n && !re(e.charCodeAt(d)); ++d);
        if (d < n && d !== h) {
          for (h = d; d < n && re(e.charCodeAt(d)); ++d);
          if (d < n && d !== h) {
            for (h = d; d < n && !re(e.charCodeAt(d)); ++d);
            d === n ? (r = d) : d !== h && (r = d + 1);
          }
        }
      }
    } else if (In(s) && e.charCodeAt(1) === Ln)
      if (((r = 2), n > 2)) {
        if (re(e.charCodeAt(2))) {
          if (n === 3) return (t.root = t.dir = e), (t.base = '\\'), t;
          r = 3;
        }
      } else return (t.root = t.dir = e), t;
  } else if (re(s)) return (t.root = t.dir = e), (t.base = '\\'), t;
  r > 0 && (t.root = e.slice(0, r));
  let o = -1,
    i = r,
    a = -1,
    l = !0,
    c = e.length - 1,
    u = 0;
  for (; c >= r; --c) {
    if (((s = e.charCodeAt(c)), re(s))) {
      if (!l) {
        i = c + 1;
        break;
      }
      continue;
    }
    a === -1 && ((l = !1), (a = c + 1)),
      s === Tr ? (o === -1 ? (o = c) : u !== 1 && (u = 1)) : o !== -1 && (u = -1);
  }
  return (
    o === -1 || a === -1 || u === 0 || (u === 1 && o === a - 1 && o === i + 1)
      ? a !== -1 && (t.base = t.name = e.slice(i, a))
      : ((t.name = e.slice(i, o)), (t.base = e.slice(i, a)), (t.ext = e.slice(o, a))),
    (t.base = t.base || '\\'),
    i > 0 && i !== r ? (t.dir = e.slice(0, i - 1)) : (t.dir = t.root),
    t
  );
}
function Wo(...e) {
  var s;
  let t = '',
    n = '',
    r = !1;
  for (let o = e.length - 1; o >= -1; o--) {
    let i;
    const { Deno: a } = globalThis;
    if (o >= 0) i = e[o];
    else if (t) {
      if (
        typeof ((s = a == null ? void 0 : a.env) == null ? void 0 : s.get) != 'function' ||
        typeof (a == null ? void 0 : a.cwd) != 'function'
      )
        throw new TypeError('Resolved a relative path without a current working directory (CWD)');
      (i = a.cwd()),
        (i === void 0 || i.slice(0, 3).toLowerCase() !== `${t.toLowerCase()}\\`) && (i = `${t}\\`);
    } else {
      if (typeof (a == null ? void 0 : a.cwd) != 'function')
        throw new TypeError(
          'Resolved a drive-letter-less path without a current working directory (CWD)',
        );
      i = a.cwd();
    }
    Gt(i);
    const l = i.length;
    if (l === 0) continue;
    let c = 0,
      u = '',
      d = !1;
    const h = i.charCodeAt(0);
    if (l > 1)
      if (re(h))
        if (((d = !0), re(i.charCodeAt(1)))) {
          let f = 2,
            p = f;
          for (; f < l && !re(i.charCodeAt(f)); ++f);
          if (f < l && f !== p) {
            const m = i.slice(p, f);
            for (p = f; f < l && re(i.charCodeAt(f)); ++f);
            if (f < l && f !== p) {
              for (p = f; f < l && !re(i.charCodeAt(f)); ++f);
              f === l
                ? ((u = `\\\\${m}\\${i.slice(p)}`), (c = f))
                : f !== p && ((u = `\\\\${m}\\${i.slice(p, f)}`), (c = f));
            }
          }
        } else c = 1;
      else
        In(h) &&
          i.charCodeAt(1) === Ln &&
          ((u = i.slice(0, 2)), (c = 2), l > 2 && re(i.charCodeAt(2)) && ((d = !0), (c = 3)));
    else re(h) && ((c = 1), (d = !0));
    if (
      !(u.length > 0 && t.length > 0 && u.toLowerCase() !== t.toLowerCase()) &&
      (t.length === 0 && u.length > 0 && (t = u),
      r || ((n = `${i.slice(c)}\\${n}`), (r = d)),
      r && t.length > 0)
    )
      break;
  }
  return (n = vp(n, !r, '\\', re)), t + (r ? '\\' : '') + n || '.';
}
function v1(e, t) {
  if ((Gt(e), Gt(t), e === t)) return '';
}
function w1(e, t) {
  v1(e, t);
  const n = Wo(e),
    r = Wo(t);
  if (n === r || ((e = n.toLowerCase()), (t = r.toLowerCase()), e === t)) return '';
  let s = 0,
    o = e.length;
  for (; s < o && e.charCodeAt(s) === ht; ++s);
  for (; o - 1 > s && e.charCodeAt(o - 1) === ht; --o);
  const i = o - s;
  let a = 0,
    l = t.length;
  for (; a < l && t.charCodeAt(a) === ht; ++a);
  for (; l - 1 > a && t.charCodeAt(l - 1) === ht; --l);
  const c = l - a,
    u = i < c ? i : c;
  let d = -1,
    h = 0;
  for (; h <= u; ++h) {
    if (h === u) {
      if (c > u) {
        if (t.charCodeAt(a + h) === ht) return r.slice(a + h + 1);
        if (h === 2) return r.slice(a + h);
      }
      i > u && (e.charCodeAt(s + h) === ht ? (d = h) : h === 2 && (d = 3));
      break;
    }
    const p = e.charCodeAt(s + h),
      m = t.charCodeAt(a + h);
    if (p !== m) break;
    p === ht && (d = h);
  }
  if (h !== u && d === -1) return r;
  let f = '';
  for (d === -1 && (d = 0), h = s + d + 1; h <= o; ++h)
    (h === o || e.charCodeAt(h) === ht) && (f.length === 0 ? (f += '..') : (f += '\\..'));
  return f.length > 0
    ? f + r.slice(a + d, l)
    : ((a += d), r.charCodeAt(a) === ht && ++a, r.slice(a, l));
}
const b1 = { '	': '%09', '\n': '%0A', '\v': '%0B', '\f': '%0C', '\r': '%0D', ' ': '%20' };
function _1(e) {
  return e.replaceAll(/[\s]/g, (t) => b1[t] ?? t);
}
function C1(e) {
  if (!yp(e)) throw new TypeError(`Path must be absolute: received "${e}"`);
  const [, t, n] = e.match(/^(?:[/\\]{2}([^/\\]+)(?=[/\\](?:[^/\\]|$)))?(.*)/),
    r = new URL('file:///');
  if (
    ((r.pathname = _1(n.replace(/%/g, '%25'))),
    t !== void 0 && t !== 'localhost' && ((r.hostname = t), !r.hostname))
  )
    throw new TypeError(`Invalid hostname: "${r.hostname}"`);
  return r;
}
function S1(e) {
  if (typeof e != 'string') return e;
  if (e.length === 0) return '';
  const t = Wo(e);
  if (t.length >= 3) {
    if (t.charCodeAt(0) === ht) {
      if (t.charCodeAt(1) === ht) {
        const n = t.charCodeAt(2);
        if (n !== s1 && n !== Tr) return `\\\\?\\UNC\\${t.slice(2)}`;
      }
    } else if (In(t.charCodeAt(0)) && t.charCodeAt(1) === Ln && t.charCodeAt(2) === ht)
      return `\\\\?\\${t}`;
  }
  return e;
}
function E1(e, t) {
  const [n = '', ...r] = e,
    s = n.split(t);
  let o = s.length,
    i = '';
  for (const a of r) {
    const l = a.split(t);
    l.length <= o && ((o = l.length), (i = ''));
    for (let c = 0; c < o; c++)
      if (l[c] !== s[c]) {
        (o = c), (i = c === 0 ? '' : t);
        break;
      }
  }
  return s.slice(0, o).join(t) + i;
}
function x1(e) {
  return E1(e, Ml);
}
const Ji = ['!', '$', '(', ')', '*', '+', '.', '=', '?', '[', '\\', '^', '{', '|'],
  A1 = ['-', '\\', ']'];
function T1(e, t, { extended: n = !0, globstar: r = !0, caseInsensitive: s = !1 } = {}) {
  if (t === '') return /(?!)/;
  let o = t.length;
  for (; o > 1 && e.seps.includes(t[o - 1]); o--);
  t = t.slice(0, o);
  let i = '';
  for (let a = 0; a < t.length; ) {
    let l = '';
    const c = [];
    let u = !1,
      d = !1,
      h = !1,
      f = a;
    for (; f < t.length && !e.seps.includes(t[f]); f++) {
      if (d) {
        (d = !1), (l += (u ? A1 : Ji).includes(t[f]) ? `\\${t[f]}` : t[f]);
        continue;
      }
      if (t[f] === e.escapePrefix) {
        d = !0;
        continue;
      }
      if (t[f] === '[')
        if (u) {
          if (t[f + 1] === ':') {
            let p = f + 1,
              m = '';
            for (; t[p + 1] !== void 0 && t[p + 1] !== ':'; ) (m += t[p + 1]), p++;
            if (t[p + 1] === ':' && t[p + 2] === ']') {
              (f = p + 2),
                m === 'alnum'
                  ? (l += '\\dA-Za-z')
                  : m === 'alpha'
                    ? (l += 'A-Za-z')
                    : m === 'ascii'
                      ? (l += '\0-')
                      : m === 'blank'
                        ? (l += '	 ')
                        : m === 'cntrl'
                          ? (l += '\0-')
                          : m === 'digit'
                            ? (l += '\\d')
                            : m === 'graph'
                              ? (l += '!-~')
                              : m === 'lower'
                                ? (l += 'a-z')
                                : m === 'print'
                                  ? (l += ' -~')
                                  : m === 'punct'
                                    ? (l += `!"#$%&'()*+,\\-./:;<=>?@[\\\\\\]^_‘{|}~`)
                                    : m === 'space'
                                      ? (l += '\\s\v')
                                      : m === 'upper'
                                        ? (l += 'A-Z')
                                        : m === 'word'
                                          ? (l += '\\w')
                                          : m === 'xdigit' && (l += '\\dA-Fa-f');
              continue;
            }
          }
        } else {
          (u = !0),
            (l += '['),
            t[f + 1] === '!' ? (f++, (l += '^')) : t[f + 1] === '^' && (f++, (l += '\\^'));
          continue;
        }
      if (t[f] === ']' && u) {
        (u = !1), (l += ']');
        continue;
      }
      if (u) {
        l += t[f];
        continue;
      }
      if (t[f] === ')' && c.length > 0 && c[c.length - 1] !== 'BRACE') {
        l += ')';
        const p = c.pop();
        p === '!' ? (l += e.wildcard) : p !== '@' && (l += p);
        continue;
      }
      if (t[f] === '|' && c.length > 0 && c[c.length - 1] !== 'BRACE') {
        l += '|';
        continue;
      }
      if (t[f] === '+' && n && t[f + 1] === '(') {
        f++, c.push('+'), (l += '(?:');
        continue;
      }
      if (t[f] === '@' && n && t[f + 1] === '(') {
        f++, c.push('@'), (l += '(?:');
        continue;
      }
      if (t[f] === '?') {
        n && t[f + 1] === '(' ? (f++, c.push('?'), (l += '(?:')) : (l += '.');
        continue;
      }
      if (t[f] === '!' && n && t[f + 1] === '(') {
        f++, c.push('!'), (l += '(?!');
        continue;
      }
      if (t[f] === '{') {
        c.push('BRACE'), (l += '(?:');
        continue;
      }
      if (t[f] === '}' && c[c.length - 1] === 'BRACE') {
        c.pop(), (l += ')');
        continue;
      }
      if (t[f] === ',' && c[c.length - 1] === 'BRACE') {
        l += '|';
        continue;
      }
      if (t[f] === '*') {
        if (n && t[f + 1] === '(') f++, c.push('*'), (l += '(?:');
        else {
          const p = t[f - 1];
          let m = 1;
          for (; t[f + 1] === '*'; ) f++, m++;
          const b = t[f + 1];
          r && m === 2 && [...e.seps, void 0].includes(p) && [...e.seps, void 0].includes(b)
            ? ((l += e.globstar), (h = !0))
            : (l += e.wildcard);
        }
        continue;
      }
      l += Ji.includes(t[f]) ? `\\${t[f]}` : t[f];
    }
    if (c.length > 0 || u || d) {
      l = '';
      for (const p of t.slice(a, f)) (l += Ji.includes(p) ? `\\${p}` : p), (h = !1);
    }
    for (i += l, h || ((i += f < t.length ? e.sep : e.sepMaybe), (h = !0)); e.seps.includes(t[f]); )
      f++;
    a = f;
  }
  return (i = `^${i}$`), new RegExp(i, s ? 'i' : '');
}
const $1 = {
  sep: '(?:\\\\|/)+',
  sepMaybe: '(?:\\\\|/)*',
  seps: ['\\', '/'],
  globstar: '(?:[^\\\\/]*(?:\\\\|/|$)+)*',
  wildcard: '[^\\\\/]*',
  escapePrefix: '`',
};
function R1(e, t = {}) {
  return T1($1, e, t);
}
function P1(e) {
  const t = { '{': '}', '(': ')', '[': ']' },
    n = /\\(.)|(^!|\*|\?|[\].+)]\?|\[[^\\\]]+\]|\{[^\\}]+\}|\(\?[:!=][^\\)]+\)|\([^|]+\|[^\\)]+\))/;
  if (e === '') return !1;
  let r;
  for (; (r = n.exec(e)); ) {
    if (r[2]) return !0;
    let s = r.index + r[0].length;
    const o = r[1],
      i = o ? t[o] : null;
    if (o && i) {
      const a = e.indexOf(i, s);
      a !== -1 && (s = a + 1);
    }
    e = e.slice(s);
  }
  return !1;
}
function bp(e, t = {}) {
  const { globstar: n = !1 } = t;
  if (e.match(/\0/g)) throw new Error(`Glob contains invalid characters: "${e}"`);
  if (!n) return Uo(e);
  const r = mp.source,
    s = new RegExp(`(?<=(${r}|^)\\*\\*${r})\\.\\.(?=${r}|$)`, 'g');
  return Uo(e.replace(s, '\0')).replace(/\0/g, '..');
}
function k1(e, t = {}) {
  const { globstar: n = !1 } = t;
  if (!n || e.length === 0) return wp(...e);
  let r;
  for (const s of e) {
    const o = s;
    o.length > 0 && (r ? (r += `${Ml}${o}`) : (r = o));
  }
  return r ? bp(r, { globstar: n }) : '.';
}
const O1 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      DELIMITER: a1,
      SEPARATOR: Ml,
      SEPARATOR_PATTERN: mp,
      basename: i1,
      common: x1,
      dirname: c1,
      extname: u1,
      format: h1,
      fromFileUrl: g1,
      globToRegExp: R1,
      isAbsolute: yp,
      isGlob: P1,
      join: wp,
      joinGlobs: k1,
      normalize: Uo,
      normalizeGlob: bp,
      parse: y1,
      relative: w1,
      resolve: Wo,
      toFileUrl: C1,
      toNamespacedPath: S1,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
function Nl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
function M1(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == 'function') {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, '__esModule', { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var s = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        s.get
          ? s
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            },
      );
    }),
    n
  );
}
var Ys = { exports: {} };
const N1 = /^[A-Za-z]:\//;
function Hn(e = '') {
  return e && e.replace(/\\/g, '/').replace(N1, (t) => t.toUpperCase());
}
const L1 = /^[/\\]{2}/,
  I1 = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,
  _p = /^[A-Za-z]:$/,
  Mu = /^\/([A-Za-z]:)?$/,
  Cp = '/',
  Sp = ':',
  Ll = function (e) {
    if (e.length === 0) return '.';
    e = Hn(e);
    const t = e.match(L1),
      n = sr(e),
      r = e[e.length - 1] === '/';
    return (
      (e = bi(e, !n)),
      e.length === 0
        ? n
          ? '/'
          : r
            ? './'
            : '.'
        : (r && (e += '/'),
          _p.test(e) && (e += '/'),
          t ? (n ? `//${e}` : `//./${e}`) : n && !sr(e) ? `/${e}` : e)
    );
  },
  Ep = function (...e) {
    if (e.length === 0) return '.';
    let t;
    for (const n of e) n && n.length > 0 && (t === void 0 ? (t = n) : (t += `/${n}`));
    return t === void 0 ? '.' : Ll(t.replace(/\/\/+/g, '/'));
  };
function H1() {
  return typeof process < 'u' && typeof process.cwd == 'function'
    ? process.cwd().replace(/\\/g, '/')
    : '/';
}
const As = function (...e) {
  e = e.map((r) => Hn(r));
  let t = '',
    n = !1;
  for (let r = e.length - 1; r >= -1 && !n; r--) {
    const s = r >= 0 ? e[r] : H1();
    !s || s.length === 0 || ((t = `${s}/${t}`), (n = sr(s)));
  }
  return (t = bi(t, !n)), n && !sr(t) ? `/${t}` : t.length > 0 ? t : '.';
};
function bi(e, t) {
  let n = '',
    r = 0,
    s = -1,
    o = 0,
    i = null;
  for (let a = 0; a <= e.length; ++a) {
    if (a < e.length) i = e[a];
    else {
      if (i === '/') break;
      i = '/';
    }
    if (i === '/') {
      if (!(s === a - 1 || o === 1))
        if (o === 2) {
          if (n.length < 2 || r !== 2 || n[n.length - 1] !== '.' || n[n.length - 2] !== '.') {
            if (n.length > 2) {
              const l = n.lastIndexOf('/');
              l === -1
                ? ((n = ''), (r = 0))
                : ((n = n.slice(0, l)), (r = n.length - 1 - n.lastIndexOf('/'))),
                (s = a),
                (o = 0);
              continue;
            } else if (n.length > 0) {
              (n = ''), (r = 0), (s = a), (o = 0);
              continue;
            }
          }
          t && ((n += n.length > 0 ? '/..' : '..'), (r = 2));
        } else
          n.length > 0 ? (n += `/${e.slice(s + 1, a)}`) : (n = e.slice(s + 1, a)), (r = a - s - 1);
      (s = a), (o = 0);
    } else i === '.' && o !== -1 ? ++o : (o = -1);
  }
  return n;
}
const sr = function (e) {
    return I1.test(e);
  },
  xp = function (e) {
    return Hn(e);
  },
  j1 = /.(\.[^./]+)$/,
  Il = function (e) {
    const t = j1.exec(Hn(e));
    return (t && t[1]) || '';
  },
  Ap = function (e, t) {
    const n = As(e).replace(Mu, '$1').split('/'),
      r = As(t).replace(Mu, '$1').split('/');
    if (r[0][1] === ':' && n[0][1] === ':' && n[0] !== r[0]) return r.join('/');
    const s = [...n];
    for (const o of s) {
      if (r[0] !== o) break;
      n.shift(), r.shift();
    }
    return [...n.map(() => '..'), ...r].join('/');
  },
  Hl = function (e) {
    const t = Hn(e).replace(/\/$/, '').split('/').slice(0, -1);
    return t.length === 1 && _p.test(t[0]) && (t[0] += '/'), t.join('/') || (sr(e) ? '/' : '.');
  },
  Tp = function (e) {
    const t = [e.root, e.dir, e.base ?? e.name + e.ext].filter(Boolean);
    return Hn(e.root ? As(...t) : t.join('/'));
  },
  jl = function (e, t) {
    const n = Hn(e).split('/').pop();
    return t && n.endsWith(t) ? n.slice(0, -t.length) : n;
  },
  $p = function (e) {
    const t = Hn(e).split('/').shift() || '/',
      n = jl(e),
      r = Il(n);
    return { root: t, dir: Hl(e), base: n, ext: r, name: n.slice(0, n.length - r.length) };
  },
  F1 = {
    __proto__: null,
    basename: jl,
    delimiter: Sp,
    dirname: Hl,
    extname: Il,
    format: Tp,
    isAbsolute: sr,
    join: Ep,
    normalize: Ll,
    normalizeString: bi,
    parse: $p,
    relative: Ap,
    resolve: As,
    sep: Cp,
    toNamespacedPath: xp,
  },
  D1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        basename: jl,
        default: F1,
        delimiter: Sp,
        dirname: Hl,
        extname: Il,
        format: Tp,
        isAbsolute: sr,
        join: Ep,
        normalize: Ll,
        normalizeString: bi,
        parse: $p,
        relative: Ap,
        resolve: As,
        sep: Cp,
        toNamespacedPath: xp,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  B1 = M1(D1);
var Nu;
function U1() {
  return (
    Nu ||
      ((Nu = 1),
      (function (e, t) {
        Object.defineProperty(t, '__esModule', { value: !0 });
        var n = { posix: !0, win32: !0, platform: !0 };
        t.win32 = t.posix = t.platform = t.default = void 0;
        var r = o(B1);
        Object.keys(r).forEach(function (a) {
          a === 'default' ||
            a === '__esModule' ||
            Object.prototype.hasOwnProperty.call(n, a) ||
            (a in t && t[a] === r[a]) ||
            Object.defineProperty(t, a, {
              enumerable: !0,
              get: function () {
                return r[a];
              },
            });
        });
        function s(a) {
          if (typeof WeakMap != 'function') return null;
          var l = new WeakMap(),
            c = new WeakMap();
          return (s = function (u) {
            return u ? c : l;
          })(a);
        }
        function o(a, l) {
          if (a && a.__esModule) return a;
          if (a === null || (typeof a != 'object' && typeof a != 'function')) return { default: a };
          var c = s(l);
          if (c && c.has(a)) return c.get(a);
          var u = { __proto__: null },
            d = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var h in a)
            if (h !== 'default' && {}.hasOwnProperty.call(a, h)) {
              var f = d ? Object.getOwnPropertyDescriptor(a, h) : null;
              f && (f.get || f.set) ? Object.defineProperty(u, h, f) : (u[h] = a[h]);
            }
          return (u.default = a), c && c.set(a, u), u;
        }
        const i = { ...r, platform: 'posix', posix: void 0, win32: void 0 };
        (i.posix = i),
          (i.win32 = i),
          (t.posix = i),
          (t.win32 = i),
          (t.platform = 'posix'),
          (e.exports = i);
      })(Ys, Ys.exports)),
    Ys.exports
  );
}
var Yi, Lu;
function W1() {
  if (Lu) return Yi;
  (Lu = 1),
    (Yi = function (t, n) {
      for (var r = [], s = 0; s < t.length; s++) {
        var o = n(t[s], s);
        e(o) ? r.push.apply(r, o) : r.push(o);
      }
      return r;
    });
  var e =
    Array.isArray ||
    function (t) {
      return Object.prototype.toString.call(t) === '[object Array]';
    };
  return Yi;
}
var Xi, Iu;
function Rp() {
  if (Iu) return Xi;
  (Iu = 1), (Xi = e);
  function e(r, s, o) {
    r instanceof RegExp && (r = t(r, o)), s instanceof RegExp && (s = t(s, o));
    var i = n(r, s, o);
    return (
      i && {
        start: i[0],
        end: i[1],
        pre: o.slice(0, i[0]),
        body: o.slice(i[0] + r.length, i[1]),
        post: o.slice(i[1] + s.length),
      }
    );
  }
  function t(r, s) {
    var o = s.match(r);
    return o ? o[0] : null;
  }
  e.range = n;
  function n(r, s, o) {
    var i,
      a,
      l,
      c,
      u,
      d = o.indexOf(r),
      h = o.indexOf(s, d + 1),
      f = d;
    if (d >= 0 && h > 0) {
      if (r === s) return [d, h];
      for (i = [], l = o.length; f >= 0 && !u; )
        f == d
          ? (i.push(f), (d = o.indexOf(r, f + 1)))
          : i.length == 1
            ? (u = [i.pop(), h])
            : ((a = i.pop()), a < l && ((l = a), (c = h)), (h = o.indexOf(s, f + 1))),
          (f = d < h && d >= 0 ? d : h);
      i.length && (u = [l, c]);
    }
    return u;
  }
  return Xi;
}
var Zi, Hu;
function z1() {
  if (Hu) return Zi;
  Hu = 1;
  var e = W1(),
    t = Rp();
  Zi = d;
  var n = '\0SLASH' + Math.random() + '\0',
    r = '\0OPEN' + Math.random() + '\0',
    s = '\0CLOSE' + Math.random() + '\0',
    o = '\0COMMA' + Math.random() + '\0',
    i = '\0PERIOD' + Math.random() + '\0';
  function a(y) {
    return parseInt(y, 10) == y ? parseInt(y, 10) : y.charCodeAt(0);
  }
  function l(y) {
    return y
      .split('\\\\')
      .join(n)
      .split('\\{')
      .join(r)
      .split('\\}')
      .join(s)
      .split('\\,')
      .join(o)
      .split('\\.')
      .join(i);
  }
  function c(y) {
    return y
      .split(n)
      .join('\\')
      .split(r)
      .join('{')
      .split(s)
      .join('}')
      .split(o)
      .join(',')
      .split(i)
      .join('.');
  }
  function u(y) {
    if (!y) return [''];
    var _ = [],
      g = t('{', '}', y);
    if (!g) return y.split(',');
    var v = g.pre,
      x = g.body,
      $ = g.post,
      k = v.split(',');
    k[k.length - 1] += '{' + x + '}';
    var U = u($);
    return $.length && ((k[k.length - 1] += U.shift()), k.push.apply(k, U)), _.push.apply(_, k), _;
  }
  function d(y) {
    return y ? (y.substr(0, 2) === '{}' && (y = '\\{\\}' + y.substr(2)), b(l(y), !0).map(c)) : [];
  }
  function h(y) {
    return '{' + y + '}';
  }
  function f(y) {
    return /^-?0\d/.test(y);
  }
  function p(y, _) {
    return y <= _;
  }
  function m(y, _) {
    return y >= _;
  }
  function b(y, _) {
    var g = [],
      v = t('{', '}', y);
    if (!v || /\$$/.test(v.pre)) return [y];
    var x = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(v.body),
      $ = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(v.body),
      k = x || $,
      U = v.body.indexOf(',') >= 0;
    if (!k && !U)
      return v.post.match(/,.*\}/) ? ((y = v.pre + '{' + v.body + s + v.post), b(y)) : [y];
    var E;
    if (k) E = v.body.split(/\.\./);
    else if (((E = u(v.body)), E.length === 1 && ((E = b(E[0], !1).map(h)), E.length === 1))) {
      var T = v.post.length ? b(v.post, !1) : [''];
      return T.map(function (G) {
        return v.pre + E[0] + G;
      });
    }
    var A = v.pre,
      T = v.post.length ? b(v.post, !1) : [''],
      C;
    if (k) {
      var R = a(E[0]),
        H = a(E[1]),
        K = Math.max(E[0].length, E[1].length),
        D = E.length == 3 ? Math.abs(a(E[2])) : 1,
        B = p,
        F = H < R;
      F && ((D *= -1), (B = m));
      var ne = E.some(f);
      C = [];
      for (var me = R; B(me, H); me += D) {
        var le;
        if ($) (le = String.fromCharCode(me)), le === '\\' && (le = '');
        else if (((le = String(me)), ne)) {
          var ie = K - le.length;
          if (ie > 0) {
            var Me = new Array(ie + 1).join('0');
            me < 0 ? (le = '-' + Me + le.slice(1)) : (le = Me + le);
          }
        }
        C.push(le);
      }
    } else
      C = e(E, function (O) {
        return b(O, !1);
      });
    for (var Ce = 0; Ce < C.length; Ce++)
      for (var Ue = 0; Ue < T.length; Ue++) {
        var ce = A + C[Ce] + T[Ue];
        (!_ || k || ce) && g.push(ce);
      }
    return g;
  }
  return Zi;
}
var Qi, ju;
function V1() {
  if (ju) return Qi;
  (ju = 1), (Qi = f), (f.Minimatch = p);
  var e = (function () {
    try {
      return U1();
    } catch {}
  })() || { sep: '/' };
  f.sep = e.sep;
  var t = (f.GLOBSTAR = p.GLOBSTAR = {}),
    n = z1(),
    r = {
      '!': { open: '(?:(?!(?:', close: '))[^/]*?)' },
      '?': { open: '(?:', close: ')?' },
      '+': { open: '(?:', close: ')+' },
      '*': { open: '(?:', close: ')*' },
      '@': { open: '(?:', close: ')' },
    },
    s = '[^/]',
    o = s + '*?',
    i = '(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?',
    a = '(?:(?!(?:\\/|^)\\.).)*?',
    l = c('().*{}+?[]^$\\!');
  function c(E) {
    return E.split('').reduce(function (A, T) {
      return (A[T] = !0), A;
    }, {});
  }
  var u = /\/+/;
  f.filter = d;
  function d(E, A) {
    return (
      (A = A || {}),
      function (T, C, R) {
        return f(T, E, A);
      }
    );
  }
  function h(E, A) {
    A = A || {};
    var T = {};
    return (
      Object.keys(E).forEach(function (C) {
        T[C] = E[C];
      }),
      Object.keys(A).forEach(function (C) {
        T[C] = A[C];
      }),
      T
    );
  }
  (f.defaults = function (E) {
    if (!E || typeof E != 'object' || !Object.keys(E).length) return f;
    var A = f,
      T = function (R, H, K) {
        return A(R, H, h(E, K));
      };
    return (
      (T.Minimatch = function (R, H) {
        return new A.Minimatch(R, h(E, H));
      }),
      (T.Minimatch.defaults = function (R) {
        return A.defaults(h(E, R)).Minimatch;
      }),
      (T.filter = function (R, H) {
        return A.filter(R, h(E, H));
      }),
      (T.defaults = function (R) {
        return A.defaults(h(E, R));
      }),
      (T.makeRe = function (R, H) {
        return A.makeRe(R, h(E, H));
      }),
      (T.braceExpand = function (R, H) {
        return A.braceExpand(R, h(E, H));
      }),
      (T.match = function (C, R, H) {
        return A.match(C, R, h(E, H));
      }),
      T
    );
  }),
    (p.defaults = function (E) {
      return f.defaults(E).Minimatch;
    });
  function f(E, A, T) {
    return g(A), T || (T = {}), !T.nocomment && A.charAt(0) === '#' ? !1 : new p(A, T).match(E);
  }
  function p(E, A) {
    if (!(this instanceof p)) return new p(E, A);
    g(E),
      A || (A = {}),
      (E = E.trim()),
      !A.allowWindowsEscape && e.sep !== '/' && (E = E.split(e.sep).join('/')),
      (this.options = A),
      (this.set = []),
      (this.pattern = E),
      (this.regexp = null),
      (this.negate = !1),
      (this.comment = !1),
      (this.empty = !1),
      (this.partial = !!A.partial),
      this.make();
  }
  (p.prototype.debug = function () {}), (p.prototype.make = m);
  function m() {
    var E = this.pattern,
      A = this.options;
    if (!A.nocomment && E.charAt(0) === '#') {
      this.comment = !0;
      return;
    }
    if (!E) {
      this.empty = !0;
      return;
    }
    this.parseNegate();
    var T = (this.globSet = this.braceExpand());
    A.debug &&
      (this.debug = function () {
        console.error.apply(console, arguments);
      }),
      this.debug(this.pattern, T),
      (T = this.globParts =
        T.map(function (C) {
          return C.split(u);
        })),
      this.debug(this.pattern, T),
      (T = T.map(function (C, R, H) {
        return C.map(this.parse, this);
      }, this)),
      this.debug(this.pattern, T),
      (T = T.filter(function (C) {
        return C.indexOf(!1) === -1;
      })),
      this.debug(this.pattern, T),
      (this.set = T);
  }
  p.prototype.parseNegate = b;
  function b() {
    var E = this.pattern,
      A = !1,
      T = this.options,
      C = 0;
    if (!T.nonegate) {
      for (var R = 0, H = E.length; R < H && E.charAt(R) === '!'; R++) (A = !A), C++;
      C && (this.pattern = E.substr(C)), (this.negate = A);
    }
  }
  (f.braceExpand = function (E, A) {
    return y(E, A);
  }),
    (p.prototype.braceExpand = y);
  function y(E, A) {
    return (
      A || (this instanceof p ? (A = this.options) : (A = {})),
      (E = typeof E > 'u' ? this.pattern : E),
      g(E),
      A.nobrace || !/\{(?:(?!\{).)*\}/.test(E) ? [E] : n(E)
    );
  }
  var _ = 1024 * 64,
    g = function (E) {
      if (typeof E != 'string') throw new TypeError('invalid pattern');
      if (E.length > _) throw new TypeError('pattern is too long');
    };
  p.prototype.parse = x;
  var v = {};
  function x(E, A) {
    g(E);
    var T = this.options;
    if (E === '**')
      if (T.noglobstar) E = '*';
      else return t;
    if (E === '') return '';
    var C = '',
      R = !!T.nocase,
      H = !1,
      K = [],
      D = [],
      B,
      F = !1,
      ne = -1,
      me = -1,
      le = E.charAt(0) === '.' ? '' : T.dot ? '(?!(?:^|\\/)\\.{1,2}(?:$|\\/))' : '(?!\\.)',
      ie = this;
    function Me() {
      if (B) {
        switch (B) {
          case '*':
            (C += o), (R = !0);
            break;
          case '?':
            (C += s), (R = !0);
            break;
          default:
            C += '\\' + B;
            break;
        }
        ie.debug('clearStateChar %j %j', B, C), (B = !1);
      }
    }
    for (var Ce = 0, Ue = E.length, ce; Ce < Ue && (ce = E.charAt(Ce)); Ce++) {
      if ((this.debug('%s	%s %s %j', E, Ce, C, ce), H && l[ce])) {
        (C += '\\' + ce), (H = !1);
        continue;
      }
      switch (ce) {
        case '/':
          return !1;
        case '\\':
          Me(), (H = !0);
          continue;
        case '?':
        case '*':
        case '+':
        case '@':
        case '!':
          if ((this.debug('%s	%s %s %j <-- stateChar', E, Ce, C, ce), F)) {
            this.debug('  in class'), ce === '!' && Ce === me + 1 && (ce = '^'), (C += ce);
            continue;
          }
          ie.debug('call clearStateChar %j', B), Me(), (B = ce), T.noext && Me();
          continue;
        case '(':
          if (F) {
            C += '(';
            continue;
          }
          if (!B) {
            C += '\\(';
            continue;
          }
          K.push({ type: B, start: Ce - 1, reStart: C.length, open: r[B].open, close: r[B].close }),
            (C += B === '!' ? '(?:(?!(?:' : '(?:'),
            this.debug('plType %j %j', B, C),
            (B = !1);
          continue;
        case ')':
          if (F || !K.length) {
            C += '\\)';
            continue;
          }
          Me(), (R = !0);
          var O = K.pop();
          (C += O.close), O.type === '!' && D.push(O), (O.reEnd = C.length);
          continue;
        case '|':
          if (F || !K.length || H) {
            (C += '\\|'), (H = !1);
            continue;
          }
          Me(), (C += '|');
          continue;
        case '[':
          if ((Me(), F)) {
            C += '\\' + ce;
            continue;
          }
          (F = !0), (me = Ce), (ne = C.length), (C += ce);
          continue;
        case ']':
          if (Ce === me + 1 || !F) {
            (C += '\\' + ce), (H = !1);
            continue;
          }
          var G = E.substring(me + 1, Ce);
          try {
            RegExp('[' + G + ']');
          } catch {
            var V = this.parse(G, v);
            (C = C.substr(0, ne) + '\\[' + V[0] + '\\]'), (R = R || V[1]), (F = !1);
            continue;
          }
          (R = !0), (F = !1), (C += ce);
          continue;
        default:
          Me(), H ? (H = !1) : l[ce] && !(ce === '^' && F) && (C += '\\'), (C += ce);
      }
    }
    for (
      F &&
        ((G = E.substr(me + 1)),
        (V = this.parse(G, v)),
        (C = C.substr(0, ne) + '\\[' + V[0]),
        (R = R || V[1])),
        O = K.pop();
      O;
      O = K.pop()
    ) {
      var Y = C.slice(O.reStart + O.open.length);
      this.debug('setting tail', C, O),
        (Y = Y.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (X, te, se) {
          return se || (se = '\\'), te + te + se + '|';
        })),
        this.debug(
          `tail=%j
   %s`,
          Y,
          Y,
          O,
          C,
        );
      var he = O.type === '*' ? o : O.type === '?' ? s : '\\' + O.type;
      (R = !0), (C = C.slice(0, O.reStart) + he + '\\(' + Y);
    }
    Me(), H && (C += '\\\\');
    var Se = !1;
    switch (C.charAt(0)) {
      case '[':
      case '.':
      case '(':
        Se = !0;
    }
    for (var w = D.length - 1; w > -1; w--) {
      var S = D[w],
        P = C.slice(0, S.reStart),
        N = C.slice(S.reStart, S.reEnd - 8),
        M = C.slice(S.reEnd - 8, S.reEnd),
        L = C.slice(S.reEnd);
      M += L;
      var q = P.split('(').length - 1,
        z = L;
      for (Ce = 0; Ce < q; Ce++) z = z.replace(/\)[+*?]?/, '');
      L = z;
      var W = '';
      L === '' && A !== v && (W = '$');
      var j = P + N + L + W + M;
      C = j;
    }
    if ((C !== '' && R && (C = '(?=.)' + C), Se && (C = le + C), A === v)) return [C, R];
    if (!R) return k(E);
    var Q = T.nocase ? 'i' : '';
    try {
      var J = new RegExp('^' + C + '$', Q);
    } catch {
      return new RegExp('$.');
    }
    return (J._glob = E), (J._src = C), J;
  }
  (f.makeRe = function (E, A) {
    return new p(E, A || {}).makeRe();
  }),
    (p.prototype.makeRe = $);
  function $() {
    if (this.regexp || this.regexp === !1) return this.regexp;
    var E = this.set;
    if (!E.length) return (this.regexp = !1), this.regexp;
    var A = this.options,
      T = A.noglobstar ? o : A.dot ? i : a,
      C = A.nocase ? 'i' : '',
      R = E.map(function (H) {
        return H.map(function (K) {
          return K === t ? T : typeof K == 'string' ? U(K) : K._src;
        }).join('\\/');
      }).join('|');
    (R = '^(?:' + R + ')$'), this.negate && (R = '^(?!' + R + ').*$');
    try {
      this.regexp = new RegExp(R, C);
    } catch {
      this.regexp = !1;
    }
    return this.regexp;
  }
  (f.match = function (E, A, T) {
    T = T || {};
    var C = new p(A, T);
    return (
      (E = E.filter(function (R) {
        return C.match(R);
      })),
      C.options.nonull && !E.length && E.push(A),
      E
    );
  }),
    (p.prototype.match = function (A, T) {
      if (
        (typeof T > 'u' && (T = this.partial), this.debug('match', A, this.pattern), this.comment)
      )
        return !1;
      if (this.empty) return A === '';
      if (A === '/' && T) return !0;
      var C = this.options;
      e.sep !== '/' && (A = A.split(e.sep).join('/')),
        (A = A.split(u)),
        this.debug(this.pattern, 'split', A);
      var R = this.set;
      this.debug(this.pattern, 'set', R);
      var H, K;
      for (K = A.length - 1; K >= 0 && ((H = A[K]), !H); K--);
      for (K = 0; K < R.length; K++) {
        var D = R[K],
          B = A;
        C.matchBase && D.length === 1 && (B = [H]);
        var F = this.matchOne(B, D, T);
        if (F) return C.flipNegate ? !0 : !this.negate;
      }
      return C.flipNegate ? !1 : this.negate;
    }),
    (p.prototype.matchOne = function (E, A, T) {
      var C = this.options;
      this.debug('matchOne', { this: this, file: E, pattern: A }),
        this.debug('matchOne', E.length, A.length);
      for (var R = 0, H = 0, K = E.length, D = A.length; R < K && H < D; R++, H++) {
        this.debug('matchOne loop');
        var B = A[H],
          F = E[R];
        if ((this.debug(A, B, F), B === !1)) return !1;
        if (B === t) {
          this.debug('GLOBSTAR', [A, B, F]);
          var ne = R,
            me = H + 1;
          if (me === D) {
            for (this.debug('** at the end'); R < K; R++)
              if (E[R] === '.' || E[R] === '..' || (!C.dot && E[R].charAt(0) === '.')) return !1;
            return !0;
          }
          for (; ne < K; ) {
            var le = E[ne];
            if (
              (this.debug(
                `
globstar while`,
                E,
                ne,
                A,
                me,
                le,
              ),
              this.matchOne(E.slice(ne), A.slice(me), T))
            )
              return this.debug('globstar found match!', ne, K, le), !0;
            if (le === '.' || le === '..' || (!C.dot && le.charAt(0) === '.')) {
              this.debug('dot detected!', E, ne, A, me);
              break;
            }
            this.debug('globstar swallow a segment, and continue'), ne++;
          }
          return !!(
            T &&
            (this.debug(
              `
>>> no match, partial?`,
              E,
              ne,
              A,
              me,
            ),
            ne === K)
          );
        }
        var ie;
        if (
          (typeof B == 'string'
            ? ((ie = F === B), this.debug('string match', B, F, ie))
            : ((ie = F.match(B)), this.debug('pattern match', B, F, ie)),
          !ie)
        )
          return !1;
      }
      if (R === K && H === D) return !0;
      if (R === K) return T;
      if (H === D) return R === K - 1 && E[R] === '';
      throw new Error('wtf?');
    });
  function k(E) {
    return E.replace(/\\(.)/g, '$1');
  }
  function U(E) {
    return E.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
  return Qi;
}
var q1 = V1();
const K1 = Nl(q1);
var Xs = { exports: {} },
  ea,
  Fu;
function G1() {
  if (Fu) return ea;
  Fu = 1;
  var e = 1e3,
    t = e * 60,
    n = t * 60,
    r = n * 24,
    s = r * 7,
    o = r * 365.25;
  ea = function (u, d) {
    d = d || {};
    var h = typeof u;
    if (h === 'string' && u.length > 0) return i(u);
    if (h === 'number' && isFinite(u)) return d.long ? l(u) : a(u);
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(u));
  };
  function i(u) {
    if (((u = String(u)), !(u.length > 100))) {
      var d =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          u,
        );
      if (d) {
        var h = parseFloat(d[1]),
          f = (d[2] || 'ms').toLowerCase();
        switch (f) {
          case 'years':
          case 'year':
          case 'yrs':
          case 'yr':
          case 'y':
            return h * o;
          case 'weeks':
          case 'week':
          case 'w':
            return h * s;
          case 'days':
          case 'day':
          case 'd':
            return h * r;
          case 'hours':
          case 'hour':
          case 'hrs':
          case 'hr':
          case 'h':
            return h * n;
          case 'minutes':
          case 'minute':
          case 'mins':
          case 'min':
          case 'm':
            return h * t;
          case 'seconds':
          case 'second':
          case 'secs':
          case 'sec':
          case 's':
            return h * e;
          case 'milliseconds':
          case 'millisecond':
          case 'msecs':
          case 'msec':
          case 'ms':
            return h;
          default:
            return;
        }
      }
    }
  }
  function a(u) {
    var d = Math.abs(u);
    return d >= r
      ? Math.round(u / r) + 'd'
      : d >= n
        ? Math.round(u / n) + 'h'
        : d >= t
          ? Math.round(u / t) + 'm'
          : d >= e
            ? Math.round(u / e) + 's'
            : u + 'ms';
  }
  function l(u) {
    var d = Math.abs(u);
    return d >= r
      ? c(u, d, r, 'day')
      : d >= n
        ? c(u, d, n, 'hour')
        : d >= t
          ? c(u, d, t, 'minute')
          : d >= e
            ? c(u, d, e, 'second')
            : u + ' ms';
  }
  function c(u, d, h, f) {
    var p = d >= h * 1.5;
    return Math.round(u / h) + ' ' + f + (p ? 's' : '');
  }
  return ea;
}
var ta, Du;
function J1() {
  if (Du) return ta;
  Du = 1;
  function e(t) {
    (r.debug = r),
      (r.default = r),
      (r.coerce = c),
      (r.disable = a),
      (r.enable = o),
      (r.enabled = l),
      (r.humanize = G1()),
      (r.destroy = u),
      Object.keys(t).forEach((d) => {
        r[d] = t[d];
      }),
      (r.names = []),
      (r.skips = []),
      (r.formatters = {});
    function n(d) {
      let h = 0;
      for (let f = 0; f < d.length; f++) (h = (h << 5) - h + d.charCodeAt(f)), (h |= 0);
      return r.colors[Math.abs(h) % r.colors.length];
    }
    r.selectColor = n;
    function r(d) {
      let h,
        f = null,
        p,
        m;
      function b(...y) {
        if (!b.enabled) return;
        const _ = b,
          g = Number(new Date()),
          v = g - (h || g);
        (_.diff = v),
          (_.prev = h),
          (_.curr = g),
          (h = g),
          (y[0] = r.coerce(y[0])),
          typeof y[0] != 'string' && y.unshift('%O');
        let x = 0;
        (y[0] = y[0].replace(/%([a-zA-Z%])/g, (k, U) => {
          if (k === '%%') return '%';
          x++;
          const E = r.formatters[U];
          if (typeof E == 'function') {
            const A = y[x];
            (k = E.call(_, A)), y.splice(x, 1), x--;
          }
          return k;
        })),
          r.formatArgs.call(_, y),
          (_.log || r.log).apply(_, y);
      }
      return (
        (b.namespace = d),
        (b.useColors = r.useColors()),
        (b.color = r.selectColor(d)),
        (b.extend = s),
        (b.destroy = r.destroy),
        Object.defineProperty(b, 'enabled', {
          enumerable: !0,
          configurable: !1,
          get: () =>
            f !== null ? f : (p !== r.namespaces && ((p = r.namespaces), (m = r.enabled(d))), m),
          set: (y) => {
            f = y;
          },
        }),
        typeof r.init == 'function' && r.init(b),
        b
      );
    }
    function s(d, h) {
      const f = r(this.namespace + (typeof h > 'u' ? ':' : h) + d);
      return (f.log = this.log), f;
    }
    function o(d) {
      r.save(d), (r.namespaces = d), (r.names = []), (r.skips = []);
      const h = (typeof d == 'string' ? d : '').trim().replace(' ', ',').split(',').filter(Boolean);
      for (const f of h) f[0] === '-' ? r.skips.push(f.slice(1)) : r.names.push(f);
    }
    function i(d, h) {
      let f = 0,
        p = 0,
        m = -1,
        b = 0;
      for (; f < d.length; )
        if (p < h.length && (h[p] === d[f] || h[p] === '*'))
          h[p] === '*' ? ((m = p), (b = f), p++) : (f++, p++);
        else if (m !== -1) (p = m + 1), b++, (f = b);
        else return !1;
      for (; p < h.length && h[p] === '*'; ) p++;
      return p === h.length;
    }
    function a() {
      const d = [...r.names, ...r.skips.map((h) => '-' + h)].join(',');
      return r.enable(''), d;
    }
    function l(d) {
      for (const h of r.skips) if (i(d, h)) return !1;
      for (const h of r.names) if (i(d, h)) return !0;
      return !1;
    }
    function c(d) {
      return d instanceof Error ? d.stack || d.message : d;
    }
    function u() {
      console.warn(
        'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
      );
    }
    return r.enable(r.load()), r;
  }
  return (ta = e), ta;
}
var Bu;
function Y1() {
  return (
    Bu ||
      ((Bu = 1),
      (function (e, t) {
        var n = {};
        (t.formatArgs = s),
          (t.save = o),
          (t.load = i),
          (t.useColors = r),
          (t.storage = a()),
          (t.destroy = (() => {
            let c = !1;
            return () => {
              c ||
                ((c = !0),
                console.warn(
                  'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
                ));
            };
          })()),
          (t.colors = [
            '#0000CC',
            '#0000FF',
            '#0033CC',
            '#0033FF',
            '#0066CC',
            '#0066FF',
            '#0099CC',
            '#0099FF',
            '#00CC00',
            '#00CC33',
            '#00CC66',
            '#00CC99',
            '#00CCCC',
            '#00CCFF',
            '#3300CC',
            '#3300FF',
            '#3333CC',
            '#3333FF',
            '#3366CC',
            '#3366FF',
            '#3399CC',
            '#3399FF',
            '#33CC00',
            '#33CC33',
            '#33CC66',
            '#33CC99',
            '#33CCCC',
            '#33CCFF',
            '#6600CC',
            '#6600FF',
            '#6633CC',
            '#6633FF',
            '#66CC00',
            '#66CC33',
            '#9900CC',
            '#9900FF',
            '#9933CC',
            '#9933FF',
            '#99CC00',
            '#99CC33',
            '#CC0000',
            '#CC0033',
            '#CC0066',
            '#CC0099',
            '#CC00CC',
            '#CC00FF',
            '#CC3300',
            '#CC3333',
            '#CC3366',
            '#CC3399',
            '#CC33CC',
            '#CC33FF',
            '#CC6600',
            '#CC6633',
            '#CC9900',
            '#CC9933',
            '#CCCC00',
            '#CCCC33',
            '#FF0000',
            '#FF0033',
            '#FF0066',
            '#FF0099',
            '#FF00CC',
            '#FF00FF',
            '#FF3300',
            '#FF3333',
            '#FF3366',
            '#FF3399',
            '#FF33CC',
            '#FF33FF',
            '#FF6600',
            '#FF6633',
            '#FF9900',
            '#FF9933',
            '#FFCC00',
            '#FFCC33',
          ]);
        function r() {
          if (
            typeof window < 'u' &&
            window.process &&
            (window.process.type === 'renderer' || window.process.__nwjs)
          )
            return !0;
          if (
            typeof navigator < 'u' &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
          )
            return !1;
          let c;
          return (
            (typeof document < 'u' &&
              document.documentElement &&
              document.documentElement.style &&
              document.documentElement.style.WebkitAppearance) ||
            (typeof window < 'u' &&
              window.console &&
              (window.console.firebug || (window.console.exception && window.console.table))) ||
            (typeof navigator < 'u' &&
              navigator.userAgent &&
              (c = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) &&
              parseInt(c[1], 10) >= 31) ||
            (typeof navigator < 'u' &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
          );
        }
        function s(c) {
          if (
            ((c[0] =
              (this.useColors ? '%c' : '') +
              this.namespace +
              (this.useColors ? ' %c' : ' ') +
              c[0] +
              (this.useColors ? '%c ' : ' ') +
              '+' +
              e.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          const u = 'color: ' + this.color;
          c.splice(1, 0, u, 'color: inherit');
          let d = 0,
            h = 0;
          c[0].replace(/%[a-zA-Z%]/g, (f) => {
            f !== '%%' && (d++, f === '%c' && (h = d));
          }),
            c.splice(h, 0, u);
        }
        t.log = console.debug || console.log || (() => {});
        function o(c) {
          try {
            c ? t.storage.setItem('debug', c) : t.storage.removeItem('debug');
          } catch {}
        }
        function i() {
          let c;
          try {
            c = t.storage.getItem('debug');
          } catch {}
          return !c && typeof process < 'u' && 'env' in process && (c = n.DEBUG), c;
        }
        function a() {
          try {
            return localStorage;
          } catch {}
        }
        e.exports = J1()(t);
        const { formatters: l } = e.exports;
        l.j = function (c) {
          try {
            return JSON.stringify(c);
          } catch (u) {
            return '[UnexpectedJSONParseError]: ' + u.message;
          }
        };
      })(Xs, Xs.exports)),
    Xs.exports
  );
}
var X1 = Y1();
const Z1 = Nl(X1);
class Pp {
  static overwrite(t, n) {
    return n;
  }
  static replace(t, n) {
    return typeof n < 'u' ? n : t;
  }
  static assign(t, n) {
    return Object.assign({}, t, n);
  }
}
class Ga {
  static array(t) {
    if (!Array.isArray(t)) throw new TypeError('Expected an array.');
  }
  static boolean(t) {
    if (typeof t != 'boolean') throw new TypeError('Expected a Boolean.');
  }
  static number(t) {
    if (typeof t != 'number') throw new TypeError('Expected a number.');
  }
  static object(t) {
    if (!t || typeof t != 'object') throw new TypeError('Expected an object.');
  }
  static 'object?'(t) {
    if (typeof t != 'object') throw new TypeError('Expected an object or null.');
  }
  static string(t) {
    if (typeof t != 'string') throw new TypeError('Expected a string.');
  }
  static 'string!'(t) {
    if (typeof t != 'string' || t.length === 0) throw new TypeError('Expected a non-empty string.');
  }
}
function Q1(e, t) {
  let n = !1;
  if (t.schema)
    if (typeof t.schema == 'object') n = !0;
    else throw new TypeError('Schema must be an object.');
  if (typeof t.merge == 'string') {
    if (!(t.merge in Pp))
      throw new TypeError(`Definition for key "${e}" missing valid merge strategy.`);
  } else if (!n && typeof t.merge != 'function')
    throw new TypeError(`Definition for key "${e}" must have a merge property.`);
  if (typeof t.validate == 'string') {
    if (!(t.validate in Ga))
      throw new TypeError(`Definition for key "${e}" missing valid validation strategy.`);
  } else if (!n && typeof t.validate != 'function')
    throw new TypeError(`Definition for key "${e}" must have a validate() method.`);
}
class eS extends Error {
  constructor(t) {
    super(`Unexpected key "${t}" found.`);
  }
}
class tS extends Error {
  constructor(t) {
    super(`Missing required key "${t}".`);
  }
}
class nS extends Error {
  constructor(t, n) {
    super(`Key "${t}" requires keys "${n.join('", "')}".`);
  }
}
class Uu extends Error {
  constructor(t, n) {
    super(`Key "${t}": ${n.message}`, { cause: n });
    for (const r of Object.keys(n)) r in this || (this[r] = n[r]);
  }
}
var Kn, Ts;
const Dl = class Dl {
  constructor(t) {
    We(this, Kn, new Map());
    We(this, Ts, new Map());
    if (!t) throw new Error('Schema definitions missing.');
    for (const n of Object.keys(t)) {
      if ((Q1(n, t[n]), typeof t[n].schema == 'object')) {
        const r = new Dl(t[n].schema);
        t[n] = {
          ...t[n],
          merge(s = {}, o = {}) {
            return r.merge(s, o);
          },
          validate(s) {
            Ga.object(s), r.validate(s);
          },
        };
      }
      typeof t[n].merge == 'string' && (t[n] = { ...t[n], merge: Pp[t[n].merge] }),
        typeof t[n].validate == 'string' && (t[n] = { ...t[n], validate: Ga[t[n].validate] }),
        I(this, Kn).set(n, t[n]),
        t[n].required && I(this, Ts).set(n, t[n]);
    }
  }
  hasKey(t) {
    return I(this, Kn).has(t);
  }
  merge(...t) {
    if (t.length < 2) throw new TypeError('merge() requires at least two arguments.');
    if (t.some((n) => n === null || typeof n != 'object'))
      throw new TypeError('All arguments must be objects.');
    return t.reduce((n, r) => {
      this.validate(r);
      for (const [s, o] of I(this, Kn))
        try {
          if (s in n || s in r) {
            const a = o.merge.call(this, n[s], r[s]);
            a !== void 0 && (n[s] = a);
          }
        } catch (i) {
          throw new Uu(s, i);
        }
      return n;
    }, {});
  }
  validate(t) {
    for (const n of Object.keys(t)) {
      if (!this.hasKey(n)) throw new eS(n);
      const r = I(this, Kn).get(n);
      if (Array.isArray(r.requires) && !r.requires.every((s) => s in t))
        throw new nS(n, r.requires);
      try {
        r.validate.call(r, t[n]);
      } catch (s) {
        throw new Uu(n, s);
      }
    }
    for (const [n] of I(this, Ts)) if (!(n in t)) throw new tS(n);
  }
};
(Kn = new WeakMap()), (Ts = new WeakMap());
let zo = Dl;
const Wu = { required: !1, merge() {}, validate() {} },
  rS = Object.freeze({
    name: {
      required: !1,
      merge() {},
      validate(e) {
        if (typeof e != 'string') throw new TypeError('Property must be a string.');
      },
    },
    files: Wu,
    ignores: Wu,
  });
function sS(e) {
  if (!Array.isArray(e)) throw new TypeError('Expected value to be an array.');
}
function zu(e) {
  if ((sS(e), e.some((t) => typeof t != 'string' && typeof t != 'function')))
    throw new TypeError('Expected array to only contain strings and functions.');
}
function oS(e) {
  if (!Array.isArray(e) || e.length === 0)
    throw new TypeError('Expected value to be a non-empty array.');
}
const iS = Object.freeze({
    files: {
      required: !1,
      merge() {},
      validate(e) {
        oS(e),
          e.forEach((t) => {
            if (Array.isArray(t)) zu(t);
            else if (typeof t != 'string' && typeof t != 'function')
              throw new TypeError(
                'Items must be a string, a function, or an array of strings and functions.',
              );
          });
      },
    },
    ignores: { required: !1, merge() {}, validate: zu },
  }),
  aS = K1.Minimatch,
  Tt = Z1('@eslint/config-array'),
  lS = new Map(),
  cS = new Map(),
  uS = { dot: !0, allowWindowsEscape: !0 },
  fS = new Set(['array', 'function']),
  kp = new Set(['name', 'index']),
  dS = new zo(iS),
  Vu = Object.freeze({ status: 'external' }),
  Zs = Object.freeze({ status: 'ignored' }),
  qu = Object.freeze({ status: 'unconfigured' }),
  Ku = /^\.\.(?:\/|$)/u;
class lo extends Error {
  constructor(t, n, { cause: r, message: s }) {
    const o = s || r.message;
    if ((super(`Config ${t}: ${o}`, { cause: r }), r))
      for (const i of Object.keys(r)) i in this || (this[i] = r[i]);
    (this.name = 'ConfigError'), (this.index = n);
  }
}
function co(e) {
  return e && typeof e.name == 'string' && e.name ? `"${e.name}"` : '(unnamed)';
}
function Op(e, t, n) {
  const r = co(e);
  throw new lo(r, t, { cause: n });
}
function Mp(e) {
  return typeof e == 'string';
}
function Gu(e, t) {
  if (e === null) throw new lo(co(e), t, { message: 'Unexpected null config.' });
  if (e === void 0) throw new lo(co(e), t, { message: 'Unexpected undefined config.' });
  if (typeof e != 'object') throw new lo(co(e), t, { message: 'Unexpected non-object config.' });
  const n = {};
  'files' in e && (n.files = e.files), 'ignores' in e && (n.ignores = e.ignores);
  try {
    dS.validate(n);
  } catch (r) {
    Op(e, t, r);
  }
}
function Ja(e, t, n = {}) {
  let r = lS;
  n.flipNegate && (r = cS);
  let s = r.get(t);
  return s || ((s = new aS(t, Object.assign({}, uS, n))), r.set(t, s)), s.match(e);
}
async function hS(e, t, n) {
  const r = n.includes('function'),
    s = n.includes('array');
  async function* o(l) {
    for (let c of l) {
      if (typeof c == 'function') {
        if (!r) throw new TypeError('Unexpected function.');
        (c = c(t)), c.then && (c = await c);
      }
      if (Array.isArray(c)) {
        if (!s) throw new TypeError('Unexpected array.');
        yield* o(c);
      } else {
        if (typeof c == 'function')
          throw new TypeError('A config function can only return an object or array.');
        yield c;
      }
    }
  }
  const i = await o(e),
    a = [];
  for await (const l of i) a.push(l);
  return a;
}
function pS(e, t, n) {
  const r = n.includes('function'),
    s = n.includes('array');
  function* o(i) {
    for (let a of i) {
      if (typeof a == 'function') {
        if (!r) throw new TypeError('Unexpected function.');
        if (((a = a(t)), a.then)) throw new TypeError('Async config functions are not supported.');
      }
      if (Array.isArray(a)) {
        if (!s) throw new TypeError('Unexpected array.');
        yield* o(a);
      } else {
        if (typeof a == 'function')
          throw new TypeError('A config function can only return an object or array.');
        yield a;
      }
    }
  }
  return [...o(e)];
}
function Vo(e, t, n) {
  return e.reduce(
    (r, s) =>
      r
        ? typeof s == 'string' && s.startsWith('!')
          ? !Ja(n, s, { flipNegate: !0 })
          : r
        : typeof s == 'function'
          ? s(t)
          : s.startsWith('!')
            ? !1
            : Ja(n, s),
    !1,
  );
}
function gS(e, t, n) {
  return Object.keys(n).filter((r) => !kp.has(r)).length > 1 && !Vo(n.ignores, e, t);
}
function na(e, t, n) {
  function r(o) {
    if (Mp(o)) return Ja(t, o);
    if (typeof o == 'function') return o(e);
    throw new TypeError(`Unexpected matcher type ${o}.`);
  }
  let s = n.files.some((o) => (Array.isArray(o) ? o.every(r) : r(o)));
  return s && n.ignores && (s = !Vo(n.ignores, e, t)), s;
}
function Qs(e) {
  if (!e.isNormalized())
    throw new Error('ConfigArray must be normalized to perform this operation.');
}
function mS(e) {
  if (e.length > 2) throw new TypeError('configTypes must be an array with at most two items.');
  for (const t of e)
    if (!fS.has(t))
      throw new TypeError(
        `Unexpected config type "${t}" found. Expected one of: "object", "array", "function".`,
      );
}
function yS(e) {
  if (e.startsWith('/')) return YC;
  if (/^(?:[A-Za-z]:[/\\]|[/\\]{2})/u.test(e)) return O1;
  throw new Error(`Expected an absolute path but received "${e}"`);
}
function Ju(e, t, n) {
  const r = n.resolve(t, e),
    s = n.toNamespacedPath(r);
  return n.relative(t, s).replaceAll(n.SEPARATOR, '/');
}
const dt = {
    isNormalized: Symbol('isNormalized'),
    configCache: Symbol('configCache'),
    schema: Symbol('schema'),
    finalizeConfig: Symbol('finalizeConfig'),
    preprocessConfig: Symbol('preprocessConfig'),
  },
  ur = new WeakMap();
var $r, tn;
class vS extends Array {
  constructor(
    n,
    { basePath: r = '/', normalized: s = !1, schema: o, extraConfigTypes: i = [] } = {},
  ) {
    super();
    We(this, $r);
    We(this, tn);
    if (
      ((this[dt.isNormalized] = s),
      (this[dt.schema] = new zo(Object.assign({}, o, rS))),
      !Mp(r) || !r)
    )
      throw new TypeError('basePath must be a non-empty string');
    (this.basePath = r),
      mS(i),
      (this.extraConfigTypes = [...i]),
      Object.freeze(this.extraConfigTypes),
      (this[dt.configCache] = new Map()),
      ur.set(this, {
        explicitMatches: new Map(),
        directoryMatches: new Map(),
        files: void 0,
        ignores: void 0,
      }),
      Array.isArray(n) ? this.push(...n) : this.push(n),
      ke(this, tn, yS(r)),
      ke(this, $r, I(this, tn).toNamespacedPath(r));
  }
  static get [Symbol.species]() {
    return Array;
  }
  get files() {
    Qs(this);
    const n = ur.get(this);
    if (n.files) return n.files;
    const r = [];
    for (const s of this)
      s.files &&
        s.files.forEach((o) => {
          r.push(o);
        });
    return (n.files = r), ur.set(this, n), r;
  }
  get ignores() {
    Qs(this);
    const n = ur.get(this);
    if (n.ignores) return n.ignores;
    const r = [];
    for (const s of this)
      s.ignores && Object.keys(s).filter((o) => !kp.has(o)).length === 1 && r.push(...s.ignores);
    return (n.ignores = r), ur.set(this, n), r;
  }
  isNormalized() {
    return this[dt.isNormalized];
  }
  async normalize(n = {}) {
    if (!this.isNormalized()) {
      const r = await hS(this, n, this.extraConfigTypes);
      (this.length = 0),
        this.push(...r.map(this[dt.preprocessConfig].bind(this))),
        this.forEach(Gu),
        (this[dt.isNormalized] = !0),
        Object.freeze(this);
    }
    return this;
  }
  normalizeSync(n = {}) {
    if (!this.isNormalized()) {
      const r = pS(this, n, this.extraConfigTypes);
      (this.length = 0),
        this.push(...r.map(this[dt.preprocessConfig].bind(this))),
        this.forEach(Gu),
        (this[dt.isNormalized] = !0),
        Object.freeze(this);
    }
    return this;
  }
  [dt.finalizeConfig](n) {
    return n;
  }
  [dt.preprocessConfig](n) {
    return n;
  }
  getConfigWithStatus(n) {
    Qs(this);
    const r = this[dt.configCache];
    if (r.has(n)) return r.get(n);
    const s = Ju(n, I(this, $r), I(this, tn));
    if (Ku.test(s)) return Tt(`No config for file ${n} outside of base path`), r.set(n, Vu), Vu;
    if (this.isDirectoryIgnored(I(this, tn).dirname(n)))
      return Tt(`Ignoring ${n} based on directory pattern`), r.set(n, Zs), Zs;
    if (Vo(this.ignores, n, s)) return Tt(`Ignoring ${n} based on file pattern`), r.set(n, Zs), Zs;
    const o = [];
    let i = !1;
    const a = /^\*$|\/\*{1,2}$/u;
    if (
      (this.forEach((d, h) => {
        if (!d.files) {
          if (!d.ignores) {
            Tt(`Universal config found for ${n}`), o.push(h);
            return;
          }
          if (gS(n, s, d)) {
            Tt(`Matching config found for ${n} (based on ignores: ${d.ignores})`), o.push(h);
            return;
          }
          Tt(`Skipped config found for ${n} (based on ignores: ${d.ignores})`);
          return;
        }
        const f = d.files.filter((p) => a.test(p));
        if (f.length) {
          Tt('Universal files patterns found. Checking carefully.');
          const p = d.files.filter((m) => !a.test(m));
          if (p.length && na(n, s, { files: p, ignores: d.ignores })) {
            Tt(`Matching config found for ${n}`), o.push(h), (i = !0);
            return;
          }
          if (f.length && na(n, s, { files: f, ignores: d.ignores })) {
            Tt(`Matching config found for ${n}`), o.push(h);
            return;
          }
          return;
        }
        na(n, s, d) && (Tt(`Matching config found for ${n}`), o.push(h), (i = !0));
      }),
      !i)
    )
      return Tt(`No matching configs found for ${n}`), r.set(n, qu), qu;
    const l = o.toString();
    let c = r.get(l);
    if (c) return r.set(n, c), c;
    let u = o.reduce((d, h) => {
      try {
        return this[dt.schema].merge(d, this[h]);
      } catch (f) {
        Op(this[h], h, f);
      }
    }, {});
    return (
      (u = this[dt.finalizeConfig](u)),
      (c = Object.freeze({ config: u, status: 'matched' })),
      r.set(n, c),
      r.set(l, c),
      c
    );
  }
  getConfig(n) {
    return this.getConfigWithStatus(n).config;
  }
  getConfigStatus(n) {
    return this.getConfigWithStatus(n).status;
  }
  isIgnored(n) {
    return this.isFileIgnored(n);
  }
  isFileIgnored(n) {
    return this.getConfigStatus(n) === 'ignored';
  }
  isDirectoryIgnored(n) {
    Qs(this);
    const r = Ju(n, I(this, $r), I(this, tn));
    if (r === '') return !1;
    if (Ku.test(r)) return !0;
    const s = ur.get(this).directoryMatches;
    if (s.has(r)) return s.get(r);
    const o = r.split('/');
    let i = '',
      a;
    do
      (i += `${o.shift()}/`),
        (a = Vo(this.ignores, I(this, tn).join(this.basePath, i), i)),
        s.set(i, a);
    while (!a && o.length);
    return s.set(r, a), a;
  }
}
($r = new WeakMap()), (tn = new WeakMap());
var ra, Yu;
function wS() {
  if (Yu) return ra;
  Yu = 1;
  var e = Rp();
  ra = u;
  var t = '\0SLASH' + Math.random() + '\0',
    n = '\0OPEN' + Math.random() + '\0',
    r = '\0CLOSE' + Math.random() + '\0',
    s = '\0COMMA' + Math.random() + '\0',
    o = '\0PERIOD' + Math.random() + '\0';
  function i(b) {
    return parseInt(b, 10) == b ? parseInt(b, 10) : b.charCodeAt(0);
  }
  function a(b) {
    return b
      .split('\\\\')
      .join(t)
      .split('\\{')
      .join(n)
      .split('\\}')
      .join(r)
      .split('\\,')
      .join(s)
      .split('\\.')
      .join(o);
  }
  function l(b) {
    return b
      .split(t)
      .join('\\')
      .split(n)
      .join('{')
      .split(r)
      .join('}')
      .split(s)
      .join(',')
      .split(o)
      .join('.');
  }
  function c(b) {
    if (!b) return [''];
    var y = [],
      _ = e('{', '}', b);
    if (!_) return b.split(',');
    var g = _.pre,
      v = _.body,
      x = _.post,
      $ = g.split(',');
    $[$.length - 1] += '{' + v + '}';
    var k = c(x);
    return x.length && (($[$.length - 1] += k.shift()), $.push.apply($, k)), y.push.apply(y, $), y;
  }
  function u(b) {
    return b ? (b.substr(0, 2) === '{}' && (b = '\\{\\}' + b.substr(2)), m(a(b), !0).map(l)) : [];
  }
  function d(b) {
    return '{' + b + '}';
  }
  function h(b) {
    return /^-?0\d/.test(b);
  }
  function f(b, y) {
    return b <= y;
  }
  function p(b, y) {
    return b >= y;
  }
  function m(b, y) {
    var _ = [],
      g = e('{', '}', b);
    if (!g) return [b];
    var v = g.pre,
      x = g.post.length ? m(g.post, !1) : [''];
    if (/\$$/.test(g.pre))
      for (var $ = 0; $ < x.length; $++) {
        var k = v + '{' + g.body + '}' + x[$];
        _.push(k);
      }
    else {
      var U = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(g.body),
        E = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(g.body),
        A = U || E,
        T = g.body.indexOf(',') >= 0;
      if (!A && !T)
        return g.post.match(/,.*\}/) ? ((b = g.pre + '{' + g.body + r + g.post), m(b)) : [b];
      var C;
      if (A) C = g.body.split(/\.\./);
      else if (((C = c(g.body)), C.length === 1 && ((C = m(C[0], !1).map(d)), C.length === 1)))
        return x.map(function (ce) {
          return g.pre + C[0] + ce;
        });
      var R;
      if (A) {
        var H = i(C[0]),
          K = i(C[1]),
          D = Math.max(C[0].length, C[1].length),
          B = C.length == 3 ? Math.abs(i(C[2])) : 1,
          F = f,
          ne = K < H;
        ne && ((B *= -1), (F = p));
        var me = C.some(h);
        R = [];
        for (var le = H; F(le, K); le += B) {
          var ie;
          if (E) (ie = String.fromCharCode(le)), ie === '\\' && (ie = '');
          else if (((ie = String(le)), me)) {
            var Me = D - ie.length;
            if (Me > 0) {
              var Ce = new Array(Me + 1).join('0');
              le < 0 ? (ie = '-' + Ce + ie.slice(1)) : (ie = Ce + ie);
            }
          }
          R.push(ie);
        }
      } else {
        R = [];
        for (var Ue = 0; Ue < C.length; Ue++) R.push.apply(R, m(C[Ue], !1));
      }
      for (var Ue = 0; Ue < R.length; Ue++)
        for (var $ = 0; $ < x.length; $++) {
          var k = v + R[Ue] + x[$];
          (!y || A || k) && _.push(k);
        }
    }
    return _;
  }
  return ra;
}
var bS = wS();
const _S = Nl(bS),
  CS = 1024 * 64,
  qo = (e) => {
    if (typeof e != 'string') throw new TypeError('invalid pattern');
    if (e.length > CS) throw new TypeError('pattern is too long');
  },
  SS = {
    '[:alnum:]': ['\\p{L}\\p{Nl}\\p{Nd}', !0],
    '[:alpha:]': ['\\p{L}\\p{Nl}', !0],
    '[:ascii:]': ['\\x00-\\x7f', !1],
    '[:blank:]': ['\\p{Zs}\\t', !0],
    '[:cntrl:]': ['\\p{Cc}', !0],
    '[:digit:]': ['\\p{Nd}', !0],
    '[:graph:]': ['\\p{Z}\\p{C}', !0, !0],
    '[:lower:]': ['\\p{Ll}', !0],
    '[:print:]': ['\\p{C}', !0],
    '[:punct:]': ['\\p{P}', !0],
    '[:space:]': ['\\p{Z}\\t\\r\\n\\v\\f', !0],
    '[:upper:]': ['\\p{Lu}', !0],
    '[:word:]': ['\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}', !0],
    '[:xdigit:]': ['A-Fa-f0-9', !1],
  },
  Vr = (e) => e.replace(/[[\]\\-]/g, '\\$&'),
  ES = (e) => e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'),
  Xu = (e) => e.join(''),
  xS = (e, t) => {
    const n = t;
    if (e.charAt(n) !== '[') throw new Error('not in a brace expression');
    const r = [],
      s = [];
    let o = n + 1,
      i = !1,
      a = !1,
      l = !1,
      c = !1,
      u = n,
      d = '';
    e: for (; o < e.length; ) {
      const m = e.charAt(o);
      if ((m === '!' || m === '^') && o === n + 1) {
        (c = !0), o++;
        continue;
      }
      if (m === ']' && i && !l) {
        u = o + 1;
        break;
      }
      if (((i = !0), m === '\\' && !l)) {
        (l = !0), o++;
        continue;
      }
      if (m === '[' && !l) {
        for (const [b, [y, _, g]] of Object.entries(SS))
          if (e.startsWith(b, o)) {
            if (d) return ['$.', !1, e.length - n, !0];
            (o += b.length), g ? s.push(y) : r.push(y), (a = a || _);
            continue e;
          }
      }
      if (((l = !1), d)) {
        m > d ? r.push(Vr(d) + '-' + Vr(m)) : m === d && r.push(Vr(m)), (d = ''), o++;
        continue;
      }
      if (e.startsWith('-]', o + 1)) {
        r.push(Vr(m + '-')), (o += 2);
        continue;
      }
      if (e.startsWith('-', o + 1)) {
        (d = m), (o += 2);
        continue;
      }
      r.push(Vr(m)), o++;
    }
    if (u < o) return ['', !1, 0, !1];
    if (!r.length && !s.length) return ['$.', !1, e.length - n, !0];
    if (s.length === 0 && r.length === 1 && /^\\?.$/.test(r[0]) && !c) {
      const m = r[0].length === 2 ? r[0].slice(-1) : r[0];
      return [ES(m), !1, u - n, !1];
    }
    const h = '[' + (c ? '^' : '') + Xu(r) + ']',
      f = '[' + (c ? '' : '^') + Xu(s) + ']';
    return [r.length && s.length ? '(' + h + '|' + f + ')' : r.length ? h : f, a, u - n, !0];
  },
  Gr = (e, { windowsPathsNoEscape: t = !1 } = {}) =>
    t
      ? e.replace(/\[([^\/\\])\]/g, '$1')
      : e.replace(/((?!\\).|^)\[([^\/\\])\]/g, '$1$2').replace(/\\([^\/])/g, '$1'),
  AS = new Set(['!', '?', '+', '*', '@']),
  Zu = (e) => AS.has(e),
  TS = '(?!(?:^|/)\\.\\.?(?:$|/))',
  sa = '(?!\\.)',
  $S = new Set(['[', '.']),
  RS = new Set(['..', '.']),
  PS = new Set('().*{}+?[]^$\\!'),
  kS = (e) => e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'),
  Fl = '[^/]',
  Qu = Fl + '*?',
  ef = Fl + '+?';
var Le, ze, nn, $e, Ne, _n, Gn, Cn, Bt, Jn, $s, or, Np, Tn, uo, Ya, Lp;
const Ze = class Ze {
  constructor(t, n, r = {}) {
    We(this, or);
    xe(this, 'type');
    We(this, Le);
    We(this, ze);
    We(this, nn, !1);
    We(this, $e, []);
    We(this, Ne);
    We(this, _n);
    We(this, Gn);
    We(this, Cn, !1);
    We(this, Bt);
    We(this, Jn);
    We(this, $s, !1);
    (this.type = t),
      t && ke(this, ze, !0),
      ke(this, Ne, n),
      ke(this, Le, I(this, Ne) ? I(I(this, Ne), Le) : this),
      ke(this, Bt, I(this, Le) === this ? r : I(I(this, Le), Bt)),
      ke(this, Gn, I(this, Le) === this ? [] : I(I(this, Le), Gn)),
      t === '!' && !I(I(this, Le), Cn) && I(this, Gn).push(this),
      ke(this, _n, I(this, Ne) ? I(I(this, Ne), $e).length : 0);
  }
  get hasMagic() {
    if (I(this, ze) !== void 0) return I(this, ze);
    for (const t of I(this, $e))
      if (typeof t != 'string' && (t.type || t.hasMagic)) return ke(this, ze, !0);
    return I(this, ze);
  }
  toString() {
    return I(this, Jn) !== void 0
      ? I(this, Jn)
      : this.type
        ? ke(
            this,
            Jn,
            this.type +
              '(' +
              I(this, $e)
                .map((t) => String(t))
                .join('|') +
              ')',
          )
        : ke(
            this,
            Jn,
            I(this, $e)
              .map((t) => String(t))
              .join(''),
          );
  }
  push(...t) {
    for (const n of t)
      if (n !== '') {
        if (typeof n != 'string' && !(n instanceof Ze && I(n, Ne) === this))
          throw new Error('invalid part: ' + n);
        I(this, $e).push(n);
      }
  }
  toJSON() {
    var n;
    const t =
      this.type === null
        ? I(this, $e)
            .slice()
            .map((r) => (typeof r == 'string' ? r : r.toJSON()))
        : [this.type, ...I(this, $e).map((r) => r.toJSON())];
    return (
      this.isStart() && !this.type && t.unshift([]),
      this.isEnd() &&
        (this === I(this, Le) ||
          (I(I(this, Le), Cn) && ((n = I(this, Ne)) == null ? void 0 : n.type) === '!')) &&
        t.push({}),
      t
    );
  }
  isStart() {
    var n;
    if (I(this, Le) === this) return !0;
    if (!((n = I(this, Ne)) != null && n.isStart())) return !1;
    if (I(this, _n) === 0) return !0;
    const t = I(this, Ne);
    for (let r = 0; r < I(this, _n); r++) {
      const s = I(t, $e)[r];
      if (!(s instanceof Ze && s.type === '!')) return !1;
    }
    return !0;
  }
  isEnd() {
    var n, r, s;
    if (I(this, Le) === this || ((n = I(this, Ne)) == null ? void 0 : n.type) === '!') return !0;
    if (!((r = I(this, Ne)) != null && r.isEnd())) return !1;
    if (!this.type) return (s = I(this, Ne)) == null ? void 0 : s.isEnd();
    const t = I(this, Ne) ? I(I(this, Ne), $e).length : 0;
    return I(this, _n) === t - 1;
  }
  copyIn(t) {
    typeof t == 'string' ? this.push(t) : this.push(t.clone(this));
  }
  clone(t) {
    const n = new Ze(this.type, t);
    for (const r of I(this, $e)) n.copyIn(r);
    return n;
  }
  static fromGlob(t, n = {}) {
    var s;
    const r = new Ze(null, void 0, n);
    return fn((s = Ze), Tn, uo).call(s, t, r, 0, n), r;
  }
  toMMPattern() {
    if (this !== I(this, Le)) return I(this, Le).toMMPattern();
    const t = this.toString(),
      [n, r, s, o] = this.toRegExpSource();
    if (
      !(
        s ||
        I(this, ze) ||
        (I(this, Bt).nocase && !I(this, Bt).nocaseMagicOnly && t.toUpperCase() !== t.toLowerCase())
      )
    )
      return r;
    const a = (I(this, Bt).nocase ? 'i' : '') + (o ? 'u' : '');
    return Object.assign(new RegExp(`^${n}$`, a), { _src: n, _glob: t });
  }
  get options() {
    return I(this, Bt);
  }
  toRegExpSource(t) {
    var l;
    const n = t ?? !!I(this, Bt).dot;
    if ((I(this, Le) === this && fn(this, or, Np).call(this), !this.type)) {
      const c = this.isStart() && this.isEnd(),
        u = I(this, $e)
          .map((p) => {
            var g;
            const [m, b, y, _] =
              typeof p == 'string'
                ? fn((g = Ze), Tn, Lp).call(g, p, I(this, ze), c)
                : p.toRegExpSource(t);
            return ke(this, ze, I(this, ze) || y), ke(this, nn, I(this, nn) || _), m;
          })
          .join('');
      let d = '';
      if (
        this.isStart() &&
        typeof I(this, $e)[0] == 'string' &&
        !(I(this, $e).length === 1 && RS.has(I(this, $e)[0]))
      ) {
        const m = $S,
          b =
            (n && m.has(u.charAt(0))) ||
            (u.startsWith('\\.') && m.has(u.charAt(2))) ||
            (u.startsWith('\\.\\.') && m.has(u.charAt(4))),
          y = !n && !t && m.has(u.charAt(0));
        d = b ? TS : y ? sa : '';
      }
      let h = '';
      return (
        this.isEnd() &&
          I(I(this, Le), Cn) &&
          ((l = I(this, Ne)) == null ? void 0 : l.type) === '!' &&
          (h = '(?:$|\\/)'),
        [d + u + h, Gr(u), ke(this, ze, !!I(this, ze)), I(this, nn)]
      );
    }
    const r = this.type === '*' || this.type === '+',
      s = this.type === '!' ? '(?:(?!(?:' : '(?:';
    let o = fn(this, or, Ya).call(this, n);
    if (this.isStart() && this.isEnd() && !o && this.type !== '!') {
      const c = this.toString();
      return (
        ke(this, $e, [c]),
        (this.type = null),
        ke(this, ze, void 0),
        [c, Gr(this.toString()), !1, !1]
      );
    }
    let i = !r || t || n ? '' : fn(this, or, Ya).call(this, !0);
    i === o && (i = ''), i && (o = `(?:${o})(?:${i})*?`);
    let a = '';
    if (this.type === '!' && I(this, $s)) a = (this.isStart() && !n ? sa : '') + ef;
    else {
      const c =
        this.type === '!'
          ? '))' + (this.isStart() && !n && !t ? sa : '') + Qu + ')'
          : this.type === '@'
            ? ')'
            : this.type === '?'
              ? ')?'
              : this.type === '+' && i
                ? ')'
                : this.type === '*' && i
                  ? ')?'
                  : `)${this.type}`;
      a = s + o + c;
    }
    return [a, Gr(o), ke(this, ze, !!I(this, ze)), I(this, nn)];
  }
};
(Le = new WeakMap()),
  (ze = new WeakMap()),
  (nn = new WeakMap()),
  ($e = new WeakMap()),
  (Ne = new WeakMap()),
  (_n = new WeakMap()),
  (Gn = new WeakMap()),
  (Cn = new WeakMap()),
  (Bt = new WeakMap()),
  (Jn = new WeakMap()),
  ($s = new WeakMap()),
  (or = new WeakSet()),
  (Np = function () {
    if (this !== I(this, Le)) throw new Error('should only call on root');
    if (I(this, Cn)) return this;
    this.toString(), ke(this, Cn, !0);
    let t;
    for (; (t = I(this, Gn).pop()); ) {
      if (t.type !== '!') continue;
      let n = t,
        r = I(n, Ne);
      for (; r; ) {
        for (let s = I(n, _n) + 1; !r.type && s < I(r, $e).length; s++)
          for (const o of I(t, $e)) {
            if (typeof o == 'string') throw new Error('string part in extglob AST??');
            o.copyIn(I(r, $e)[s]);
          }
        (n = r), (r = I(n, Ne));
      }
    }
    return this;
  }),
  (Tn = new WeakSet()),
  (uo = function (t, n, r, s) {
    var f, p;
    let o = !1,
      i = !1,
      a = -1,
      l = !1;
    if (n.type === null) {
      let m = r,
        b = '';
      for (; m < t.length; ) {
        const y = t.charAt(m++);
        if (o || y === '\\') {
          (o = !o), (b += y);
          continue;
        }
        if (i) {
          m === a + 1
            ? (y === '^' || y === '!') && (l = !0)
            : y === ']' && !(m === a + 2 && l) && (i = !1),
            (b += y);
          continue;
        } else if (y === '[') {
          (i = !0), (a = m), (l = !1), (b += y);
          continue;
        }
        if (!s.noext && Zu(y) && t.charAt(m) === '(') {
          n.push(b), (b = '');
          const _ = new Ze(y, n);
          (m = fn((f = Ze), Tn, uo).call(f, t, _, m, s)), n.push(_);
          continue;
        }
        b += y;
      }
      return n.push(b), m;
    }
    let c = r + 1,
      u = new Ze(null, n);
    const d = [];
    let h = '';
    for (; c < t.length; ) {
      const m = t.charAt(c++);
      if (o || m === '\\') {
        (o = !o), (h += m);
        continue;
      }
      if (i) {
        c === a + 1
          ? (m === '^' || m === '!') && (l = !0)
          : m === ']' && !(c === a + 2 && l) && (i = !1),
          (h += m);
        continue;
      } else if (m === '[') {
        (i = !0), (a = c), (l = !1), (h += m);
        continue;
      }
      if (Zu(m) && t.charAt(c) === '(') {
        u.push(h), (h = '');
        const b = new Ze(m, u);
        u.push(b), (c = fn((p = Ze), Tn, uo).call(p, t, b, c, s));
        continue;
      }
      if (m === '|') {
        u.push(h), (h = ''), d.push(u), (u = new Ze(null, n));
        continue;
      }
      if (m === ')')
        return (
          h === '' && I(n, $e).length === 0 && ke(n, $s, !0),
          u.push(h),
          (h = ''),
          n.push(...d, u),
          c
        );
      h += m;
    }
    return (n.type = null), ke(n, ze, void 0), ke(n, $e, [t.substring(r - 1)]), c;
  }),
  (Ya = function (t) {
    return I(this, $e)
      .map((n) => {
        if (typeof n == 'string') throw new Error('string type in extglob ast??');
        const [r, s, o, i] = n.toRegExpSource(t);
        return ke(this, nn, I(this, nn) || i), r;
      })
      .filter((n) => !(this.isStart() && this.isEnd()) || !!n)
      .join('|');
  }),
  (Lp = function (t, n, r = !1) {
    let s = !1,
      o = '',
      i = !1;
    for (let a = 0; a < t.length; a++) {
      const l = t.charAt(a);
      if (s) {
        (s = !1), (o += (PS.has(l) ? '\\' : '') + l);
        continue;
      }
      if (l === '\\') {
        a === t.length - 1 ? (o += '\\\\') : (s = !0);
        continue;
      }
      if (l === '[') {
        const [c, u, d, h] = xS(t, a);
        if (d) {
          (o += c), (i = i || u), (a += d - 1), (n = n || h);
          continue;
        }
      }
      if (l === '*') {
        r && t === '*' ? (o += ef) : (o += Qu), (n = !0);
        continue;
      }
      if (l === '?') {
        (o += Fl), (n = !0);
        continue;
      }
      o += kS(l);
    }
    return [o, Gr(t), !!n, i];
  }),
  We(Ze, Tn);
let Ko = Ze;
const OS = (e, { windowsPathsNoEscape: t = !1 } = {}) =>
  t ? e.replace(/[?*()[\]]/g, '[$&]') : e.replace(/[?*()[\]\\]/g, '\\$&');
var oa = {};
const rt = (e, t, n = {}) => (
    qo(t), !n.nocomment && t.charAt(0) === '#' ? !1 : new Ns(t, n).match(e)
  ),
  MS = /^\*+([^+@!?\*\[\(]*)$/,
  NS = (e) => (t) => !t.startsWith('.') && t.endsWith(e),
  LS = (e) => (t) => t.endsWith(e),
  IS = (e) => ((e = e.toLowerCase()), (t) => !t.startsWith('.') && t.toLowerCase().endsWith(e)),
  HS = (e) => ((e = e.toLowerCase()), (t) => t.toLowerCase().endsWith(e)),
  jS = /^\*+\.\*+$/,
  FS = (e) => !e.startsWith('.') && e.includes('.'),
  DS = (e) => e !== '.' && e !== '..' && e.includes('.'),
  BS = /^\.\*+$/,
  US = (e) => e !== '.' && e !== '..' && e.startsWith('.'),
  WS = /^\*+$/,
  zS = (e) => e.length !== 0 && !e.startsWith('.'),
  VS = (e) => e.length !== 0 && e !== '.' && e !== '..',
  qS = /^\?+([^+@!?\*\[\(]*)?$/,
  KS = ([e, t = '']) => {
    const n = Ip([e]);
    return t ? ((t = t.toLowerCase()), (r) => n(r) && r.toLowerCase().endsWith(t)) : n;
  },
  GS = ([e, t = '']) => {
    const n = Hp([e]);
    return t ? ((t = t.toLowerCase()), (r) => n(r) && r.toLowerCase().endsWith(t)) : n;
  },
  JS = ([e, t = '']) => {
    const n = Hp([e]);
    return t ? (r) => n(r) && r.endsWith(t) : n;
  },
  YS = ([e, t = '']) => {
    const n = Ip([e]);
    return t ? (r) => n(r) && r.endsWith(t) : n;
  },
  Ip = ([e]) => {
    const t = e.length;
    return (n) => n.length === t && !n.startsWith('.');
  },
  Hp = ([e]) => {
    const t = e.length;
    return (n) => n.length === t && n !== '.' && n !== '..';
  },
  jp =
    typeof process == 'object' && process
      ? (typeof oa == 'object' && oa && oa.__MINIMATCH_TESTING_PLATFORM__) || process.platform
      : 'posix',
  tf = { win32: { sep: '\\' }, posix: { sep: '/' } },
  XS = jp === 'win32' ? tf.win32.sep : tf.posix.sep;
rt.sep = XS;
const Ct = Symbol('globstar **');
rt.GLOBSTAR = Ct;
const ZS = '[^/]',
  QS = ZS + '*?',
  eE = '(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?',
  tE = '(?:(?!(?:\\/|^)\\.).)*?',
  nE =
    (e, t = {}) =>
    (n) =>
      rt(n, e, t);
rt.filter = nE;
const _t = (e, t = {}) => Object.assign({}, e, t),
  rE = (e) => {
    if (!e || typeof e != 'object' || !Object.keys(e).length) return rt;
    const t = rt;
    return Object.assign((r, s, o = {}) => t(r, s, _t(e, o)), {
      Minimatch: class extends t.Minimatch {
        constructor(s, o = {}) {
          super(s, _t(e, o));
        }
        static defaults(s) {
          return t.defaults(_t(e, s)).Minimatch;
        }
      },
      AST: class extends t.AST {
        constructor(s, o, i = {}) {
          super(s, o, _t(e, i));
        }
        static fromGlob(s, o = {}) {
          return t.AST.fromGlob(s, _t(e, o));
        }
      },
      unescape: (r, s = {}) => t.unescape(r, _t(e, s)),
      escape: (r, s = {}) => t.escape(r, _t(e, s)),
      filter: (r, s = {}) => t.filter(r, _t(e, s)),
      defaults: (r) => t.defaults(_t(e, r)),
      makeRe: (r, s = {}) => t.makeRe(r, _t(e, s)),
      braceExpand: (r, s = {}) => t.braceExpand(r, _t(e, s)),
      match: (r, s, o = {}) => t.match(r, s, _t(e, o)),
      sep: t.sep,
      GLOBSTAR: Ct,
    });
  };
rt.defaults = rE;
const Fp = (e, t = {}) => (qo(e), t.nobrace || !/\{(?:(?!\{).)*\}/.test(e) ? [e] : _S(e));
rt.braceExpand = Fp;
const sE = (e, t = {}) => new Ns(e, t).makeRe();
rt.makeRe = sE;
const oE = (e, t, n = {}) => {
  const r = new Ns(t, n);
  return (e = e.filter((s) => r.match(s))), r.options.nonull && !e.length && e.push(t), e;
};
rt.match = oE;
const nf = /[?*]|[+@!]\(.*?\)|\[|\]/,
  iE = (e) => e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
class Ns {
  constructor(t, n = {}) {
    xe(this, 'options');
    xe(this, 'set');
    xe(this, 'pattern');
    xe(this, 'windowsPathsNoEscape');
    xe(this, 'nonegate');
    xe(this, 'negate');
    xe(this, 'comment');
    xe(this, 'empty');
    xe(this, 'preserveMultipleSlashes');
    xe(this, 'partial');
    xe(this, 'globSet');
    xe(this, 'globParts');
    xe(this, 'nocase');
    xe(this, 'isWindows');
    xe(this, 'platform');
    xe(this, 'windowsNoMagicRoot');
    xe(this, 'regexp');
    qo(t),
      (n = n || {}),
      (this.options = n),
      (this.pattern = t),
      (this.platform = n.platform || jp),
      (this.isWindows = this.platform === 'win32'),
      (this.windowsPathsNoEscape = !!n.windowsPathsNoEscape || n.allowWindowsEscape === !1),
      this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, '/')),
      (this.preserveMultipleSlashes = !!n.preserveMultipleSlashes),
      (this.regexp = null),
      (this.negate = !1),
      (this.nonegate = !!n.nonegate),
      (this.comment = !1),
      (this.empty = !1),
      (this.partial = !!n.partial),
      (this.nocase = !!this.options.nocase),
      (this.windowsNoMagicRoot =
        n.windowsNoMagicRoot !== void 0 ? n.windowsNoMagicRoot : !!(this.isWindows && this.nocase)),
      (this.globSet = []),
      (this.globParts = []),
      (this.set = []),
      this.make();
  }
  hasMagic() {
    if (this.options.magicalBraces && this.set.length > 1) return !0;
    for (const t of this.set) for (const n of t) if (typeof n != 'string') return !0;
    return !1;
  }
  debug(...t) {}
  make() {
    const t = this.pattern,
      n = this.options;
    if (!n.nocomment && t.charAt(0) === '#') {
      this.comment = !0;
      return;
    }
    if (!t) {
      this.empty = !0;
      return;
    }
    this.parseNegate(),
      (this.globSet = [...new Set(this.braceExpand())]),
      n.debug && (this.debug = (...o) => console.error(...o)),
      this.debug(this.pattern, this.globSet);
    const r = this.globSet.map((o) => this.slashSplit(o));
    (this.globParts = this.preprocess(r)), this.debug(this.pattern, this.globParts);
    let s = this.globParts.map((o, i, a) => {
      if (this.isWindows && this.windowsNoMagicRoot) {
        const l = o[0] === '' && o[1] === '' && (o[2] === '?' || !nf.test(o[2])) && !nf.test(o[3]),
          c = /^[a-z]:/i.test(o[0]);
        if (l) return [...o.slice(0, 4), ...o.slice(4).map((u) => this.parse(u))];
        if (c) return [o[0], ...o.slice(1).map((u) => this.parse(u))];
      }
      return o.map((l) => this.parse(l));
    });
    if (
      (this.debug(this.pattern, s),
      (this.set = s.filter((o) => o.indexOf(!1) === -1)),
      this.isWindows)
    )
      for (let o = 0; o < this.set.length; o++) {
        const i = this.set[o];
        i[0] === '' &&
          i[1] === '' &&
          this.globParts[o][2] === '?' &&
          typeof i[3] == 'string' &&
          /^[a-z]:$/i.test(i[3]) &&
          (i[2] = '?');
      }
    this.debug(this.pattern, this.set);
  }
  preprocess(t) {
    if (this.options.noglobstar)
      for (let r = 0; r < t.length; r++)
        for (let s = 0; s < t[r].length; s++) t[r][s] === '**' && (t[r][s] = '*');
    const { optimizationLevel: n = 1 } = this.options;
    return (
      n >= 2
        ? ((t = this.firstPhasePreProcess(t)), (t = this.secondPhasePreProcess(t)))
        : n >= 1
          ? (t = this.levelOneOptimize(t))
          : (t = this.adjascentGlobstarOptimize(t)),
      t
    );
  }
  adjascentGlobstarOptimize(t) {
    return t.map((n) => {
      let r = -1;
      for (; (r = n.indexOf('**', r + 1)) !== -1; ) {
        let s = r;
        for (; n[s + 1] === '**'; ) s++;
        s !== r && n.splice(r, s - r);
      }
      return n;
    });
  }
  levelOneOptimize(t) {
    return t.map(
      (n) => (
        (n = n.reduce((r, s) => {
          const o = r[r.length - 1];
          return s === '**' && o === '**'
            ? r
            : s === '..' && o && o !== '..' && o !== '.' && o !== '**'
              ? (r.pop(), r)
              : (r.push(s), r);
        }, [])),
        n.length === 0 ? [''] : n
      ),
    );
  }
  levelTwoFileOptimize(t) {
    Array.isArray(t) || (t = this.slashSplit(t));
    let n = !1;
    do {
      if (((n = !1), !this.preserveMultipleSlashes)) {
        for (let s = 1; s < t.length - 1; s++) {
          const o = t[s];
          (s === 1 && o === '' && t[0] === '') ||
            ((o === '.' || o === '') && ((n = !0), t.splice(s, 1), s--));
        }
        t[0] === '.' && t.length === 2 && (t[1] === '.' || t[1] === '') && ((n = !0), t.pop());
      }
      let r = 0;
      for (; (r = t.indexOf('..', r + 1)) !== -1; ) {
        const s = t[r - 1];
        s && s !== '.' && s !== '..' && s !== '**' && ((n = !0), t.splice(r - 1, 2), (r -= 2));
      }
    } while (n);
    return t.length === 0 ? [''] : t;
  }
  firstPhasePreProcess(t) {
    let n = !1;
    do {
      n = !1;
      for (let r of t) {
        let s = -1;
        for (; (s = r.indexOf('**', s + 1)) !== -1; ) {
          let i = s;
          for (; r[i + 1] === '**'; ) i++;
          i > s && r.splice(s + 1, i - s);
          let a = r[s + 1];
          const l = r[s + 2],
            c = r[s + 3];
          if (a !== '..' || !l || l === '.' || l === '..' || !c || c === '.' || c === '..')
            continue;
          (n = !0), r.splice(s, 1);
          const u = r.slice(0);
          (u[s] = '**'), t.push(u), s--;
        }
        if (!this.preserveMultipleSlashes) {
          for (let i = 1; i < r.length - 1; i++) {
            const a = r[i];
            (i === 1 && a === '' && r[0] === '') ||
              ((a === '.' || a === '') && ((n = !0), r.splice(i, 1), i--));
          }
          r[0] === '.' && r.length === 2 && (r[1] === '.' || r[1] === '') && ((n = !0), r.pop());
        }
        let o = 0;
        for (; (o = r.indexOf('..', o + 1)) !== -1; ) {
          const i = r[o - 1];
          if (i && i !== '.' && i !== '..' && i !== '**') {
            n = !0;
            const l = o === 1 && r[o + 1] === '**' ? ['.'] : [];
            r.splice(o - 1, 2, ...l), r.length === 0 && r.push(''), (o -= 2);
          }
        }
      }
    } while (n);
    return t;
  }
  secondPhasePreProcess(t) {
    for (let n = 0; n < t.length - 1; n++)
      for (let r = n + 1; r < t.length; r++) {
        const s = this.partsMatch(t[n], t[r], !this.preserveMultipleSlashes);
        if (s) {
          (t[n] = []), (t[r] = s);
          break;
        }
      }
    return t.filter((n) => n.length);
  }
  partsMatch(t, n, r = !1) {
    let s = 0,
      o = 0,
      i = [],
      a = '';
    for (; s < t.length && o < n.length; )
      if (t[s] === n[o]) i.push(a === 'b' ? n[o] : t[s]), s++, o++;
      else if (r && t[s] === '**' && n[o] === t[s + 1]) i.push(t[s]), s++;
      else if (r && n[o] === '**' && t[s] === n[o + 1]) i.push(n[o]), o++;
      else if (
        t[s] === '*' &&
        n[o] &&
        (this.options.dot || !n[o].startsWith('.')) &&
        n[o] !== '**'
      ) {
        if (a === 'b') return !1;
        (a = 'a'), i.push(t[s]), s++, o++;
      } else if (
        n[o] === '*' &&
        t[s] &&
        (this.options.dot || !t[s].startsWith('.')) &&
        t[s] !== '**'
      ) {
        if (a === 'a') return !1;
        (a = 'b'), i.push(n[o]), s++, o++;
      } else return !1;
    return t.length === n.length && i;
  }
  parseNegate() {
    if (this.nonegate) return;
    const t = this.pattern;
    let n = !1,
      r = 0;
    for (let s = 0; s < t.length && t.charAt(s) === '!'; s++) (n = !n), r++;
    r && (this.pattern = t.slice(r)), (this.negate = n);
  }
  matchOne(t, n, r = !1) {
    const s = this.options;
    if (this.isWindows) {
      const m = typeof t[0] == 'string' && /^[a-z]:$/i.test(t[0]),
        b = !m && t[0] === '' && t[1] === '' && t[2] === '?' && /^[a-z]:$/i.test(t[3]),
        y = typeof n[0] == 'string' && /^[a-z]:$/i.test(n[0]),
        _ =
          !y &&
          n[0] === '' &&
          n[1] === '' &&
          n[2] === '?' &&
          typeof n[3] == 'string' &&
          /^[a-z]:$/i.test(n[3]),
        g = b ? 3 : m ? 0 : void 0,
        v = _ ? 3 : y ? 0 : void 0;
      if (typeof g == 'number' && typeof v == 'number') {
        const [x, $] = [t[g], n[v]];
        x.toLowerCase() === $.toLowerCase() &&
          ((n[v] = x), v > g ? (n = n.slice(v)) : g > v && (t = t.slice(g)));
      }
    }
    const { optimizationLevel: o = 1 } = this.options;
    o >= 2 && (t = this.levelTwoFileOptimize(t)),
      this.debug('matchOne', this, { file: t, pattern: n }),
      this.debug('matchOne', t.length, n.length);
    for (var i = 0, a = 0, l = t.length, c = n.length; i < l && a < c; i++, a++) {
      this.debug('matchOne loop');
      var u = n[a],
        d = t[i];
      if ((this.debug(n, u, d), u === !1)) return !1;
      if (u === Ct) {
        this.debug('GLOBSTAR', [n, u, d]);
        var h = i,
          f = a + 1;
        if (f === c) {
          for (this.debug('** at the end'); i < l; i++)
            if (t[i] === '.' || t[i] === '..' || (!s.dot && t[i].charAt(0) === '.')) return !1;
          return !0;
        }
        for (; h < l; ) {
          var p = t[h];
          if (
            (this.debug(
              `
globstar while`,
              t,
              h,
              n,
              f,
              p,
            ),
            this.matchOne(t.slice(h), n.slice(f), r))
          )
            return this.debug('globstar found match!', h, l, p), !0;
          if (p === '.' || p === '..' || (!s.dot && p.charAt(0) === '.')) {
            this.debug('dot detected!', t, h, n, f);
            break;
          }
          this.debug('globstar swallow a segment, and continue'), h++;
        }
        return !!(
          r &&
          (this.debug(
            `
>>> no match, partial?`,
            t,
            h,
            n,
            f,
          ),
          h === l)
        );
      }
      let m;
      if (
        (typeof u == 'string'
          ? ((m = d === u), this.debug('string match', u, d, m))
          : ((m = u.test(d)), this.debug('pattern match', u, d, m)),
        !m)
      )
        return !1;
    }
    if (i === l && a === c) return !0;
    if (i === l) return r;
    if (a === c) return i === l - 1 && t[i] === '';
    throw new Error('wtf?');
  }
  braceExpand() {
    return Fp(this.pattern, this.options);
  }
  parse(t) {
    qo(t);
    const n = this.options;
    if (t === '**') return Ct;
    if (t === '') return '';
    let r,
      s = null;
    (r = t.match(WS))
      ? (s = n.dot ? VS : zS)
      : (r = t.match(MS))
        ? (s = (n.nocase ? (n.dot ? HS : IS) : n.dot ? LS : NS)(r[1]))
        : (r = t.match(qS))
          ? (s = (n.nocase ? (n.dot ? GS : KS) : n.dot ? JS : YS)(r))
          : (r = t.match(jS))
            ? (s = n.dot ? DS : FS)
            : (r = t.match(BS)) && (s = US);
    const o = Ko.fromGlob(t, this.options).toMMPattern();
    return s && typeof o == 'object' && Reflect.defineProperty(o, 'test', { value: s }), o;
  }
  makeRe() {
    if (this.regexp || this.regexp === !1) return this.regexp;
    const t = this.set;
    if (!t.length) return (this.regexp = !1), this.regexp;
    const n = this.options,
      r = n.noglobstar ? QS : n.dot ? eE : tE,
      s = new Set(n.nocase ? ['i'] : []);
    let o = t
      .map((l) => {
        const c = l.map((u) => {
          if (u instanceof RegExp) for (const d of u.flags.split('')) s.add(d);
          return typeof u == 'string' ? iE(u) : u === Ct ? Ct : u._src;
        });
        return (
          c.forEach((u, d) => {
            const h = c[d + 1],
              f = c[d - 1];
            u !== Ct ||
              f === Ct ||
              (f === void 0
                ? h !== void 0 && h !== Ct
                  ? (c[d + 1] = '(?:\\/|' + r + '\\/)?' + h)
                  : (c[d] = r)
                : h === void 0
                  ? (c[d - 1] = f + '(?:\\/|' + r + ')?')
                  : h !== Ct && ((c[d - 1] = f + '(?:\\/|\\/' + r + '\\/)' + h), (c[d + 1] = Ct)));
          }),
          c.filter((u) => u !== Ct).join('/')
        );
      })
      .join('|');
    const [i, a] = t.length > 1 ? ['(?:', ')'] : ['', ''];
    (o = '^' + i + o + a + '$'), this.negate && (o = '^(?!' + o + ').+$');
    try {
      this.regexp = new RegExp(o, [...s].join(''));
    } catch {
      this.regexp = !1;
    }
    return this.regexp;
  }
  slashSplit(t) {
    return this.preserveMultipleSlashes
      ? t.split('/')
      : this.isWindows && /^\/\/[^\/]+/.test(t)
        ? ['', ...t.split(/\/+/)]
        : t.split(/\/+/);
  }
  match(t, n = this.partial) {
    if ((this.debug('match', t, this.pattern), this.comment)) return !1;
    if (this.empty) return t === '';
    if (t === '/' && n) return !0;
    const r = this.options;
    this.isWindows && (t = t.split('\\').join('/'));
    const s = this.slashSplit(t);
    this.debug(this.pattern, 'split', s);
    const o = this.set;
    this.debug(this.pattern, 'set', o);
    let i = s[s.length - 1];
    if (!i) for (let a = s.length - 2; !i && a >= 0; a--) i = s[a];
    for (let a = 0; a < o.length; a++) {
      const l = o[a];
      let c = s;
      if ((r.matchBase && l.length === 1 && (c = [i]), this.matchOne(c, l, n)))
        return r.flipNegate ? !0 : !this.negate;
    }
    return r.flipNegate ? !1 : this.negate;
  }
  static defaults(t) {
    return rt.defaults(t).Minimatch;
  }
}
rt.AST = Ko;
rt.Minimatch = Ns;
rt.escape = OS;
rt.unescape = Gr;
const aE = { dot: !0, flipNegate: !0 },
  rf = new Map();
function lE(e, t) {
  let n = rf.get(t);
  return n || ((n = new Ns(t, aE)), rf.set(t, n)), n.match(e);
}
function sf(e, t) {
  return (Array.isArray(t) ? t : [t])
    .flat()
    .filter((r) => lE(e, r))
    .flat();
}
const cE = new Set(['name', 'index']);
function Dp(e) {
  const t = Object.keys(e).filter((n) => !cE.has(n));
  return t.length === 1 && t[0] === 'ignores';
}
function Bp(e) {
  return (!e.files && !e.ignores) || Dp(e);
}
function ox(e, t, n) {
  const r = { filepath: e, globs: [], configs: [] },
    { config: s = {}, status: o } = fE(t, n).getConfigWithStatus(e);
  return (
    t.forEach((i) => {
      var c;
      const a = sf(e, i.files || []),
        l = sf(e, i.ignores || []);
      o === 'matched' &&
        (c = s.index) != null &&
        c.includes(i.index) &&
        a.length > 0 &&
        (r.configs.push(i.index), r.globs.push(...a)),
        r.globs.push(...l);
    }),
    (r.globs = [...new Set(r.globs)]),
    r
  );
}
const hn = { merge: 'replace', validate() {} },
  uE = {
    settings: hn,
    linterOptions: hn,
    language: hn,
    languageOptions: hn,
    processor: hn,
    plugins: hn,
    index: {
      ...hn,
      merge(e, t) {
        return [e].concat(t).flat();
      },
    },
    rules: hn,
  };
function fE(e, t) {
  return new vS(e, { basePath: t, schema: uE }).normalizeSync();
}
function dE(e) {
  switch (Array.isArray(e) ? e[0] : e) {
    case 0:
    case 'off':
      return 'off';
    case 1:
    case 'warn':
      return 'warn';
    case 2:
    case 'error':
      return 'error';
  }
}
function hE(e) {
  if (Array.isArray(e)) return e.slice(1);
}
const ix = Jt({ rule: '', filepath: '' }),
  eo = Jt({ plugin: '', search: '', state: 'using', status: 'active', fixable: null }),
  pE = hC(
    'eslint-config-viewer',
    { viewType: 'list', viewFileMatchType: 'configs', viewFilesTab: 'list', showSpecificOnly: !0 },
    { mergeDefaults: !0 },
  ),
  gE = sC(rC),
  mE = gE.smallerOrEqual('md'),
  ax = ae(() => mE.value || pE.value.viewType === 'grid'),
  yE = Te([]),
  vE = Te([]),
  Jr = '[ESLint Config Inspector]',
  Up = Te({ rules: {}, configs: [], meta: {} }),
  Xa = Te(!0),
  fo = Te(!1),
  Go = Te();
function wE(e) {
  return 'error' in e;
}
async function of(e) {
  fo.value = !0;
  const t = await zd('/api/payload.json', { baseURL: e });
  if (wE(t)) {
    (Go.value = t), (Xa.value = !1), (fo.value = !1);
    return;
  }
  return (
    (Go.value = void 0),
    (Up.value = t),
    (Xa.value = !1),
    (fo.value = !1),
    console.log(Jr, 'Config payload', t),
    t
  );
}
let af;
function bE(e) {
  af ||
    (af = of(e).then((t) => {
      if (t) {
        if (typeof t.meta.wsPort == 'number') {
          const n = new WebSocket(`ws://${location.hostname}:${t.meta.wsPort}`);
          n.addEventListener('message', async (r) => {
            console.log(Jr, 'WebSocket message', r.data),
              JSON.parse(r.data).type === 'config-change' && of(e);
          }),
            n.addEventListener('open', () => {
              console.log(Jr, 'WebSocket connected');
            }),
            n.addEventListener('close', () => {
              console.log(Jr, 'WebSocket closed');
            }),
            n.addEventListener('error', (r) => {
              console.error(Jr, 'WebSocket error', r);
            });
        }
        return t;
      }
    }));
}
const en = ae(() => Object.freeze(_E(Up.value)));
function lx(e) {
  return en.value.rules[e] || { name: e, invalid: !0 };
}
function cx(e) {
  var t;
  return ((t = en.value.rules[e]) == null ? void 0 : t.defaultOptions) ?? [];
}
function _E(e) {
  const t = new Map(),
    n = new Map();
  return (
    e.configs.forEach((r, s) => {
      var o, i;
      r.rules &&
        Object.entries(r.rules).forEach(([a, l]) => {
          const c = dE(l);
          if (c) {
            const u = hE(l);
            t.has(a) || t.set(a, []),
              t.get(a).push({ name: a, configIndex: s, level: c, options: u });
          }
        });
      for (const a of ((o = r.files) == null ? void 0 : o.flat()) || [])
        n.has(a) || n.set(a, []), n.get(a).push(r);
      for (const a of ((i = r.ignores) == null ? void 0 : i.flat()) || [])
        n.has(a) || n.set(a, []), n.get(a).push(r);
    }),
    (yE.value = e.configs.length >= 10 ? e.configs.map(() => !1) : e.configs.map(() => !0)),
    {
      ...e,
      configsIgnoreOnly: e.configs.filter((r) => Dp(r)),
      configsGeneral: e.configs.filter((r) => Bp(r)),
      ruleToState: t,
      globToConfigs: n,
      filesResolved: CE(e),
    }
  );
}
function CE(e) {
  if (!e.files) return;
  const t = e.configs.filter((c) => Bp(c)).map((c) => c.index),
    n = [],
    r = new Map(),
    s = new Map(),
    o = new Map(),
    i = new Map(),
    a = new Map();
  for (const c of e.files) {
    n.push(c.filepath);
    for (const f of c.globs)
      r.has(f) || r.set(f, new Set()),
        r.get(f).add(c.filepath),
        s.has(c.filepath) || s.set(c.filepath, new Set()),
        s.get(c.filepath).add(f);
    for (const f of c.configs)
      i.has(f) || i.set(f, new Set()),
        i.get(f).add(c.filepath),
        o.has(c.filepath) || o.set(c.filepath, new Set()),
        o.get(c.filepath).add(f);
    const u = c.configs.filter((f) => !t.includes(f)),
      d = u.join('-');
    a.has(d) ||
      a.set(d, { id: d, files: [], configs: u.map((f) => e.configs[f]), globs: new Set() });
    const h = a.get(d);
    h.files.push(c.filepath), c.globs.forEach((f) => h.globs.add(f));
  }
  const l = Array.from(a.values());
  return (
    (vE.value = l.map(() => !0)),
    {
      list: n,
      globToFiles: r,
      fileToGlobs: s,
      fileToConfigs: new Map(
        Array.from(o.entries()).map(([c, u]) => [
          c,
          Array.from(u)
            .sort()
            .map((d) => e.configs[d]),
        ]),
      ),
      configToFiles: i,
      groups: l,
    }
  );
}
const SE = { key: 0, flex: '~ gap-1 items-center', my1: '', 'text-sm': '' },
  EE = { 'font-mono': '', op35: '' },
  xE = { flex: '~ gap-1 items-center wrap', 'text-sm': '' },
  AE = { 'font-bold': '' },
  TE = { op75: '' },
  $E = { key: 0, flex: '~ gap-2 items-center', ml2: '', 'animate-pulse': '', 'text-green': '' },
  RE = { flex: '~ gap-3 items-center wrap', py4: '' },
  PE = vt({
    __name: 'NavBar',
    setup(e) {
      const t = vC(() => en.value.meta.lastUpdate),
        n = ae(() => Object.values(en.value.rules)),
        r = ae(() =>
          n.value.filter((i) => {
            var a;
            return (
              i.deprecated &&
              ((a = en.value.ruleToState.get(i.name)) == null
                ? void 0
                : a.some((l) => l.level !== 'off'))
            );
          }),
        ),
        s = nt();
      function o() {
        (eo.status = 'deprecated'),
          (eo.plugin = ''),
          (eo.state = 'using'),
          (eo.search = ''),
          s.currentRoute.value.path !== '/rules' && s.push('/rules');
      }
      return (i, a) => {
        const l = Qh,
          c = H_;
        return (
          we(),
          tt(
            Ie,
            null,
            [
              ge(l, { 'text-3xl': '', 'font-200': '' }),
              oe(en).meta.configPath
                ? (we(), tt('div', SE, [ue('span', EE, Sn(oe(en).meta.configPath), 1)]))
                : qn('', !0),
              ue('div', xE, [
                a[2] || (a[2] = ue('span', { op50: '' }, 'Composed with', -1)),
                ue('span', AE, Sn(oe(en).configs.length), 1),
                a[3] || (a[3] = ue('span', { op50: '' }, 'config items, updated', -1)),
                ue('span', TE, Sn(oe(t)), 1),
                oe(fo)
                  ? (we(),
                    tt(
                      'div',
                      $E,
                      a[1] ||
                        (a[1] = [
                          ue(
                            'div',
                            {
                              'i-svg-spinners-90-ring-with-bg': '',
                              'flex-none': '',
                              'text-sm': '',
                            },
                            null,
                            -1,
                          ),
                          gt(' Fetching updates... '),
                        ]),
                    ))
                  : qn('', !0),
              ]),
              ue('div', RE, [
                ge(
                  c,
                  {
                    to: '/configs',
                    px3: '',
                    py1: '',
                    'text-base': '',
                    'btn-action': '',
                    'active-class': 'btn-action-active',
                  },
                  {
                    default: Wt(
                      () =>
                        a[4] ||
                        (a[4] = [
                          ue('div', { 'i-ph-stack-duotone': '', 'flex-none': '' }, null, -1),
                          gt(' Configs '),
                        ]),
                    ),
                    _: 1,
                  },
                ),
                ge(
                  c,
                  {
                    to: '/rules',
                    px3: '',
                    py1: '',
                    'text-base': '',
                    'btn-action': '',
                    'active-class': 'btn-action-active',
                  },
                  {
                    default: Wt(
                      () =>
                        a[5] ||
                        (a[5] = [
                          ue('div', { 'i-ph-list-dashes-duotone': '', 'flex-none': '' }, null, -1),
                          gt(' Rules '),
                        ]),
                    ),
                    _: 1,
                  },
                ),
                oe(en).filesResolved
                  ? (we(),
                    it(
                      c,
                      {
                        key: 0,
                        to: '/files',
                        px3: '',
                        py1: '',
                        'text-base': '',
                        'btn-action': '',
                        'active-class': 'btn-action-active',
                      },
                      {
                        default: Wt(
                          () =>
                            a[6] ||
                            (a[6] = [
                              ue('div', { 'i-ph-files-duotone': '', 'flex-none': '' }, null, -1),
                              gt(' Files '),
                            ]),
                        ),
                        _: 1,
                      },
                    ))
                  : qn('', !0),
                ue('button', {
                  title: 'Toggle Dark Mode',
                  'i-ph-sun-dim-duotone': '',
                  'dark:i-ph-moon-stars-duotone': '',
                  ml1: '',
                  'text-xl': '',
                  op50: '',
                  'hover:op75': '',
                  onClick: a[0] || (a[0] = (u) => oe(bC)()),
                }),
                ge(c, {
                  href: 'https://github.com/eslint/config-inspector',
                  target: '_blank',
                  'i-carbon-logo-github': '',
                  'text-lg': '',
                  op50: '',
                  'hover:op75': '',
                }),
                r.value.length
                  ? (we(),
                    tt(
                      Ie,
                      { key: 1 },
                      [
                        a[8] ||
                          (a[8] = ue(
                            'div',
                            { border: 'l base', ml3: '', mr2: '', 'h-5': '', 'w-1px': '' },
                            null,
                            -1,
                          )),
                        ue(
                          'button',
                          {
                            to: '/configs',
                            border: '~ orange/20 rounded-full',
                            flex: '~ gap-2 items-center',
                            'bg-orange:5': '',
                            px3: '',
                            py1: '',
                            'text-sm': '',
                            'text-orange': '',
                            'hover:bg-orange:10': '',
                            onClick: o,
                          },
                          [
                            a[7] ||
                              (a[7] = ue(
                                'div',
                                { 'i-ph-warning-duotone': '', 'flex-none': '' },
                                null,
                                -1,
                              )),
                            gt(' Using ' + Sn(r.value.length) + ' deprecated rules ', 1),
                          ],
                        ),
                      ],
                      64,
                    ))
                  : qn('', !0),
              ]),
            ],
            64,
          )
        );
      };
    },
  }),
  kE = vt({
    props: {
      vnode: { type: Object, required: !0 },
      route: { type: Object, required: !0 },
      vnodeRef: Object,
      renderKey: String,
      trackRootNodes: Boolean,
    },
    setup(e) {
      const t = e.renderKey,
        n = e.route,
        r = {};
      for (const s in e.route)
        Object.defineProperty(r, s, {
          get: () => (t === e.renderKey ? e.route[s] : n[s]),
          enumerable: !0,
        });
      return Cr(ci, on(r)), () => mt(e.vnode, { ref: e.vnodeRef });
    },
  }),
  OE = vt({
    name: 'NuxtPage',
    inheritAttrs: !1,
    props: {
      name: { type: String },
      transition: { type: [Boolean, Object], default: void 0 },
      keepalive: { type: [Boolean, Object], default: void 0 },
      route: { type: Object },
      pageKey: { type: [Function, String], default: null },
    },
    setup(e, { attrs: t, slots: n, expose: r }) {
      const s = Pe(),
        o = Te(),
        i = lt(ci, null);
      let a;
      r({ pageRef: o });
      const l = lt(Kv, null);
      let c;
      const u = s.deferHydration();
      if (s.isHydrating) {
        const h = s.hooks.hookOnce('app:error', u);
        nt().beforeEach(h);
      }
      e.pageKey &&
        xt(
          () => e.pageKey,
          (h, f) => {
            h !== f && s.callHook('page:loading:start');
          },
        );
      let d = !1;
      return () =>
        mt(
          xh,
          { name: e.name, route: e.route, ...t },
          {
            default: (h) => {
              const f = NE(i, h.route, h.Component),
                p = i && i.matched.length === h.route.matched.length;
              if (!h.Component) {
                if (c && !p) return c;
                u();
                return;
              }
              if (c && l && !l.isCurrent(h.route)) return c;
              if (f && i && (!l || (l != null && l.isCurrent(i)))) return p ? c : null;
              const m = Fa(h, e.pageKey);
              !s.isHydrating &&
                !LE(i, h.route, h.Component) &&
                a === m &&
                (s.callHook('page:loading:end'), (d = !0)),
                (a = m);
              const b = !!(e.transition ?? h.route.meta.pageTransition ?? Aa),
                y =
                  b &&
                  ME(
                    [
                      e.transition,
                      h.route.meta.pageTransition,
                      Aa,
                      {
                        onAfterLeave: () => {
                          s.callHook('page:transition:finish', h.Component);
                        },
                      },
                    ].filter(Boolean),
                  ),
                _ = e.keepalive ?? h.route.meta.keepalive ?? Pv;
              return (
                (c = fb(
                  b && y,
                  ub(
                    _,
                    mt(
                      Cd,
                      {
                        suspensible: !0,
                        onPending: () => s.callHook('page:start', h.Component),
                        onResolve: () => {
                          Mn(() =>
                            s
                              .callHook('page:finish', h.Component)
                              .then(() => {
                                if (!d) return s.callHook('page:loading:end');
                                d = !1;
                              })
                              .finally(u),
                          );
                        },
                      },
                      {
                        default: () => {
                          const g = mt(kE, {
                            key: m || void 0,
                            vnode: n.default ? mt(Ie, void 0, n.default(h)) : h.Component,
                            route: h.route,
                            renderKey: m || void 0,
                            trackRootNodes: b,
                            vnodeRef: o,
                          });
                          return (
                            _ &&
                              (g.type.name =
                                h.Component.type.name ||
                                h.Component.type.__name ||
                                'RouteProvider'),
                            g
                          );
                        },
                      },
                    ),
                  ),
                ).default()),
                c
              );
            },
          },
        );
    },
  });
function ME(e) {
  const t = e.map((n) => ({ ...n, onAfterLeave: n.onAfterLeave ? Sl(n.onAfterLeave) : void 0 }));
  return Xd(...t);
}
function NE(e, t, n) {
  if (!e) return !1;
  const r = t.matched.findIndex((s) => {
    var o;
    return ((o = s.components) == null ? void 0 : o.default) === (n == null ? void 0 : n.type);
  });
  return !r || r === -1
    ? !1
    : t.matched.slice(0, r).some((s, o) => {
        var i, a, l;
        return (
          ((i = s.components) == null ? void 0 : i.default) !==
          ((l = (a = e.matched[o]) == null ? void 0 : a.components) == null ? void 0 : l.default)
        );
      }) ||
        (n && Fa({ route: t, Component: n }) !== Fa({ route: e, Component: n }));
}
function LE(e, t, n) {
  return e
    ? t.matched.findIndex((s) => {
        var o;
        return ((o = s.components) == null ? void 0 : o.default) === (n == null ? void 0 : n.type);
      }) <
        t.matched.length - 1
    : !1;
}
const IE = {
    key: 0,
    grid: '',
    'h-full': '',
    'w-full': '',
    'place-content-center': '',
    'whitespace-pre-line': '',
    p4: '',
  },
  HE = { 'text-lg': '', 'text-red': '', 'font-mono': '' },
  jE = {
    key: 1,
    flex: '~ col',
    'h-full': '',
    'w-full': '',
    'items-center': '',
    'justify-center': '',
    p4: '',
  },
  FE = { key: 2, px4: '', py6: '', 'lg:px14': '', 'lg:py10': '' },
  DE = vt({
    __name: 'app',
    setup(e) {
      return (
        bE(Fr().app.baseURL),
        Vw({ title: 'ESLint Config Inspector' }),
        (n, r) => {
          const s = Qh,
            o = PE,
            i = OE;
          return oe(Go)
            ? (we(),
              tt('div', IE, [
                ge(s, { mb6: '', 'text-xl': '', 'font-200': '' }),
                r[0] ||
                  (r[0] = ue(
                    'div',
                    { 'text-2xl': '', 'text-red5': '', 'font-bold': '' },
                    [
                      gt(' Failed to load '),
                      ue('span', { rounded: '', 'bg-red:5': '', px2: '' }, 'eslint.config.js'),
                      ue('br'),
                    ],
                    -1,
                  )),
                ue('div', HE, Sn(oe(Go).error), 1),
                r[1] ||
                  (r[1] = ue(
                    'div',
                    { mt6: '', op50: '' },
                    [
                      gt(' Note that '),
                      ue(
                        'a',
                        {
                          href: 'https://github.com/eslint/config-inspector',
                          target: '_blank',
                          'hover:underline': '',
                        },
                        'config inspector',
                      ),
                      gt(' only works with the '),
                      ue(
                        'a',
                        {
                          href: 'https://eslint.org/docs/latest/use/configure/configuration-files-new',
                          target: '_blank',
                          'font-bold': '',
                          'hover:underline': '',
                        },
                        'flat config format',
                      ),
                      gt('. '),
                    ],
                    -1,
                  )),
              ]))
            : oe(Xa)
              ? (we(),
                tt('div', jE, [
                  r[2] ||
                    (r[2] = ue(
                      'div',
                      {
                        flex: '~ gap-2 items-center',
                        'flex-auto': '',
                        'animate-pulse': '',
                        'text-xl': '',
                      },
                      [
                        ue('div', { 'i-svg-spinners-90-ring-with-bg': '' }),
                        gt(' Loading config... '),
                      ],
                      -1,
                    )),
                  ge(s, { mt6: '', 'text-xl': '', 'font-200': '', 'show-version': !1 }),
                ]))
              : (we(), tt('div', FE, [ge(o), ge(i)]));
        }
      );
    },
  }),
  BE = {
    __name: 'nuxt-error-page',
    props: { error: Object },
    setup(e) {
      const n = e.error;
      n.stack &&
        n.stack
          .split(
            `
`,
          )
          .splice(1)
          .map((d) => ({
            text: d.replace('webpack:/', '').replace('.vue', '.js').trim(),
            internal:
              (d.includes('node_modules') && !d.includes('.cache')) ||
              d.includes('internal') ||
              d.includes('new Promise'),
          }))
          .map((d) => `<span class="stack${d.internal ? ' internal' : ''}">${d.text}</span>`).join(`
`);
      const r = Number(n.statusCode || 500),
        s = r === 404,
        o = n.statusMessage ?? (s ? 'Page Not Found' : 'Internal Server Error'),
        i = n.message || n.toString(),
        a = void 0,
        u = s
          ? Zl(() => mr(() => import('./kw0LVqvE.js'), __vite__mapDeps([6, 7, 8]), import.meta.url))
          : Zl(() =>
              mr(() => import('./DBXtF2pt.js'), __vite__mapDeps([9, 7, 10]), import.meta.url),
            );
      return (d, h) => (
        we(),
        it(
          oe(u),
          mf(pl({ statusCode: oe(r), statusMessage: oe(o), description: oe(i), stack: oe(a) })),
          null,
          16,
        )
      );
    },
  },
  UE = { key: 0 },
  lf = {
    __name: 'nuxt-root',
    setup(e) {
      const t = () => null,
        n = Pe(),
        r = n.deferHydration();
      if (n.isHydrating) {
        const l = n.hooks.hookOnce('app:error', r);
        nt().beforeEach(l);
      }
      const s = !1;
      Cr(ci, Qd()), n.hooks.callHookWith((l) => l.map((c) => c()), 'vue:setup');
      const o = ui(),
        i = !1;
      Qf((l, c, u) => {
        if (
          (n.hooks
            .callHook('vue:error', l, c, u)
            .catch((d) => console.error('[nuxt] Error in `vue:error` hook', d)),
          Xv(l) && (l.fatal || l.unhandled))
        )
          return n.runWithContext(() => gr(l)), !1;
      });
      const a = !1;
      return (l, c) => (
        we(),
        it(
          Cd,
          { onResolve: oe(r) },
          {
            default: Wt(() => [
              oe(i)
                ? (we(), tt('div', UE))
                : oe(o)
                  ? (we(), it(oe(BE), { key: 1, error: oe(o) }, null, 8, ['error']))
                  : oe(a)
                    ? (we(), it(oe(t), { key: 2, context: oe(a) }, null, 8, ['context']))
                    : oe(s)
                      ? (we(), it(om(oe(s)), { key: 3 }))
                      : (we(), it(oe(DE), { key: 4 })),
            ]),
            _: 1,
          },
          8,
          ['onResolve'],
        )
      );
    },
  };
let cf;
{
  let e;
  (cf = async function () {
    var i, a;
    if (e) return e;
    const r = !!(
        ((i = window.__NUXT__) == null ? void 0 : i.serverRendered) ??
        ((a = document.getElementById('__NUXT_DATA__')) == null ? void 0 : a.dataset.ssr) === 'true'
      )
        ? xy(lf)
        : Ld(lf),
      s = Iv({ vueApp: r });
    async function o(l) {
      await s.callHook('app:error', l), (s.payload.error = s.payload.error || fi(l));
    }
    (r.config.errorHandler = o),
      s.hook('app:suspense:resolve', () => {
        r.config.errorHandler === o && (r.config.errorHandler = void 0);
      });
    try {
      await Fv(s, O_);
    } catch (l) {
      o(l);
    }
    try {
      await s.hooks.callHook('app:created', r),
        await s.hooks.callHook('app:beforeMount', r),
        r.mount(Mv),
        await s.hooks.callHook('app:mounted', r),
        await Mn();
    } catch (l) {
      o(l);
    }
    return r;
  }),
    (e = cf().catch((t) => {
      throw (console.error('Error while mounting app:', t), t);
    }));
}
export {
  Ou as $,
  eo as A,
  ix as B,
  Ke as C,
  en as D,
  ox as E,
  Ie as F,
  Dp as G,
  pE as H,
  tx as I,
  xt as J,
  Qd as K,
  jr as L,
  yE as M,
  Mn as N,
  YE as O,
  Cy as P,
  ZE as Q,
  JE as R,
  mt as S,
  tr as T,
  wo as U,
  vE as V,
  ml as W,
  XE as X,
  mE as Y,
  om as Z,
  H_ as _,
  ue as a,
  cx as a0,
  Jt as a1,
  nx as a2,
  QE as a3,
  lx as a4,
  mr as a5,
  ex as a6,
  ge as b,
  tt as c,
  gt as d,
  vt as e,
  GE as f,
  vd as g,
  nt as h,
  ae as i,
  VE as j,
  qn as k,
  it as l,
  KE as m,
  ir as n,
  we as o,
  qE as p,
  Yn as q,
  Te as r,
  oe as s,
  Sn as t,
  Vw as u,
  zE as v,
  Wt as w,
  hE as x,
  dE as y,
  ax as z,
};
