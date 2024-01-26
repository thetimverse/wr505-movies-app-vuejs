<script setup>
import { onMounted } from "vue";
import { RouterLink } from 'vue-router';

onMounted(() => {
	const token = localStorage.getItem("token");

	if (token) {
		localStorage.removeItem("token");
		localStorage.setItem("message", "You have been logged out");
		window.location.href = "/login";
	} else {
		return (window.location.href = "/login");
	}
});
</script>

<template></template>
