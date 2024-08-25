<script>
    import RichTextNormal from './richtextnormal.svelte';
    export let children;
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
    <div>
        <RichTextNormal>
            {children.Columna1}
        </RichTextNormal>
    </div>

    <div>
        <RichTextNormal>
            {children.Columna2}
        </RichTextNormal>
    </div>
</div>
