<template>
  <div :class="'flex flex-col-reverse lg:flex-row gap-x-16 ' + flexRowReverse">
    <div class="pt-2 xl:pt-20">
      <div
        class="flex flex-col lg:px-12 pt-5 pb-9 relative overflow-hidden max-w-[616px]"
      >
        <div
          :class="
            flexRowReverse === 'lg:flex-row-reverse'
              ? 'absolute top-0 right-0 w-12 h-12 border-r border-t border-gray-500 rounded-tr-2xl hidden lg:block'
              : 'absolute top-0 left-0 w-12 h-12 border-l border-t border-gray-500 rounded-tl-2xl hidden lg:block'
          "
        ></div>
        <div
          :class="
            flexRowReverse === 'lg:flex-row-reverse'
              ? 'absolute bottom-0 left-0 w-12 h-12 border-l border-b border-gray-500 rounded-bl-2xl hidden lg:block'
              : 'absolute bottom-0 right-0 w-12 h-12 border-r border-b border-gray-500 rounded-br-2xl hidden lg:block'
          "
        ></div>
        <div class="max-w-[520px]">
          <h2
            class="text-[32px] font-arboria-medium leading-tight xl:text-5xl xl:leading-tight -tracking-[0.03em] text-[#F9FAFB] mb-4 lg:mb-6"
          >
            {{ title }}
          </h2>
          <p
            class="text-lg xl:text-xl leading-7 -tracking-[0.01em] font-arboria-book text-[#E5E7EB] mb-5 lg:mb-16"
          >
            {{ text }}
          </p>
        </div>
        <div class="gradient-text">
          <a href="#">
            <span class="gradient-text font-arboria-medium text-lg">{{
              linkText
            }}</span>
            <img
              src="/images/ResponsiveLayoutPageImg/arrow.svg"
              class="inline-block ml-3"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>

    <div
      class="relative w-[328px] h-[220px] xs:w-11/12 xs:self-center sm:w-[600px] sm:h-[420px] xl:w-[800px] xl:h-[560px] self-end xl:self-start overflow-hidden rounded-3xl"
    >
      <img
        :src="`/images/ResponsiveLayoutPageImg/${image}`"
        :alt="alt"
        class="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    linkText: {
      type: String,
      default: '',
    },
    flexRowReverse: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>
.gradient-text {
  background: linear-gradient(to right, #6366f1, #ac54f1);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
