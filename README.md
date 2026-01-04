# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Multi-step form solution](#frontend-mentor---multi-step-form-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://vue-challange-stepper.netlify.app/)
- Live Site URL: [Add live site URL here](https://github.com/jojoboomer/vue-challange-multi-step-form)

## My process

### Built with

- Vue 3 Composition API
- TypeScript
- Pinia (state management)
- CSS custom properties
- Mobile-first workflow
- Atomic design methodology (atoms, molecules, organisms)
- Vite (build tool)
- Pinia Plugin Persistedstate (for localStorage persistence)

### What I learned

This project was part of my roadmap to learn Vue, as I started studying it last month. This time I wanted to use some features I hadn't tried before. For example:

- I used only CSS. I'm accustomed to developing with TailwindCSS, but sometimes it feels good to keep things simpler and practice pure CSS.

- Implementing a clean way to handle step navigation with validation. I created a system where each step component exposes a validation method that the parent form component calls before proceeding:

```js
const activeStepRef = ref<StepExpose | null>(null)

const handleGoNext = async () => {
  let canContinue = true

  if (activeStepRef.value?.onSubmit) {
    canContinue = await activeStepRef.value.onSubmit()
  }

  if (canContinue) {
    store.next()
  }
}
```
```html
  <component :is="currentStepComponent" ref="activeStepRef" />
```

- Vue's <Transition> component is an interesting way to create simple animations. One of the ways I used it was for transitioning between steps:

```html
<Transition name="fade" mode="out-in">
  <component v-if="!formStore.submited" :is="currentStepComponent" ref="activeStepRef" />
</Transition>
```

```css
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
```


### Continued development

While the current implementation meets all the requirements, there are several areas I'd like to enhance:

- Micro-interactions and animations: Adding subtle animations between steps and interactive elements to create a more premium experience (as discussed in previous conversations).
- Accessibility improvements: Enhancing keyboard navigation support and adding more comprehensive ARIA attributes.
- Testing: Implementing unit and end-to-end tests for form validation and state management.
- Dynamic pricing calculations: Making the pricing logic more flexible to accommodate different currencies and discount structures.
- Enhanced responsive behavior: Further optimizing the mobile experience with touch-friendly controls and gestures.

### Useful resources

- [Vue 3 Documentation](https://vuejs.org/guide/introduction.html?spm=a2ty_o01.29997173.0.0.6a1b5171tnZCuP) 
- [Pinia Documentation](https://pinia.vuejs.org/?spm=a2ty_o01.29997173.0.0.6a1b5171tnZCuP) 

## Author

- Website - [JoeBoomer](https://www.your-site.com)
- Frontend Mentor - [@jojoboomer](https://www.frontendmentor.io/profile/jojoboomer)
- Linkedin - [@joellabrada](https://www.linkedin.com/in/joellabrada/)
