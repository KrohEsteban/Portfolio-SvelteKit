<script lang="ts">
	import ProfileImage from '$lib/components/home/ProfileImage.svelte';
	import DeveloperIntro from '$lib/components/home/DeveloperIntro.svelte';
	import ContactInfo from '$lib/components/home/ContactInfo.svelte';
	import CallToAction from '$lib/components/home/CallToAction.svelte';
	import Quotation from '$lib/components/home/Quotation.svelte';
	import InfoBox from '$lib/components/home/InfoBox.svelte';
</script>

<div class="min-h-[85vh] pt-5 mb-10 font-DancingScript w-full">
	<ProfileImage />
	<DeveloperIntro />
	<ContactInfo />
</div>

<div class="border-b m-2 border-solid border-gris-claro" />
<CallToAction />
<Quotation />
<InfoBox />
