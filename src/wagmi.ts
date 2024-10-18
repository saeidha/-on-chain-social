import { http, createConfig } from 'wagmi'
import { base } from 'wagmi/chains'; 
import { coinbaseWallet } from 'wagmi/connectors'


const connector = coinbaseWallet({
  appName: 'My Wagmi App',
  preference: 'smartWalletOnly'
})

export const config = createConfig({
  chains: [base],
  connectors: [
    connector
  ],
  transports: {
    [base.id]: http()
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
