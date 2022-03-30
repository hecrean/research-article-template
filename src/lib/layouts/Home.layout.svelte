<script lang='ts'>
    let isPadded: boolean = true;

</script>


<div class:container={isPadded}>
    <aside>
        <nav 
            class:folderStructure={true}
        > Nav thing here </nav>
    </aside>
    <slot name="header">No header was provided</slot>
    <main>
        <article>
            <slot name="article"><!-- optional fallback --></slot>
        </article>
        <footer>
            <slot name="footer">No header was provided</slot>
        </footer>
    </main>
   
</div>


<style lang="scss">
  

    .container {
        padding: 0rem 4rem 0rem 4rem;
    }

    .folderStructure {
        font-size: 20px;
    }
 
    
  </style>