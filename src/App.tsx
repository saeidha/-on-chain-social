import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Avatar, Name } from '@coinbase/onchainkit/identity';
import { base } from 'viem/chains';

function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()
  const address = account.address

  return (
    <>
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      {address && (
        <>
          <Avatar address={address} chain={base} />
          <Name address={address} chain={base} />
        </>
      )}

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => {
          { console.log(connector.name) }
          if (connector.name != 'Keplr') {
            return (<button
              key={connector.uid}
              onClick={() => connect({ connector })}
              type="button"
            >
              {connector.name}
            </button>);

          }
        })}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
    </>
  )
}

export default App
