<template>
  <section class="section-article">
    <nav>
      <ul>
        <li>
          <a href="/" title="Журнал"><span>Журнал</span></a>
        </li>
        <li>
          <a href="/" title="Статьи"><span>Статьи</span></a>
        </li>
        <li>
          <a href="/articles/benua-ideolog-novoi-xudozestvennoi-epoxi"
            ><span>Бенуа — идеолог новой художественной эпохи</span></a
          >
        </li>
      </ul>
    </nav>
    <article>
      <ArticleImage
        :image-src="articleData.images.benuaImg1.src"
        :image-alt="articleData.images.benuaImg1.alt"
      />

      <h1>{{ articleData.title }}</h1>

      <hr />

      <blockquote>
        {{ articleData.blockquote.p }}
        <br />
        <cite>{{ articleData.blockquote.cite }}</cite>
      </blockquote>

      <hr />

      <p>{{ articleData.paragraphs[0] }}</p>
      <p>{{ articleData.paragraphs[1] }}</p>

      <ArticleImage
        :image-src="articleData.images.benuaImg2.src"
        :image-alt="articleData.images.benuaImg2.alt"
        :figcaption="articleData.images.benuaImg2.figcaption"
      />

      <p>{{ articleData.paragraphs[2] }}</p>
      <p v-html="articleData.paragraphs[3]"></p>

      <ArticleImage
        :image-src="articleData.images.benuaImg3.src"
        :image-alt="articleData.images.benuaImg3.alt"
        :figcaption="articleData.images.benuaImg3.figcaption"
      />

      <p>{{ articleData.paragraphs[4] }}</p>
      <p>{{ articleData.paragraphs[5] }}</p>

      <ArticleImage
        :image-src="articleData.images.benuaImg4.src"
        :image-alt="articleData.images.benuaImg4.alt"
        :figcaption="articleData.images.benuaImg4.figcaption"
      />

      <p v-html="articleData.paragraphs[6]"></p>
      <p>{{ articleData.paragraphs[7] }}</p>

      <ArticleImage
        :image-src="articleData.images.benuaImg5.src"
        :image-alt="articleData.images.benuaImg5.alt"
        :figcaption="articleData.images.benuaImg5.figcaption"
      />

      <p>{{ articleData.paragraphs[8] }}</p>
      <p>{{ articleData.paragraphs[9] }}</p>

      <ArticleImage
        :image-src="articleData.images.benuaImg6.src"
        :image-alt="articleData.images.benuaImg6.alt"
        :figcaption="articleData.images.benuaImg6.figcaption"
      />

      <p>{{ articleData.paragraphs[10] }}</p>
      <p>{{ articleData.paragraphs[11] }}</p>
      <p>{{ articleData.paragraphs[12] }}</p>

      <ArticleImage
        :image-src="articleData.images.benuaImg7.src"
        :image-alt="articleData.images.benuaImg7.alt"
        :figcaption="articleData.images.benuaImg7.figcaption"
      />

      <p>{{ articleData.paragraphs[13] }}</p>
      <p>{{ articleData.paragraphs[14] }}</p>
      <p>{{ articleData.paragraphs[15] }}</p>

      <ArticleImage
        :image-src="articleData.images.benuaImg8.src"
        :image-alt="articleData.images.benuaImg8.alt"
        :figcaption="articleData.images.benuaImg8.figcaption"
      />

      <p>{{ articleData.paragraphs[16] }}</p>
      <p v-html="articleData.paragraphs[17]"></p>
    </article>
    <footer>
      <span
        >Автор:
        <a href="/articles/users/2147" itemprop="url" class=""
          >Журнал Тапиго</a
        ></span
      >
    </footer>
  </section>
</template>

<script>
import ArticleImage from '~/components/article/ArticleImage.vue'
import articleData from '~/assets/data/benuaArticleData.js'

export default {
  components: {
    ArticleImage,
  },
  data() {
    return {
      articleData,
    }
  },
}
</script>

<style scoped>
.section-article {
  @apply px-4 s:px-6 lg:px-0 mx-auto mt-[4.5rem] pb-24 flex flex-col max-w-[950px] min-w-80;
}
.section-article nav {
  @apply mb-[6px] flex items-center;
}
.section-article nav ul {
  @apply flex flex-wrap items-center justify-start text-sm;
}
.section-article nav ul li {
  @apply text-[#6b7280;];
}
.section-article nav ul li:hover {
  @apply text-black;
}
.section-article nav ul li::after {
  @apply px-[0.313rem] text-[#ccc];
  content: "/";
}
.section-article nav ul li:last-child::after {
  @apply p-0;
  content: "";
}
.section-article nav ul li:last-child {
  @apply text-black;
}

.section-article article {
  @apply w-full mt-5;
}
.section-article h1 {
  @apply text-xl s:text-3xl sm:text-4xl font-roboto-black font-black text-center;
}

.section-article hr {
  @apply w-[6px] h-[6px] rounded-full s:rounded-none my-8 mx-auto s:w-[5%] s:h-px bg-[#ddd];
}

.section-article blockquote {
  @apply text-base w-[95%] font-arial my-0 mx-auto sm:w-4/5 italic font-bold sm:text-xl sm:leading-[30px] text-center;
}

.section-article blockquote cite {
  @apply text-sm font-normal block mt-[0.625rem];
}

.section-article ::v-deep figure {
  @apply w-full mb-[1.875rem] text-center mx-auto;
}
.section-article ::v-deep figure:nth-of-type(2n) {
  @apply w-full sm:w-[600px];
}
.section-article ::v-deep figure img {
  @apply object-cover mb-[0.625rem] mx-auto rounded-lg;
}
.section-article ::v-deep figure figcaption {
  @apply font-arial font-normal text-[#bbb] text-xs italic;
}
.section-article p {
  @apply leading-6 w-full font-normal mx-auto mb-[1.875rem] sm:leading-[1.6rem] sm:w-[88%];
}

.section-article p ::v-deep a, footer span a {
  @apply text-[#0089ff] transition-colors duration-300 ease-in-out;
  border-bottom: 1px solid rgba(0, 137, 255, 0.3);
}
.section-article p ::v-deep a:hover, footer span a:hover {
  @apply text-black;
  border-bottom: 1px solid #000;
}
.section-article footer {
  @apply text-center;
}
.section-article footer span {
  @apply text-xs font-arial font-normal italic text-[#999];
}
</style>
