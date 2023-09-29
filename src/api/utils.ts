export function mapEntity<A>(data: { id?: string | null; attributes?: A | null }): {
	id: string;
	attributes: A;
} {
	return data as { id: string; attributes: A };
}

export function mapDefiniteArray<T>(source: Array<T | undefined | null>): Array<T> {
	return source as Array<T>;
}
