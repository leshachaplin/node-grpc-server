# Location of Node dependency binaries
BIN="./node_modules/.bin"

# Location of Node.js proto tools
PROTOC="$BIN/grpc_tools_node_protoc"

# Location of Node.js plugin
PLUGIN_NODE="$BIN/grpc_tools_node_protoc_plugin"

# Location of TypeScript plugin
PLUGIN_TS="$BIN/protoc-gen-ts"

# Protocol buffer source locations
PROTO_SOURCES=(
    "./src/protocol"
)

# Destination for generated protocol buffer code
PROTO_OUT="./lib/proto"

# Generate bindings for each protocol buffer source location
for SOURCE in "${PROTO_SOURCES[@]}"; do
    echo "Generating protocol buffers from $SOURCE"

    # Generate JavaScript
    $PROTOC \
        --plugin=protoc-gen-grpc=$PLUGIN_NODE \
        --js_out=import_style=commonjs,binary:$PROTO_OUT \
        --grpc_out=$PROTO_OUT \
        -I $SOURCE \
        $SOURCE/*.proto

    # Generate TypeScript declarations
    $PROTOC \
        --plugin=protoc-gen-ts=$PLUGIN_TS \
        --ts_out=$PROTO_OUT \
        -I $SOURCE \
        $SOURCE/*.proto

done
