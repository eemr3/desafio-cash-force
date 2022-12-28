<template>
  <div data-testid="table-article">
    <div class="lg:w-11/12">
      <div class="w-full">
        <div class="lg:max-w-full m-0 overflow-x-auto">
          <table class="border-separate border-spacing-y-3">
            <thead class="uppercase bg-[#ffffff] text-[#A1A8B8] text-left text-xs border">
              <tr>
                <th class="w-1/6 min-w-[160px] font-[700] py-3 lg:py-4 border-l border-transparent">
                  nota fiscal
                </th>
                <th class="w-1/6 min-w-[160px] font-[700] py-3 lg:py-4 border-l border-transparent">
                  sacado
                </th>
                <th class="w-1/6 min-w-[160px] font-[700] py-3 lg:py-4 border-l border-transparent">
                  cedente
                </th>
                <th class="w-1/6 min-w-[160px] font-[700] py-3 lg:py-4 border-l border-transparent">
                  emissão
                </th>
                <th class="w-1/6 min-w-[160px] font-[700] py-3 lg:py-4 border-l border-transparent">
                  valor
                </th>
                <th class="w-1/6 min-w-[160px] font-[700] py-3 lg:py-4 border-l border-transparent">
                  status
                </th>
              </tr>
            </thead>
            <tbody class="bg-[#fefefe]">
              <tr class="h-12" v-for="order in orders" :key="order.id">
                <td
                  class="uppercase border-b border-t border-l rounded border-[#DFE2EB] px-2 font-[500] text-[#A1A8B8] text-sm">
                  {{ order.nNf }}
                </td>
                <td class="uppercase border-b border-t border-[#DFE2EB] px-2 text-[#A1A8B8] font-[500] text-sm">
                  {{ order.buyers.name }}
                </td>
                <td class="uppercase border-b border-t border-[#DFE2EB] px-2 text-[#A1A8B8] font-[500] text-sm">
                  {{ order.providers.name }}
                </td>
                <td class="uppercase border-b border-t border-[#DFE2EB] px-2 text-[#A1A8B8] font-[500] text-sm">
                  {{ order.emissionDate }}
                </td>
                <td class="uppercase border-b border-t border-[#DFE2EB] px-2 text-[#00AD8C] text-sm font-[700]">
                  {{ order.value }}
                </td>
                <td class="uppercase border-b border-t border-[#DFE2EB] px-2 text-[#00AD8C] font-[500] text-sm">
                  {{ order.orderStatusProvider }}
                </td>
                <td class="border-b border-t border-r rounded border-[#DFE2EB] px-2">
                  <button type="button" @click="showModal(order.providers.id)"
                    class="w-[165px] h-[32px] rounded-[24px] border-[1px] text-xs border-[#CAD3FF] font-[500] text-[#727D94]">
                    Dados do cedente
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <modal :show="isModalVisible" @close="closeModal" :provider="modelData" />
    </div>
  </div>
</template>

<script>
import { getOrders } from '../infra/requests';
import Modal from '../components/ModalApp.vue'

const components = {
  Modal,
};

export default {
  name: 'TableApp',
  data() {
    return {
      orders: [],
      isModalVisible: false,
      modelData: null
    };
  },
  components,
  async mounted() {
    const result = await getOrders();

    this.orders = result;
  },
  methods: {
    showModal(provider) {
      this.isModalVisible = true;

      this.modelData = provider
    },
    closeModal() {
      this.isModalVisible = false;
    },

  },
};
</script>

<style>
.gfg {
  border-collapse: separate;
  border-spacing: 0 15px;
}
</style>
