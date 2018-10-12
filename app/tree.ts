export class NodeTree {
    public nodes: GrowthNode[];
    
    public growTree() {
        for(let node of this.nodes) {
            if (node.branchFactor === 0 && node.isBud) {
                this.growTrunk(node);
            } else {
                this.growBranch(node);
            }
        }
    }

    public growBranch(node: GrowthNode) {
        const newBranchNode = new GrowthNode(node);
        newBranchNode.branchFactor = node.branchFactor + 1;
    }

    public growTrunk(node: GrowthNode) {
        const newTrunkNode = new GrowthNode(node);
        newTrunkNode.branchFactor = 0;
        newTrunkNode.isBud = true;
    }

}

class BranchNode {

}

class GrowthNode {
    constructor(parentNode?: GrowthNode) {
        this.isBud = true;
        this.growthFactor = (parentNode && parentNode.growthFactor + 1) || 0;
        this.root = parentNode || null;
        this.branches = [];
        parentNode.branches.push(this);
    }

    public isBud: boolean;

    /**
     * Number of nodes of separation from the trunk
     */
    public branchFactor: number;

    /**
     * Number of nodes of separation of this node from the root
     */
    public growthFactor: number;

    /**Angle that this node branches out at */
    public growthAngle: number;

    public root: GrowthNode;
    public branches: GrowthNode[];


}