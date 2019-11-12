# vue-tippy-experiment
Just an experiment with wrapping tippy in Vue.
This was just a proof of concept, use at your disposal.


## Usage

```
<tooltip top>
  <button>Tooltip On Me!</button>
  <template #content>
    {{ tooltipContent }}
  </template>
</tooltip>
```
Simply wrap content that should be in tooltip.
Content can be sent as a template (only 1st level text supported for now), or as prop.


## Options

- `content` [string] - content for the tooltip, dynamic changes supported. If slot `#content` is also sent, it has priority (also dynamic).
- `top|bottom|left|right` [empty] - tooltip location, `top` by default.
- `display` [boolean] - manually toggle display of tooltip.
- `event` [string] - on what events shold tooltip trigger, divided by space. Example, and default, is `mouseenter focus`.
- `config` [object] - for all other settings tippy supports.


## License

MIT. 
