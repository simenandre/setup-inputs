# setup-inputs

I imagine something like this:

```yaml
- uses: cobraz/setup-inputs@v1
  with:
    inputs: |
      tag:
        required: true
      service:
        required: true
      env:
        required: true
```
