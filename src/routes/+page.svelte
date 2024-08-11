<script>
	//import perfil from '$lib/img/perfil.jpg';
	import SVG_esteban_kroh from '$lib/components/SVG_esteban_kroh.svelte';
</script>

<div class="min-h-[90vh] border-b p-2 pt-5 border-solid border-gris-claro mb-10 font-dancingscript">
	<enhanced:img
		src="/static/perfil.webp"
		alt="Esteban Kroh, programador web, foto de perfil."
		class="object-cover w-auto h-auto rounded-[50%] animation-opacity m-auto"
		sizes="max(300px, 300px)"
	/>
	<h1 class="text-amarillo" aria-label="Esteban Kroh">
		<SVG_esteban_kroh />
	</h1>
	<!-- 
    <img src="./perfil.webp" alt='Esteban Kroh, programador web, foto de perfil.'
              priority={true}
              width={200}
              height={200}
              className='object-cover w-auto h-auto rounded-[50%] animation-opacity m-auto'
            />
            
         
          <h1 className='text-amarillo' aria-label='Esteban Kroh'>
          
            
            <SVG_esteban_kroh/>


          </h1>

          <div className='m-auto w-full space-y-8'>

            <h2 >Programador web</h2>
            <h3>Contacto: </h3>
            <ul className='flex justify-center space-x-6'>
              {
              contactos.children.docs?.map((item:{Nombre:string, Url:string, Svg:string})=>{
              return<li className='w-10 sm:w-11 md:w-12' key={item.Nombre}>
                    <a className='stroke-none text-gris-claro p-4 m-auto' href={item.Url} target="_blank" rel="noopener noreferrer" aria-label={item.Nombre}>{<div dangerouslySetInnerHTML={{ __html: item.Svg }}/>}</a>
                </li> 
                })
              }
            </ul>
          </div>

        
    </div>
        <div>
            {Bloques(data.Contenido)}
        </div>
    </div>

    -->
</div>
