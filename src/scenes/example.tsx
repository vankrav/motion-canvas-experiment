import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Circle, Rect, Text, Node} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';
import {all, waitUntil} from '@motion-canvas/core/lib/flow';

export default makeScene2D(function* (view) {

const square = createRef<Rect>();
const text = createRef<Text>();
const group = createRef<Node>();

  view.add(
      <Node
      ref={group}
      >
      <Rect
      ref ={square}
      x={-200}
      y={-200}
      width={200}
      height={200}
      fill={"blue"}

      />

      <Text
          ref={text}
          text={"Hello world"}
          opacity={0}
      />
      </Node>
  );

yield *
    all (
        square().position.x(200, 1.5).to(0, 1),
        square().fill("green", 2),
        square().rotation(360, 2)
    );
yield *
        square().position.y(300, 1),
        square().width(600, 1)
yield *
    all (
        square().width(600, 1),
        square().height(100, 1),
        square().fill("white", 1),
        square().radius(22, 1)
    );
yield *
    square().position.y(0, 1)
yield *
    text().opacity(100, 1)
yield *
    waitUntil("event")
yield *
    group().rotation(360, 1)
});