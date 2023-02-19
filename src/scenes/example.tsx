import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Circle, Square} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';
import {all} from '@motion-canvas/core/lib/flow';

export default makeScene2D(function* (view) {

  view.add(
      <Square
      x={-200}
      width={200}
      height={200}
      fill={"blue"}
      />

  );

});