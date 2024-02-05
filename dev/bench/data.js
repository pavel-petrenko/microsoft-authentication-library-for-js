window.BENCHMARK_DATA = {
  "lastUpdate": 1707102317997,
  "repoUrl": "https://github.com/pavel-petrenko/microsoft-authentication-library-for-js",
  "entries": {
    "msal-node client-credential Regression Test": [
      {
        "commit": {
          "author": {
            "email": "thomas.norling@microsoft.com",
            "name": "Thomas Norling",
            "username": "tnorling"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7a55511680aec602310f63db0bb5b7d2b07fab3",
          "message": "Fix electron webpack samples (#6864)\n\nThe electron webpack samples' transforms weren't updated when we changed\r\nto .cjs extensions which breaks native module imports (node extensions).\r\nThis PR addresses by adding .cjs to the list of files to transform",
          "timestamp": "2024-02-01T14:40:23-08:00",
          "tree_id": "f52a9b6647fc2a3d908aae83ec2062eff9175110",
          "url": "https://github.com/pavel-petrenko/microsoft-authentication-library-for-js/commit/e7a55511680aec602310f63db0bb5b7d2b07fab3"
        },
        "date": 1707102316808,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 183755,
            "range": "±1.86%",
            "unit": "ops/sec",
            "extra": "220 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 176847,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "220 samples"
          }
        ]
      }
    ]
  }
}