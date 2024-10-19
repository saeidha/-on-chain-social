import { http, createConfig } from 'wagmi'
import { base } from 'wagmi/chains'; 
import { coinbaseWallet, walletConnect } from 'wagmi/connectors'

const connector = coinbaseWallet({
  appName: 'My Wagmi App'
})

export const config = createConfig({
  chains: [base],
  connectors: [
    connector,
    walletConnect({
      projectId: '8acb8ab42286b5fb6c4f1e8c5d3bd734',
    }),
  ],
  transports: {
    [base.id]: http()
  }
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
