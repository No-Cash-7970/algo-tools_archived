<template>
  <v-app>
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
    <v-overlay v-model="store.overlay" persistent />
    <DonateDialog />
    <Snackbar />
    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
import Algo from "@/services/Algo";
import { useWallet } from "@txnlab/use-wallet-vue";
import { fetchAsync } from "./utils";

const store = useAppStore();
const router = useRouter();
const { activeAddress } = useWallet();

async function refresh() {
  try {
    store.loading++;
    if (activeAddress.value) {
      store.account = await Algo.algod
        .accountInformation(activeAddress.value)
        .do();
    } else {
      store.account = undefined;
      if (!["/", "/gov", "/vanity"].includes(router.currentRoute.value.path)) {
        router.push("/");
      }
    }
  } catch (err: any) {
    console.error(err);
    store.setSnackbar(err.message, "error");
  }
  store.loading--;
}

watch(
  () => store.refresh,
  () => refresh()
);

onBeforeMount(async () => {
  store.loading++;
  await store.getCache();
  store.refresh++;
  store.tinyman = await fetchAsync("https://asa-list.tinyman.org/assets.json");
  store.loading--;
});
</script>

<style>
a {
  color: #2196f3;
}

.no-uppercase {
  text-transform: unset !important;
}
.no-select {
  user-select: none;
}
</style>
