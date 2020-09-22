<script lang="ts">
    import {onMount} from 'svelte';
    import FindContainer from '../components/find/FindContainer.svelte';
    import hljs from 'highlight.js';

    hljs.configure({
        languages: ['javascript', 'css', 'html', 'xml ', 'typescript'],
    });

    onMount(() => {
        // hljs.initHighlightingOnLoad();
        document.querySelectorAll('pre code').forEach(block => {
            hljs.highlightBlock(block);
        });
    })
</script>

<div>
    <FindContainer>
        <div class="code_box">
            <pre>
                <code>
{`let me = {
  content: {
    name: '이성재',
    email: 'codingpalette@gamile.com',
    pages: [
      'https://codingpalette.com',
      'https://github.com/codingpalette'
    ]
  },

  Frontend: {
    html: true,
    css: true,
    javascript: [
      'Vanilla',
      'React',
      'Next',
      'Gatsby',
      'Svelte',
      'Sapper'
    ]
  },

  Backend: {
    node: [
      'Express',
      'Sequelize',
    ]
  },

  DevOps: {
    Cloud: {
      AWS: ['EC2'],
      ETC: ['Firebase']
    }
  },

  Database: {
    RDBMS: ['MySQL'],
    NoSQL: ['Firebase']
  },
}`}
                </code>
            </pre>
        </div>
    </FindContainer>
</div>

<style>
    .code_box{
        height: 100%;
    }
    .code_box pre{
        height: 100%;
    }
    .code_box code{
        height: 100%;
        padding: 1rem;
        box-sizing: border-box;
    }

</style>
