export const MerkleDistributorABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
    ],
    name: 'AddressEmptyCode',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'AddressInsufficientBalance',
    type: 'error',
  },
  {
    inputs: [],
    name: 'FailedInnerCall',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MerkleDistributor__AlreadyClaimed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MerkleDistributor__AlreadyRefunded',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MerkleDistributor__Finished',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MerkleDistributor__InvalidCaller',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MerkleDistributor__InvalidPaginationParameters',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'param',
        type: 'string',
      },
    ],
    name: 'MerkleDistributor__InvalidParams',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MerkleDistributor__InvalidProof',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MerkleDistributor__NoClaimableTokensLeft',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MerkleDistributor__NotStarted',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MerkleDistributor__NothingToRefund',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MerkleDistributor__PermissionDenied',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MerkleDistributor__Refunded',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'SafeERC20FailedOperation',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'distributionId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Claimed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'distributionId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isERC20',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'uint40',
        name: 'startTime',
        type: 'uint40',
      },
    ],
    name: 'Created',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'distributionId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Refunded',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'distributionId',
        type: 'uint256',
      },
      {
        internalType: 'bytes32[]',
        name: 'merkleProof',
        type: 'bytes32[]',
      },
    ],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'isERC20',
        type: 'bool',
      },
      {
        internalType: 'uint176',
        name: 'amountPerClaim',
        type: 'uint176',
      },
      {
        internalType: 'uint40',
        name: 'walletCount',
        type: 'uint40',
      },
      {
        internalType: 'uint40',
        name: 'startTime',
        type: 'uint40',
      },
      {
        internalType: 'uint40',
        name: 'endTime',
        type: 'uint40',
      },
      {
        internalType: 'bytes32',
        name: 'merkleRoot',
        type: 'bytes32',
      },
      {
        internalType: 'string',
        name: 'title',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'ipfsCID',
        type: 'string',
      },
    ],
    name: 'createDistribution',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'distributionCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'distributions',
    outputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'isERC20',
        type: 'bool',
      },
      {
        internalType: 'uint40',
        name: 'walletCount',
        type: 'uint40',
      },
      {
        internalType: 'uint40',
        name: 'claimedCount',
        type: 'uint40',
      },
      {
        internalType: 'uint176',
        name: 'amountPerClaim',
        type: 'uint176',
      },
      {
        internalType: 'uint40',
        name: 'startTime',
        type: 'uint40',
      },
      {
        internalType: 'uint40',
        name: 'endTime',
        type: 'uint40',
      },
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'uint40',
        name: 'refundedAt',
        type: 'uint40',
      },
      {
        internalType: 'bytes32',
        name: 'merkleRoot',
        type: 'bytes32',
      },
      {
        internalType: 'string',
        name: 'title',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'ipfsCID',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'distributionId',
        type: 'uint256',
      },
    ],
    name: 'getAmountClaimed',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'distributionId',
        type: 'uint256',
      },
    ],
    name: 'getAmountLeft',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'start',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'stop',
        type: 'uint256',
      },
    ],
    name: 'getDistributionIdsByOwner',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'start',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'stop',
        type: 'uint256',
      },
    ],
    name: 'getDistributionIdsByToken',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'distributionId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'wallet',
        type: 'address',
      },
    ],
    name: 'isClaimed',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'distributionId',
        type: 'uint256',
      },
    ],
    name: 'isWhitelistOnly',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'distributionId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'wallet',
        type: 'address',
      },
      {
        internalType: 'bytes32[]',
        name: 'merkleProof',
        type: 'bytes32[]',
      },
    ],
    name: 'isWhitelisted',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onERC1155Received',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'distributionId',
        type: 'uint256',
      },
    ],
    name: 'refund',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
