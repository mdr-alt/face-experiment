import {Network} from "@haechi-labs/face-types";

export const resolveApiKey = (network) => {
  switch (network) {
    case Network.ETHEREUM:
    case Network.POLYGON:
    case Network.BNB_SMART_CHAIN:
    case Network.KLAYTN:
    case Network.BORA:
      return 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC5jEuZU9r-SBfRHSx70ynSh-3Ew7SapJTbLqEUiA0ZJ2w3OUWeJPz8aYHX0Py78kNaoCCQa8JdAXsyyrrMLE8gmIqoFrjzFYmcUZ1sc5uP7ue8iDhZURYlauFC3npRiMvL__Q_CeIQq9MrFqvCLOZcU-WW-_sjRbslLGMmQWPjcQIDAQAB';
    case Network.GOERLI:
    case Network.MUMBAI:
    case Network.BNB_SMART_CHAIN_TESTNET:
    case Network.BAOBAB:
    case Network.BORA_TESTNET:
      return 'MIICXAIBAAKBgQCCq1donZ6zeR5_WNHls1G885KUuB9K666jcnlNsTKWFCt_kwj4M94RkFUJM0OjtkMm2YwNwGQHxXEFb-XepIGH0vQChCBTPTmz6KWZDzCgqA-35tVw5GWYSJwynQGwnnm0XMbdem0Kox_ucrHWG8zggbmnw9IB7Uds2Y1GtEqH-QIDAQABAoGABAiT9ye-aV3YwieUuxlw8Xs3UB3q4V4rEuKKugo5PIa83QBF65t2RGaHKXSKpvgOVJmsiBQjQlYm6fsNRnUfhm0tzjhnlMo9IN3jxnnNZkJpSSm9O5t0s024hj4CdgXR76ub-Bju9399gICefl9OvyklXzVQMbvKPXykM-G3WwECQQDpAeo33wXrc-KP74ev1swvVAb1gxLYWxwSaMKZVon6Wyd-JKDR6Kb2UICZUIxTxXcMz5gn2p2BDPeh9B_cNlXhAkEAj5A5rdif-dWfW-uMzpl5YiOjZjLwwHRu_23HhAXAvKyZE1JsoYyPZtS-sibTXFMGw-_2uELu_cIULB85E6bFGQJBAJc4U-7AwlHF2uM5PGFlUQziRsXttDxQHQ7hiHIF1PRzVlUqpmi0yi8PnfZibUAs5o-c5w3udsv7Q3eLPWYoqWECQCjSPsRjA2IbzxtpB_m7BBvWvGCT_YcL1IAG7CNrK1m6zjADUOZCvIfl2G95wMHQzeyq8AGG7sPzCp9dJXKkCgkCQDYWa9Wp93slTLqgxl_sKBd33jOvBirbYLH01Gc7xfgUgiIVpk6J6SrQll91sxWuIcQM9Y26X2X3iJVEYt8hcpc=';
    default:
      throw new Error("unsupported network error");
  }
}