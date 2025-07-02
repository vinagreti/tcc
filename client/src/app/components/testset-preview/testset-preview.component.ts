import { testParser } from './../../../../../helpers/test-parser';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { TestSet } from '../../../../../models/test-flow.model';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

// Then register the languages you need
hljs.registerLanguage('javascript', javascript);

@Component({
  selector: 'app-testset-preview',
  standalone: true,
  imports: [],
  templateUrl: './testset-preview.component.html',
  styleUrl: './testset-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestsetPreviewComponent {
  testSet = input.required<TestSet>();

  testInstructions = computed(() => {
    const parsed = testParser(this.testSet());
    const hignlighted = hljs.highlight(parsed, {
      language: 'javascript',
    }).value;
    return hignlighted;
  });
}
