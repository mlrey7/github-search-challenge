<template>
  <nav class="flex space-x-3">
    <button
      class="rounded border border-gray-200 w-10 h-10 text-gray-200 text-xs active:border-blue-500 active:text-blue-500 focus:outline-none focus:shadow-outline flex justify-center align-middle"
      @click.prevent="onNavLeft"
    >
      <svg
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-3 h-3 self-center fill-current"
      >
        <path
          d="M6.71001 9.88001L2.83001 6.00001L6.71001 2.12001C7.10001 1.73001 7.10001 1.10001 6.71001 0.710011C6.32001 0.320011 5.69001 0.320011 5.30001 0.710011L0.710011 5.30001C0.320011 5.69001 0.320011 6.32001 0.710011 6.71001L5.30001 11.3C5.69001 11.69 6.32001 11.69 6.71001 11.3C7.09001 10.91 7.10001 10.27 6.71001 9.88001Z"
        />
      </svg>
    </button>

    <div v-if="isDynamic" class="flex space-x-3">
      <button
        class="rounded border border-gray-200 w-10 h-10 text-gray-200 text-xs active:border-blue-500 active:text-blue-500 focus:outline-none focus:shadow-outline"
        :class="activeButtonIndex === -3 ? 'selected-page' : 'passive-page'"
        @click.prevent="onNavFixed(-3)"
        id="pagination-button-(-3)"
      >1</button>

      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 self-center fill-current text-gray-200"
        v-if="isShowFirstEllipsis"
      >
        <path
          d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
        />
      </svg>

      <button
        class="rounded border border-gray-200 w-10 h-10 text-gray-200 text-xs active:border-blue-500 active:text-blue-500 focus:outline-none focus:shadow-outline"
        :class="activeButtonIndex === -2 ? 'selected-page' : 'passive-page'"
        id="pagination-button-(-2)"
        @click.prevent="onNav(-2)"
        v-else
      >{{middleIndex - 2}}</button>

      <button
        class="rounded border border-gray-200 w-10 h-10 text-gray-200 text-xs active:border-blue-500 active:text-blue-500 focus:outline-none focus:shadow-outline"
        :class="activeButtonIndex === -1 ? 'selected-page' : 'passive-page'"
        id="pagination-button-(-1)"
        @click.prevent="onNav(-1)"
      >{{middleIndex - 1}}</button>

      <button
        class="rounded border border-gray-200 w-10 h-10 text-gray-200 text-xs active:border-blue-500 active:text-blue-500 focus:outline-none focus:shadow-outline"
        :class="activeButtonIndex === 0 ? 'selected-page' : 'passive-page'"
        id="pagination-button-(0)"
        @click.prevent="onNav(0)"
      >{{middleIndex}}</button>

      <button
        class="rounded border border-gray-200 w-10 h-10 text-gray-200 text-xs active:border-blue-500 active:text-blue-500 focus:outline-none focus:shadow-outline"
        :class="activeButtonIndex === 1 ? 'selected-page' : 'passive-page'"
        id="pagination-button-(1)"
        @click.prevent="onNav(1)"
      >{{middleIndex + 1}}</button>

      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 self-center fill-current text-gray-200"
        v-if="isShowLastEllipsis"
      >
        <path
          d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
        />
      </svg>

      <button
        class="rounded border border-gray-200 w-10 h-10 text-gray-200 text-xs active:border-blue-500 active:text-blue-500 focus:outline-none focus:shadow-outline"
        :class="activeButtonIndex === 2 ? 'selected-page' : 'passive-page'"
        id="pagination-button-(2)"
        @click.prevent="onNav(2)"
        v-else
      >{{middleIndex + 2}}</button>

      <button
        class="rounded border border-gray-200 w-10 h-10 text-gray-200 text-xs active:border-blue-500 active:text-blue-500 focus:outline-none focus:shadow-outline"
        :class="activeButtonIndex === 3 ? 'selected-page' : 'passive-page'"
        id="pagination-button-(3)"
        @click.prevent="onNavFixed(3)"
      >{{pageCount}}</button>
    </div>

    <div class="flex space-x-3" v-else>
      <button
        v-for="i in pageCount"
        :key="i"
        class="rounded border border-gray-200 w-10 h-10 text-gray-200 text-xs active:border-blue-500 active:text-blue-500 focus:outline-none focus:shadow-outline"
        :class="activeButtonIndex === i ? 'selected-page' : 'passive-page'"
        :id="`pagination-button-(${i})`"
        @click.prevent="onNavStatic(i)"
      >{{i}}</button>
    </div>

    <button
      class="rounded border border-gray-200 w-10 h-10 text-gray-200 text-xs active:border-blue-500 active:text-blue-500 focus:outline-none focus:shadow-outline flex justify-center align-middle"
      @click.prevent="onNavRight"
    >
      <svg
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-3 h-3 self-center fill-current"
      >
        <path
          d="M1.29001 2.11999L5.17 5.99999L1.29 9.87999C0.900005 10.27 0.900004 10.9 1.29 11.29C1.68 11.68 2.31 11.68 2.7 11.29L7.29 6.69999C7.68 6.30999 7.68 5.67999 7.29 5.28999L2.70001 0.69999C2.31001 0.309989 1.68001 0.309989 1.29001 0.69999C0.910005 1.08999 0.900005 1.72999 1.29001 2.11999Z"
        />
      </svg>
    </button>
  </nav>
</template>

<script>
export default {
  name: "PaginationControl",
  props: {
    pageCount: {
      type: Number,
      required: true
    }
  },
  computed: {
    isShowFirstEllipsis() {
      return this.currentIndex - 1 > 3;
    },
    isShowLastEllipsis() {
      return this.pageCount - this.currentIndex > 3;
    },
    isDynamic() {
      return this.pageCount > 7;
    }
  },
  data() {
    return {
      currentIndex: 1,
      middleIndex: 4,
      activeButtonIndex: null
    };
  },
  watch: {
    currentIndex: function(currentIndex) {
      this.$emit("page-change", currentIndex);

      if (this.isDynamic) {
        if (this.isShowFirstEllipsis && this.isShowLastEllipsis) {
          this.middleIndex = currentIndex;
          this.activeButtonIndex = 0;
        } else if (currentIndex <= 4) {
          this.middleIndex = 4;
          this.activeButtonIndex = currentIndex - this.middleIndex;
        } else if (currentIndex >= this.pageCount - 3) {
          this.middleIndex = this.pageCount - 3;
          this.activeButtonIndex = currentIndex - this.middleIndex;
        }

        document
          .getElementById(`pagination-button-(${this.activeButtonIndex})`)
          .focus();
      } else {
        this.activeButtonIndex = currentIndex;
      }
    }
  },
  mounted() {
    if (this.isDynamic) {
      this.activeButtonIndex = -3;
    } else {
      this.activeButtonIndex = 1;
    }
  },
  methods: {
    onNavStatic(index) {
      this.currentIndex = index;
      this.activeButtonIndex = index;
    },
    onNavFixed(index) {
      this.currentIndex = index === -3 ? 1 : this.pageCount;
    },
    onNav(index) {
      this.currentIndex = this.middleIndex + index;
    },
    onNavLeft() {
      if (this.currentIndex === 1) return;
      this.currentIndex = this.currentIndex - 1;
    },
    onNavRight() {
      if (this.currentIndex === this.pageCount) return;
      this.currentIndex = this.currentIndex + 1;
    }
  }
};
</script>

<style scoped>
.selected-page {
  @apply rounded text-white bg-blue-500;
}
.passive-page {
  @apply rounded border border-gray-200 text-gray-200;
}
</style>
