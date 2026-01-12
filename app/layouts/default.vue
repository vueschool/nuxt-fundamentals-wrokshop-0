<template>
  <div class="app-wrapper">
    <header class="header">
      <nav class="header__nav">
        <ULink to="/" class="font-semibold text-lg relative">
          <span class="text-primary">Nuxt</span>
          <span>Fundamentals</span>
          <span class="pl-1 top-5 font-thin">Workshop</span>
        </ULink>
        <div class="flex justify-center items-center">
          <UButton icon="lucide:menu" />
        </div>
      </nav>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>
