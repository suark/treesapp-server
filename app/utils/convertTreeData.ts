// will transform tree data to the format my client will want
// https://github.com/react-community/react-native-maps/blob/master/docs/marker.md
/*
title	String		The title of the marker. This is only used if the component has no children that are a <Callout />, in which case the default callout behavior will be used, which will show both the title and the description, if provided.
description	String		The description of the marker. This is only used if the component has no children that are a <Callout />, in which case the default callout behavior will be used, which will show both the title and the description, if provided.
image	ImageSource		A custom image to be used as the marker's icon. Only local image resources are allowed to be used.
pinColor	Color		If no custom marker view or custom image is provided, the platform default pin will be used, which can be customized by this color. Ignored if a custom marker is being used.

For Android, the set of available colors is limited. Unsupported colors will fall back to red. See #887 for more information.
coordinate	LatLng		The coordinate for the marker.
centerOffset	Point	(0, 0)	The offset (in points) at which to display the view.

By default, the center point of an annotation view is placed at the coordinate point of the associated annotation. You can use this property to reposition the annotation view as needed. This x and y offset values are measured in points. Positive offset values move the annotation view down and to the right, while negative values move it up and to the left.

For Google Maps, see the anchor prop.
calloutOffset	Point	(0, 0)	The offset (in points) at which to place the callout bubble.

This property determines the additional distance by which to move the callout bubble. When this property is set to (0, 0), the anchor point of the callout bubble is placed on the top-center point of the marker view’s frame. Specifying positive offset values moves the callout bubble down and to the right, while specifying negative values moves it up and to the left.

For Google Maps, see the calloutAnchor prop.
anchor	Point	(0.5, 1)	Sets the anchor point for the marker.

The anchor specifies the point in the icon image that is anchored to the marker's position on the Earth's surface.

The anchor point is specified in the continuous space [0.0, 1.0] x [0.0, 1.0], where (0, 0) is the top-left corner of the image, and (1, 1) is the bottom-right corner. The anchoring point in a W x H image is the nearest discrete grid point in a (W + 1) x (H + 1) grid, obtained by scaling the then rounding. For example, in a 4 x 2 image, the anchor point (0.7, 0.6) resolves to the grid point at (3, 1).

For MapKit on iOS, see the centerOffset prop.
calloutAnchor	Point	(0.5, 0)	Specifies the point in the marker image at which to anchor the callout when it is displayed. This is specified in the same coordinate system as the anchor. See the anchor prop for more details.

The default is the top middle of the image.

For MapKit on iOS, see the calloutOffset prop.
flat	Boolean	false	Sets whether this marker should be flat against the map true or a billboard facing the camera.
identifier	String		An identifier used to reference this marker at a later date.
rotation	Float	0	A float number indicating marker's rotation angle, in degrees.
draggable	<null>		This is a non-value based prop. Adding this allows the marker to be draggable (re-positioned).
tracksViewChanges	Boolean	true	Sets whether this marker should track view changes. It's recommended to turn it off whenever it's possible to improve custom marker performance. Note: iOS Google Maps only.
tracksInfoWindowChanges	Boolean	false	Sets whether this marker should track view changes in info window. Enabling it will let marker change content of info window after first render pass, but will lead to decreased performance, so it's recommended to disable it whenever you don't need it. Note: iOS Google Maps only.
stopPropagation	Boolean	false	Sets whether this marker should propagate onPress events. Enabling it will stop the parent MapView's onPress from being called. Note: iOS only. Android does not propagate onPress events. See #1132 for more information.
opacity	Float	1.0	The marker's opacity between 0.0 and 1.0.
