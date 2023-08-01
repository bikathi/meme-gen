import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import PickAnImage from "../pages/StepOne.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: Home,
			name: "index",
		},
		{
			path: "/pick-an-image",
			component: PickAnImage,
			name: "step-one",
		},
	],
});

export default router;
