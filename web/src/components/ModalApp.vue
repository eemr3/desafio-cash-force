<template>
  <Transition name="modal">
    <div v-if="show"
      class="fixed z-40 top-0 left-0 w-full h-full bg-opacity-50 bg-gray-900 transition ease-in duration-300">
      <div class="flex justify-center items-center h-screen">
        <div class="w-[900px]  py-5 px-[30px] bg-white rounded-[2px]">
          <div class="text-[#42b983] mb-4 bg-[#FBFDFE] border-b h-10 font-bold">
            <slot name="header">Dados do cedente</slot>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div class="w-60 flex flex-col">
              <h3 class="text-gray-700">Nome:</h3>
              <p class="text-gray-500">{{ provideData?.name ? provideData?.name : `Não informado` }}</p>
            </div>
            <div class="w-60 flex flex-col">
              <h4 class="text-gray-700">Nome comercial:</h4>
              <p class="text-gray-500">{{ provideData?.tradingName ? provideData?.tradingName : `Não informado` }}</p>
            </div>
            <div class="w-60 flex flex-col">
              <h4 class="text-gray-700">Imposto sobre dinheiro:</h4>
              <p class="text-gray-500">{{ provideData?.cashforceTax ? provideData?.cashforceTax : `Não informadao` }}
              </p>
            </div>
            <div class="w-60 flex flex-col">
              <h4 class="text-gray-700">Nome do responsável:</h4>
              <p class="text-gray-500">{{ provideData?.responsibleName ? provideData?.responsibleName : `Não informadao`
}}</p>
            </div>
            <div class="w-60 flex flex-col">
              <h4 class="text-gray-700">E-mail do responsável:</h4>
              <p class="">{{ provideData?.responsibleEmail ? provideData?.responsibleEmail : `Não informadao` }}</p>
            </div>
            <div class="w-60 flex flex-col">
              <h4 class="text-gray-700">Cargo do responsável:</h4>
              <p class="text-gray-500">{{
    provideData?.responsiblePosition ? provideData?.responsiblePosition : `Não informadao`
}}
              </p>
            </div>
            <div class="w-60 flex flex-col">
              <h4 class="text-gray-700">Telefone do responsável:</h4>
              <p class="text-gray-500">{{ provideData?.responsiblePhone ? provideData?.responsiblePhone : `Não
                informadao` }}</p>
            </div>
            <div class="w-60 flex flex-col">
              <h4 class="text-gray-700">Celular do responsável:</h4>
              <p class="text-gray-500">{{ provideData?.responsibleMobile ? provideData?.responsibleMobile : `Não
                informadao` }}</p>
            </div>
            <div class="w-60 flex flex-col">
              <h4 class="text-gray-700">Web site:</h4>
              <p class="text-gray-500">{{ provideData?.website ? provideData?.website : `Não informadao` }}</p>
            </div>
            <div class="w-60 flex flex-col">
              <h4 class="text-gray-700">CEP:</h4>
              <p class="text-gray-500">{{ provideData?.postalCode ? provideData?.postalCode : `Não informadao` }}</p>
            </div>
            <div class="w-60 flex flex-col">
              <h4 class="text-gray-700">Endereço:</h4>
              <p class="text-gray-500">{{ provideData?.address ? provideData?.address : `Não informadao` }}</p>
            </div>
            <div class="w-60 flex flex-col">
              <h4 class="text-gray-700">Número:</h4>
              <p class="text-gray-500">{{ provideData?.number ? provideData?.number : `Não informadao` }}</p>
            </div>
            <div class="w-60 flex flex-col">
              <h4 class="text-gray-700">Complemento:</h4>
              <p class="text-gray-500">{{ provideData?.complement ? provideData?.complement : `Não informadao` }}</p>
            </div>
            <div class="w-60 flex flex-col">
              <h4 class="text-gray-700">Bairro:</h4>
              <p class="text-gray-500">{{ provideData?.neighborhood ? provideData?.neighborhood : `Não informadao` }}
              </p>
            </div>
            <div class="w-60 flex flex-col">
              <h4 class="text-gray-700">Cidade:</h4>
              <p class="text-gray-500">{{ provideData?.city ? provideData?.city : `Não informadao` }}</p>
            </div>
            <div class="w-60 flex flex-col">
              <h4 class="text-gray-700">Estado:</h4>
              <p class="text-gray-500">{{ provideData?.state ? provideData?.state : `Não informadao` }}</p>
            </div>
            <div class="w-60 flex flex-col">
              <h4 class="text-gray-700">Banco:</h4>
              <p class="text-gray-500">{{ provideData?.bank ? provideData?.bank : `Não informadao` }}</p>
            </div>
            <div class="w-60 flex flex-col">
              <h4 class="text-gray-700">Agência:</h4>
              <p class="text-gray-500">{{ provideData?.bankAgency ? provideData?.bankAgency : `Não informadao` }}</p>
            </div>
            <div class="w-60 flex flex-col">
              <h4 class="text-gray-700">Conta:</h4>
              <p class="text-gray-500">{{ provideData?.account ? provideData?.account : `Não informadao` }}</p>
            </div>
            <div class="w-60 flex flex-col">
              <h4 class="text-gray-700">Documento:</h4>
              <p class="text-gray-500">{{ provideData?.documents ? provideData?.documents : `Não informadao` }}</p>
            </div>
            <div class="w-60 flex flex-col">
              <h4 class="text-gray-700">Número de telefone:</h4>
              <p class="text-gray-500">{{ provideData?.phoneNumber ? provideData?.phoneNumber : `Não informadao` }}</p>
            </div>
            <div class="w-60 flex flex-col">
              <h4 class="text-gray-700">Situação:</h4>
              <p class="text-gray-500">{{ provideData?.situation ? provideData?.situation : `Não informadao` }}</p>
            </div>
            <div class="w-60 flex flex-col">
              <h4 class="text-gray-700">Data da situação:</h4>
              <p class="text-gray-500">{{ provideData?.situationDate ? provideData?.situationDate : `Não informadao` }}
              </p>
            </div>
            <div class="w-60 flex flex-col">
              <h4 class="text-gray-700">CNPJ:</h4>
              <p class="text-gray-500">{{ provideData?.cnpjs.cnpj ? provideData?.cnpjs.cnpj : `Não informadao` }}</p>
            </div>
            <div class="w-60 flex flex-col">
              <h4 class="text-gray-700">E-mail:</h4>
              <p class="text-gray-500">{{ provideData?.email ? provideData?.email : `Não informadao` }}</p>
            </div>

          </div>

          <div class="mt-4">
            <slot name="footer">

              <button
                class="flex float-right justify-center items-center bg-[#00AD8C] hover:bg-[#029d80] p-2 w-40 text-white rounded"
                @click="$emit('close')">
                Fechar</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { getProvider } from '../infra/requests'
export default {
  props: {
    show: Boolean,
    provider: Number
  },
  data() {
    return {
      provideData: null
    };
  },

  async updated() {
    const result = await getProvider(this.provider)
    this.provideData = result
  },
}
</script>