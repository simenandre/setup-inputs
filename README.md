# setup-inputs

This action parses inputs regardless of which event triggered the workflow.

It is currently useful for workflows that both use dispatch methods,
`repository_dispatch` and `workflow_dispatch`. In the future, we might add
support for more events and input validation.

## Quickstart

```yaml
- uses: cobraz/setup-inputs@v1
  id: inputs
```

With that you can access the inputs for both repository and workflow dispatch as
such:

```yaml
- runs: ${{ steps.inputs.outputs.a-string }}
```

Or the whole JSON object, as such:

```yaml
- runs: ${{ steps.inputs.outputs.payload }}
```

## Example

See the [testing.yml](.github/workflows/testing.yml) for a full example.
