import { e as r, j as n, v as c, c as i, o as l, n as o, a as t, t as m } from './CTNqAv02.js';
const v = r({
  __name: 'SummarizeItem',
  props: { icon: {}, number: {}, color: {}, title: {} },
  setup(s) {
    const e = s;
    return (p, u) => {
      const a = n('tooltip');
      return c(
        (l(),
        i(
          'div',
          { flex: '~ gap-2', class: o(e.number ? e.color : 'op25') },
          [
            t('div', { class: o(e.icon) }, null, 2),
            t('span', { 'min-w-6': '', class: o(`text-${e.color}`) }, m(e.number || ''), 3),
          ],
          2,
        )),
        [[a, `${e.number} ${e.title}`]],
      );
    };
  },
});
export { v as _ };
