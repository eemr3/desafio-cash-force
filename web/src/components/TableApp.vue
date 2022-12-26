<template>
  <div data-testid="table-article">
    <div class="lg:w-11/12">
      <div class="w-full">
        <div class="lg:max-w-full m-0 overflow-x-auto">
          <table class="border-separate border-spacing-y-3">
            <thead class="uppercase bg-[#ffffff]  text-[#A1A8B8] text-left text-xs border">
              <tr>
                <th class="w-1/6 min-w-[160px] font-semibold py-3 lg:py-4 
                border-l border-transparent">
                  nota fiscal</th>
                <th class="w-1/6 min-w-[160px] font-semibold py-3 lg:py-4 
                border-l border-transparent">
                  sacado</th>
                <th class="w-1/6 min-w-[160px] font-semibold py-3 lg:py-4 
                border-l border-transparent">
                  cedente</th>
                <th class="w-1/6 min-w-[160px] font-semibold py-3 lg:py-4 
                border-l border-transparent">
                  emissão</th>
                <th class="w-1/6 min-w-[160px] font-semibold py-3 lg:py-4 
                border-l border-transparent">
                  valor</th>
                <th class="w-1/6 min-w-[160px] font-semibold py-3 lg:py-4 
                border-l border-transparent">
                  status</th>
              </tr>
            </thead>
            <tbody class="bg-[#fefefe]">
              <tr class="h-12" v-for=" user in users" :key="user.id">
                <td class="uppercase border-b border-t border-l rounded border-[#DFE2EB] px-2 text-[#A1A8B8] text-sm">{{
                    user.firstName
                }} {{
    user.lastName
}}</td>
                <td class="uppercase border-b border-t border-[#DFE2EB] px-2 text-[#A1A8B8] text-sm">{{ user.email }}
                </td>
                <td class="uppercase border-b border-t border-[#DFE2EB] px-2 text-[#A1A8B8] text-sm">{{ user.role }}
                </td>
                <td class="uppercase border-b border-t border-[#DFE2EB] px-2 text-[#A1A8B8] text-sm">{{ user.role }}
                </td>
                <td class="uppercase border-b border-t border-[#DFE2EB] px-2 text-[#00AD8C] text-sm">{{ user.role }}
                </td>
                <td class="uppercase border-b border-t border-[#DFE2EB] px-2 text-[#00AD8C] text-sm">{{ user.role }}
                </td>
                <td class="border-b border-t border-r rounded border-[#DFE2EB] px-2"><button class="w-[165px] h-[32px] rounded-[24px] border-[1px] text-xs
             border-[#CAD3FF] text-[#727D94]">Dados do
                    cedente</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableApp',
  data() {
    return {
      users: [
        { firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', role: 'User' },
        { firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', role: 'Admin' },
        { firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin' },
        { firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', role: 'User' },
        { firstName: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', role: 'User' }
      ]
    };
  }
};
</script>

<style>
.gfg {
  border-collapse: separate;
  border-spacing: 0 15px;

}
</style>