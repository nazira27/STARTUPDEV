<template>
	<div>
    <Header></Header>
    <Banner id="banner"></Banner>
    <Features id="features"></Features>
    <About id="about"></About>
    <Pricing id="pricing"></Pricing>
    <Contacts id="contact"></Contacts>
    <Footer></Footer>
</div>
</template>
<script>
import Header from "@/components/Landing/Header"
import Footer from "@/components/Landing/Footer"
import Banner from "@/components/Landing/Banner"
import Features from "@/components/Landing/Features"
import Pricing from "@/components/Landing/Pricing"
import Contacts from "@/components/Landing/Contacts"
import About from "@/components/Landing/About"
export default {
    name: "Landing",
    components: {
        Header, Footer, Pricing, Features , Banner, Contacts, About
    },
}
</script>
<style scoped>
</style>